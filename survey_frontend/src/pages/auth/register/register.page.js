import React from 'react'
import { Container,Row,Col,Form,Button } from "react-bootstrap";
import {FaTrash,FaPaperPlane} from "react-icons/fa";
import "./register.css";
import { useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import MainLayout from '../../../components/Layout/MainLayout/MainLayout';
import auth_svc from '../services/auth.service';
import {toast} from 'react-toastify';

const RegisterPage = () => {

  const current_role = JSON.parse(localStorage.getItem('auth_user')).role;
  console.log(current_role);
  const navigate = useNavigate();
  let formik = useFormik({
    initialValues:{
        name:null,
        email:null,
        password:null,
        role:null,
    },
    validationSchema:  null,
    onSubmit : async (values) => {
       try{
        let response = await auth_svc.register(values);

       if(response){
        toast.success("Successfully registered new user")
        window.location.reload();
       }
       
       
       }catch(err){
        throw err
       }
    }
})

const hrStyle = {marginTop:"15px",marginBottom:"15px"}
  
  return (
    <>
      <MainLayout>
           <div className="register-bg">
                   <Container className="registration-container">
                        <Row style={{paddingBottom:"31px"}}>

                            <Col sm={12} md={{offset:2,span:8}} className={"mt-5 bg-light registration-box"} style={{borderRadius:"8px"}}>
                                <Col as={"h4"} className="text-center mt-3 h1-text-form ">Registration Page</Col>
                                <hr style={hrStyle} />
                                <Form onSubmit={formik.handleSubmit}>
                                    <Form.Group className="row mb-3">
                                        <Col as="label" sm={3} className="form-label">Name:</Col>
                                            <Col sm={9}>
                                                <Form.Control
                                                    size="sm"
                                                    type="text"
                                                    name="name"
                                                    onChange={formik.handleChange}
                                                    required
                                                    placeholder="Enter your Full name..."
                                                >
                                                
                                                </Form.Control>
                                                <span className="text-danger">{formik.errors?.name}</span>
                                            </Col>
                                    </Form.Group>
                                    <Form.Group className="row mb-3">
                                        <Col as="label" sm={3} className="form-label">Email:</Col>
                                        <Col sm={9}>
                                            <Form.Control
                                                size="sm"
                                                type="email"
                                                name="email"
                                                onChange={formik.handleChange}
                                                required
                                                placeholder="Enter your email"
                                            >

                                            </Form.Control>
                                            
                                        </Col>
                                    </Form.Group>
                                    
                                    <Form.Group className="row mb-3">
                                        <Col as="label" sm={3} className="form-label">Password:</Col>
                                        <Col sm={9}>
                                            <Form.Control
                                                size="sm"
                                                type="password"
                                                name="password"
                                                onChange={formik.handleChange}
                                                required
                                                placeholder="Enter your password"
                                            >

                                            </Form.Control>
                                            <span className="text-danger">{formik.errors?.password}</span>
                                        </Col>
                                    </Form.Group>
                                    { current_role === "admin" ?
                                        <Form.Group className="row mb-3">
                                        <Col as="label" sm={3} className="form-label">Role:</Col>
                                        <Col sm={9}> 
                                            <Form.Select size="sm" name="role" required onChange={formik.handleChange}>
                                                <option>
                                                    --Select Any One--
                                                </option>
                                                <option value="teachers">
                                                    Teacher
                                                </option>
                                                <option value="school">
                                                    School
                                                </option>
                                            </Form.Select> 
                                            <span className="text-danger">{formik.errors?.role}</span>
                                        </Col>
                                    </Form.Group> :
                                       <></>
                                    }

                                   
                                    
                                    
                                    
                                   
                                    <Form.Group className="row mb-3">
                                        <Col sm={{offset: 3, span :9}}>
                                                    <Button size="sm" type="reset" style={{backgroundColor:"#0D1282"}}  className="me-3 reset-btn" >
                                                        
                                                        <FaTrash className="button-icon" />
                                                        
                                                        
                                                         Reset
                                                    </Button>
                                                    <Button size="sm" type="submit"  className="login-btn" style={{backgroundColor:"#0D1282"}}>
                                                    
                                                        <FaPaperPlane className="button-icon"  />
                                                        Register
                                                        
                                                        
                                                    </Button>
                                        </Col>
                                </Form.Group>
                                    
                                </Form>
                                
                            </Col>

                        </Row>

                    </Container> 

            </div>
      </MainLayout>
    </>
    
  )
}

export default RegisterPage