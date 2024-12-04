import React,{useState,useEffect} from 'react'
import { useNavigate,useHistory } from 'react-router-dom'
import styled from 'styled-components';
import { motion } from 'framer-motion'




const Transition = () => {

   const [display,setDisplay] = useState(true)
    const navigate = useNavigate()

    
    const PageTransition = () => {
       setTimeout(() => {
            setDisplay(false);
            navigate("/instructions")

       },2500)
    }

   

    useEffect(() => {
        PageTransition()
    },[])


    //<---------------------Styled components---------------------------->
   

    const LoadingAnimation = styled.div `
    
   

    @keyframes slideInFromLeft {
        0% {
          transform: translateX(-100%);
          opacity: 0;
        }
        100% {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      font-family: 'Montserrat', sans-serif;
      font-size: 4em;
      white-space: nowrap;
      overflow: hidden;
      animation:  slideInFromLeft 2s ease-in-out;


    `

    const BackgroundImage = styled.div `
    background-image: url(../../public/images/whiteBG.jpg);
    background-size: cover;
    height: 100vh; 
    background-position: center; 
    background-color: rgba(255, 255, 255, 0.5);
    `







  return (
    <>
        {
            
               
                      <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>

                          <LoadingAnimation>
                              Welcome
                          </LoadingAnimation>
                      </div>
               
                 
            
        }






       
    </>
  )
}

export default Transition