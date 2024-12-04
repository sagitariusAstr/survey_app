import React, { useState,useEffect } from 'react'
import MainLayout from '../../components/Layout/MainLayout/MainLayout'
import {question1_svc,question2_svc} from './services/question1.service'
import Form from 'react-bootstrap/Form';
import {Row,Col,Button} from 'react-bootstrap';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import styled from 'styled-components';


export const FirstFormWrapper = styled.div`
  @keyframes slideInFromLeft {
    0% {
      transform : translateX(-100%);
      opacity:0;
    }

    100% {
      transform : translateX(0%);
      opacity : 1;
    }
  }

  animation : slideInFromLeft 1s ease-in-out;

  @media(max-width : 766px){
    padding:5px
  }

  
`

export const QuestionsWrapper = styled.div `
  @keyframes slideInFromRight {
    0% {
      transform : translateX(100%);
      opacity:0;
    }

    100% {
      transform : translateX(0%);
      opacity: 1;
    }
  }

  animation : slideInFromRight 1s ease-in-out;

`

export const ButtonWrapper = styled.div `
 
@keyframes slideInFromRight {
  0% {
    transform : translateX(100%);
    opacity:0;
  }

  100% {
    transform : translateX(0%);
    opacity: 1;
  }
}

animation : slideInFromRight 1s ease-in-out;
  
`



const Question1Layout = () => {

    const [questions,setQuestions] = useState([]);
    const [role,SetRole] = useState();

    const logged_in_role = JSON.parse(localStorage.getItem("auth_user")).role;
    
    useEffect(() => {
      SetRole(logged_in_role)
    },[logged_in_role])

    

    const getQuestions = async () => {
        try{
            let response = await question1_svc.getQuestions();
            if(response){
                setQuestions(response.data.data)
            }
        }catch(error){
            console.log("Error :",error)
        }
    }

    useEffect(() => {
        try{
            getQuestions()
        }catch(error){
            console.log(error)
        }
    },[])

   



    let formik = useFormik({
        initialValues: {
         
          name:null,
          class:null,
          roll_no:null,
          date_of_birth:null,
          unique_classID:null,
          unique_studentID:null,
          school:null,
          role:null,
          
        },
        validationSchema: null,
        onSubmit: async (values) => {
            try {
            
              
            const selectedOption = Object.keys(values);
            let selected_option = selectedOption.slice(8);
            let selected_values =Object.values(values);
            let radio_values = selected_values.slice(8);
           
            
           
           
              
              let response_array = [];
    
              selected_option.forEach((index,i) => {
                response_array.push({
                  question_id: index.split('-')[1],
                  response:radio_values[i]
                })
              })

             

             
             const current_user = JSON.parse(localStorage.getItem('auth_user')).name
             
            
             const unique_classID = current_user.split(" ")[0] + current_user.split(" ")[1] + values.class
             const unique_studentID = unique_classID + values.name.split(" ")[0].charAt(0) + values.name.split(" ")[1].charAt(0) + values.roll_no
            
             

             response_array.sort((a,b) => {
              return parseInt(a.question_id) - parseInt(b.question_id)
             })

             
              
             
    
              let response_data = {
               
                user : {
                  name:values.name,
                  class:values.class,
                  roll_no:values.roll_no,
                  date_of_birth:values.date_of_birth,
                  unique_classID:unique_classID,
                  unique_studentID:unique_studentID,
                  school:current_user,
                  role:role
                },
                responses: response_array
              };

             
             
              let response = await question1_svc.storeResponse(response_data);
              if(response){
                toast.success("Response was recorded successfully");
                 window.location.reload();
              }
             } catch (err) {
                throw err
            }
    
        }
    })
    
   
  return (
    <>
        <MainLayout>
            <form onSubmit={formik.handleSubmit} style={{overflow:"hidden"}}>
              <FirstFormWrapper>
              <Row>
                      <Col sm={12} md={{ offset: 2, span: 8 }} className={'mt-5 '}>
                          <Form.Group className='row mb-3'>
                              <Col as='label' sm={3} className="form-label">Name:</Col>
                              <Col sm={9}>
                                  <Form.Control
                                      size="sm"
                                      type="text"
                                      name="name"
                                      onChange={formik.handleChange}
                                      required
                                      placeholder="Enter Your Name"
                                  >

                                  </Form.Control>
                              </Col>
                          </Form.Group>
                          <Form.Group className='row mb-3'>
                  <Col as='label' sm={3} className="form-label">Class:</Col>
                  <Col sm={9}>
                    <Form.Control
                      size="sm"
                      type="text"
                      name="class"
                      onChange={formik.handleChange}
                      required
                      placeholder="Enter Your class"
                    >

                    </Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group className='row mb-3'>
                  <Col as='label' sm={3} className="form-label">Roll no:</Col>
                  <Col sm={9}>
                    <Form.Control
                      size="sm"
                      type="text"
                      name="roll_no"
                      onChange={formik.handleChange}
                      required
                      placeholder="Enter Your Roll no"
                    >

                    </Form.Control>
                  </Col>
                </Form.Group>
                          <Form.Group className='row mb-3'>
                              <Col as='label' sm={3} className="form-label">Date of Birth:</Col>
                              <Col sm={9}>
                                  <Form.Control
                                      name="date_of_birth"
                                      type="date"
                                      onChange={formik.handleChange}
                                  >

                                  </Form.Control>
                              </Col>
                          </Form.Group>

                      </Col>
                  </Row>
              </FirstFormWrapper>
                  <QuestionsWrapper>
                  {questions.map((question) => (
            <React.Fragment key={question.id}>
              <Form.Group controlId={`radioQuestion-${question.id}`} style={{ textAlign: "center" }}>
                <Form.Label style={{ fontWeight: "bold", fontSize: "20px" }}>{question.question}</Form.Label>

                {
                  question.id == 1 || question.id == 6 ? 
                  <div className="mb-3">
                  <Form.Check
                    inline
                    label="No"
                    name={`radioQuestion-${question.id}`}
                    type="radio"
                    id={`inline-radio-1-${question.id}`}
                    value="No"
                    required
                    onChange={formik.handleChange}
                  />
                  <Form.Check
                    inline
                    label="Yes - definite difficulties"
                    name={`radioQuestion-${question.id}`}
                    type="radio"
                    id={`inline-radio-2-${question.id}`}
                    value="Yes - definite difficulties"
                    required
                    onChange={formik.handleChange}
                  />
                  <Form.Check
                    inline
                    label="Yes - minor difficulties"
                    name={`radioQuestion-${question.id}`}
                    type="radio"
                    id={`inline-radio-3-${question.id}`}
                    value="Yes - minor difficulties"
                    required
                    onChange={formik.handleChange}
                  />
                  <Form.Check
                    inline
                    label="Yes - severe difficulties"
                    name={`radioQuestion-${question.id}`}
                    type="radio"
                    id={`inline-radio-4-${question.id}`}
                    value="Yes - severe difficulties"
                    required
                    onChange={formik.handleChange}
                  />
                </div> 
                :
                <div className="mb-3">
                  <Form.Check
                    inline
                    label="Not at all"
                    name={`radioQuestion-${question.id}`}
                    type="radio"
                    id={`inline-radio-1-${question.id}`}
                    value="Not at all"
                    required
                    onChange={formik.handleChange}
                  />
                  <Form.Check
                    inline
                    label="A medium amount"
                    name={`radioQuestion-${question.id}`}
                    type="radio"
                    id={`inline-radio-2-${question.id}`}
                    value="A medium amount"
                    required
                    onChange={formik.handleChange}
                  />
                  <Form.Check
                    inline
                    label="A little"
                    name={`radioQuestion-${question.id}`}
                    type="radio"
                    id={`inline-radio-3-${question.id}`}
                    value="A little"
                    required
                    onChange={formik.handleChange}
                  />
                  <Form.Check
                    inline
                    label="A great deal"
                    name={`radioQuestion-${question.id}`}
                    type="radio"
                    id={`inline-radio-4-${question.id}`}
                    value="A great deal"
                    required
                    onChange={formik.handleChange}
                  />
                </div>
                }

                

              </Form.Group>
              <hr style={{ width: "50%", margin: "10px auto" }} />
            </React.Fragment>
          ))}
                  </QuestionsWrapper>
         
           <Form.Group className="row mb-3">
            <ButtonWrapper>
              <Col sm={{ offset: 3, span: 9 }} md={{offset: 3, span:6}} className="d-flex justify-content-center align-items-center">
                <Button size="sm" type="reset" style={{backgroundColor:"#0D1282"}}  className="me-3 reset-btn" >
                    Clear Form
                </Button>
                <Button size="sm" type="submit" style={{backgroundColor:"#0D1282"}}  className="login-btn">
                  Send
                </Button>
              </Col>
            </ButtonWrapper>
            
          </Form.Group>
                  

            </form>
        </MainLayout>
    </>
  )
}

export default Question1Layout