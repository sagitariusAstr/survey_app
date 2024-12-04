
import { Container, Row, Col, Form,Button } from "react-bootstrap";
import {FaTrash,FaPaperPlane} from "react-icons/fa";
import { ImPencil2 } from 'react-icons/im';
import {SiProtractor} from 'react-icons/si';
import {LiaDraftingCompassSolid} from 'react-icons/lia'
import {useFormik} from "formik";
import auth_svc from "../services/auth.service";
import * as Yup from "yup";
import "./login.css"
import { NavLink, useNavigate,Link } from "react-router-dom";
import {toast} from "react-toastify";
import styled from 'styled-components';
import { useState } from "react";
import {GiBlackBook} from 'react-icons/gi';


export const AttributionText = styled.div`
  color: white;
  a {
    color: white;
    text-decoration: none;

  }
`;
export const StyledCol = styled(Col)`
  height: 400px; /* Set the desired height here */
`;

export const StyledForm = styled(Form)`
background: #0D1282; /* fallback for old browsers */
background: -webkit-linear-gradient(
  to right,
  #EEEDED,
  #0D1282
); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #0D1282,
#071952);
  max-width: 400px; 
  width:300px;
  height:400px;
  margin: 0 auto; 
  border-radius:5px; 
  
`;




export const Contain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  
`;

const JumpingIconsPencil = styled.div`
@keyframes jump {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}
animation: jump 1s infinite;
`;

const JumpingIconsPencilProtractor = styled.div `
    @keyframes bounce{
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    animation : bounce 2s infinite ;
`

const CompassSolidAnimation = styled.div `
@keyframes bounce{
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-1px);
    }
}

animation : bounce 1s infinite ;
`

const BookSolidAnimation = styled.div `
@keyframes bounce{
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-15px);
    }
}

animation : bounce 2s infinite ;
`


export { JumpingIconsPencil, JumpingIconsPencilProtractor, CompassSolidAnimation, BookSolidAnimation };

const LoginPage = () => {
    let navigate = useNavigate();
    let [hover,setHover] = useState(false);

    const validateUser = Yup.object({
        email:Yup.string().required(),
        password: Yup.string().required()
    });
    let formik = useFormik({
        initialValues : {
            email:null,
            password:null
        },
        validateSchema : validateUser,
        onSubmit : async (values) => {
            try{
               let user_detail = await auth_svc.login(values)
               
                localStorage.setItem("auth_token",user_detail.data.result.auth_token);
                localStorage.setItem("auth_user",JSON.stringify(user_detail.data.result.user));
                const loggedin_user = JSON.parse(localStorage.getItem("auth_user")).role;
                toast.success("Welcome " +JSON.parse(localStorage.getItem("auth_user")).name);
           
                

               
                //redirect
                // navigate("/instructions")
                navigate("/transition")
          

            }catch(err){
                console.log("Error :",err.data.msg);
                toast.error(err.data.msg)
               
            }
        }
    });





    const handleHover = () => {
        setHover(!hover)
    }

    const hrStyle = {marginTop:"15px",marginBottom:"15px"}
    const Form_Control = {marginTop:"61px",marginLeft:"4px",marginRight:"4px"};
    const ButtonStyle = {
        color : hover ? "white" : "black",
    }



    //<---------styled components-------------------------->
   
    

    

    



    return (
       <>
       <div className="body-bg">
                <Container className="login-container">
                    <Contain>
                    
                        <StyledForm onSubmit={formik.handleSubmit}>
                           
                            
                            
                            <Col style={{color:'#FBD85D',fontSize: '24px'}} className="text-center mt-3 login-text  ">Login In</Col>
                            <div className="d-flex" style={{marginTop:"50px",marginLeft:"30px"}}>
                                <Col><JumpingIconsPencil><ImPencil2 size={30} color="#FBD85D" /></JumpingIconsPencil></Col>
                                <Col><JumpingIconsPencilProtractor><SiProtractor size={30} color="#FBD85D" /></JumpingIconsPencilProtractor></Col>
                                <Col><CompassSolidAnimation><LiaDraftingCompassSolid size={30} color="#FBD85D" /></CompassSolidAnimation></Col>
                                <Col><BookSolidAnimation><GiBlackBook size={30} color="#FBD85D" /></BookSolidAnimation></Col>
                            </div>
                            

                            <Form.Group style={Form_Control}  className="mb-3" >
                                <Form.Control size="sm"
                                        type="text"
                                        name="email"
                                        onChange={formik.handleChange}
                                        required type="email" placeholder="Enter email"   />

                            </Form.Group>

                            <Form.Group className="mb-3" style={{marginLeft:"4px",marginRight:"4px"}} >
                                <Form.Control  size="sm"
                                        type="password"
                                        name="password"
                                        onChange={formik.handleChange}
                                        required  type="password" placeholder="Password" />
                            </Form.Group>



                            <Form.Group className="row mb-3">
                                        <Col style={{marginLeft:"70px"}}>
                                                    <Button style={ButtonStyle} onMouseOver={handleHover} onMouseLeave={handleHover} size="sm" type="reset" variant='custom'  className="me-3 reset-btn" >
                                                        
                                                        
                                                        
                                                         Reset
                                                    </Button>
                                                    <Button style={ButtonStyle} size="sm" type="submit" variant='custom' className="login-btn">
                                                    
                                                        Login
                                                        
                                                        
                                                    </Button>
                                        </Col>
                            </Form.Group>
                           
                        </StyledForm>
                        
                    </Contain>


                </Container>
               
       </div>
        
       </>
      
       
    )
}

export default  LoginPage;