import React from 'react'
import { useState } from 'react';
import MainLayout from '../../components/Layout/MainLayout/MainLayout';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';





export const questionSet = [
  {
    id : 1,
    question: "I try to be nice to other people. I care about their feelings"
  },
  {
    id : 2,
    question: "I get a lot of headaches, stomach-aches, or sickness"
  },
  {
    id : 3,
    question: "I usually share with others, for example CDs, games, food"
  },
  {
    id : 4,
    question: "I get very angry and often lose my temper"
  },
  {
    id : 5,
    question: "I would rather be alone than with people of my age"
  },
  {
    id : 6,
    question: "I usually do as I am told"
  },
  {
    id : 7,
    question: "I worry a lot"
  },
  {
    id : 8,
    question: "I am helpful if someone is hurt, upset or feeling ill"
  },
  {
    id : 9,
    question: "I am constantly fidgeting or squirming (Squirming means :wriggle or twist the body from side to side, especially as a result of nervousness or discomfort)"
    
  },
  {
    id : 10,
    question: "I have one good friend or more"
  },
  {
    id : 11,
    question: "I fight a lot. I can make other people do what I want"
  },
  {
    id : 12,
    question: "I am often unhappy, depressed or tearful"
  },
  {
    id : 13,
    question: "Other people my age generally like me"
  },
  {
    id : 14,
    question: "I am easily distracted, I find it difficult to concentrate"
  },
  {
    id : 15,
    question: "I am nervous in new situations. I easily lose confidence"
  },
  {
    id : 16,
    question: "I am kind to younger children"
  },
  {
    id : 17,
    question: "I am often accused of lying or cheating"
  },
  {
    id : 18,
    question: "Other children or young people pick on me or bully me"
  },
  {
    id : 19,
    question: "I often volunteer to help others (parents, teachers, children)"
  },
  {
    id : 20,
    question: "I think before I do things"
  },
  {
    id : 21,
    question: "I take things that are not mine from home, school or elsewhere"
  },
  {
    id : 22,
    question: "I get along better with adults than with people my own age"
  },
  {
    id : 23,
    question: "I have many fears, I am easily scared"
  },
  {
    id : 24,
    question: "I finish the work I‟m doing. My attention is good"
  },
  
]

export const containerStyle = {
  marginTop: "20px",
 
};

export const maindiv = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/images/whiteBG.jpg)`,  // Replace with the actual path to your image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}



export const column1Style = {
  borderRadius : "5px  0 0 5px",
  backgroundColor:"#F0F0F0",
  textAlign:"center",
  padding:"30px",
  
  

}
export const column2Style = {
  borderRadius : "0  5px 5px 0",
  backgroundColor:"#F0F0F0",
  textAlign:"center",
  padding:"30px",

}

export const H1text = styled.h1`
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

    padding:20px;
    animation:  slideInFromLeft 1s ease-in-out;


   `;

export const QuestionSetWrapper = styled.div`
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

animation:  slideInFromRight 1s ease-in-out;
`







const InstructionLayout = () => {

   const navigate = useNavigate();
   

   


   //styled components

   
  //  const BackgroundImage = styled.div `
  //   background-image: url(${process.env.PUBLIC_URL}/images/whiteBG.jpg);
  //   background-size: cover;
  //   height: 100vh; 
  //   background-position: center; 
  //   background-color: rgba(255, 255, 255, 0.5);
  //   margin-top: -20px;
    
  //   `;

    




  

  return (
    <>
      <MainLayout>
    
     <div className='container' style={containerStyle}>
    
     <H1text>Welcome to Survey App</H1text>
     <div className='instructions'>
       <ul>
         <li>
           Please select Set 1 and then finally Set 2
         </li>
         <li>
           Please sign out after completing all tests.
         </li>
       </ul>
     </div>
     <QuestionSetWrapper>
     <div className='row'>
         <div className='col-md-6' style={column1Style}>
             <button onClick={() => navigate("/question1set")} className='btn btn-outline-secondary'>Take Set 1</button>
         </div>
         <div className='col-md-6' style={column2Style}> 
             <button onClick={() => navigate("/question2set")} className='btn btn-outline-secondary'>Take Set 2</button>
         </div>
     </div>
     </QuestionSetWrapper>
     
     
     
   </div>
     
     
    

    </MainLayout>
    </>
    
   
  );
}

export default InstructionLayout