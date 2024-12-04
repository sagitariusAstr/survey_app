import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../components/Layout/MainLayout/MainLayout';
import fetch_svc from './services/fetch.service';
import styled from 'styled-components';
import * as XLSX from 'xlsx';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "./css/styles.css";


ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

   //styled components
//<------------------------------------------------------------------------------->
export const DetailContainer = styled.div`
background-color: #E4F1FF;
width:69%;
border-radius:5px;
padding:9%; 
margin-left:6%;
font-size : large;
height:54%;


@media(max-width: 768px){
    width:100%;
    margin-left:0px;
}
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
  
  animation:  slideInFromLeft 2s ease-in-out;

`;

export const Response1Button = styled.button`
color:white;
margin-right:5px;
`;
export const Response2Button = styled.button`
color:white;
`;

export const ButtonWrapper = styled.div`
margin-top: 10px;

@media(max-width: 768px){
    margin-left:106px;
}
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
  
  animation:  slideInFromLeft 1s ease-in-out;
`;


export const H4holder = styled.h4 `
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

animation:  slideInFromLeft 1s ease-in-out;

`







//<-------------------------------------------------------------------------------->

const StudentDetail = () => {
    const { studentid } = useParams();
    const [detail,setDetails] = useState([]);
    const [response2,setResponse2] = useState([]);
    const[rollno,setRollNo] = useState();
    const[class_student,setClassStudent] = useState();
    const[name,setName] = useState();
    
    const [score,SetScore] = useState({
        overall_stress :0,
        emotional_distress:0,
        behavioral_difficulties:0,
        hyperactivity_difficulties:0,
        difficulty_peers:0,
        kind_behavior:0,
      });
    const [score_array,Setarray] = useState([]);
    const [scroll,SetScroll] = useState(false);
    const [response1score,setReponse1Score] = useState();
    const [impactdescription,SetImpactDescription] = useState();
    const [impactcolor,SetImpactColor] = useState();

   
    

    


    //<-----------------------Graph operation------------------------------>

    let graphData = {
      labels: [
        "overall stress",
        "Emotional Distress",
        "Behavioural difficulties",
        "Hyperactivity",
        "Difficulty getting along with peers",
        "kind behaviour"
      ],
      datasets: [
        {
          label: 'Score',
          data: score_array,
          backgroundColor: [
            '#FF6384', // Red
            '#36A2EB', // Blue
            '#FFCE56', // Yellow
            '#4BC0C0', // Teal
            '#9966FF', // Purple
            '#FF9F40'  // Orange
          ],
          borderColor: [
            '#FF6384', // Red
            '#36A2EB', // Blue
            '#FFCE56', // Yellow
            '#4BC0C0', // Teal
            '#9966FF', // Purple
            '#FF9F40'  // Orange
          ],
          borderWidth: 1,
        },
      ],
    };
    


    useEffect(() => {
      const setvalue = () => {
        Setarray(Object.values(score));
      }
      setvalue()
    },[score])


    

   









    //<----------------------------END---------------------------------------->

    

    
    const fetchstudent = async () => {
        try{
           
            let response = await fetch_svc.fetchStudent(studentid)
            if(response){
                setDetails(response.data.result)
                
            }
            

        }catch(error){
            console.log("Error :",error)
        }
    }
    
    useEffect(() => {
        fetchstudent();
    },[])

    useEffect(() => {
        if(detail && detail){
           if(detail[0]&&detail[0]){
            setClassStudent(detail[0].class)
            setRollNo(detail[0].roll_no)
            setName(detail[0].name)
           }
        }
    },[detail])

const headerRow1 = ['unique_studentID','Name','Class',...detail?.map(response => response.question.question)]

//excel operation

const generateExcelFile = () => {
    if(detail.length == 0){
        console.log("There is no data")
        return ;
    }

    //create new work book
    const workbook = XLSX.utils.book_new();
    const sheetName = 'Response';

    const studentResponsesMap = new Map();
    detail.forEach(item => {
        const studentKey = item.unique_studentID;
        const response = item.response
        if (!studentResponsesMap.has(studentKey)) {
            studentResponsesMap.set(studentKey, [item.unique_studentID, item.name, item.class]);
          }
      
        const studentResponses = studentResponsesMap.get(studentKey);
        studentResponses.push(response);
    });

    const sheetData = [headerRow1.slice(0,28),...Array.from(studentResponsesMap.values())];
    const ws = XLSX.utils.aoa_to_sheet(sheetData);
    XLSX.utils.book_append_sheet(workbook, ws, sheetName);

    const fileName = 'responses.xlsx';
    XLSX.writeFile(workbook, fileName);
   

}


//For extracting response 1 score develop separate API for fetching the data



const fetchscore1 = async () => {
  try{
    let response = await fetch_svc.fetchStudent(studentid);
    if(response){
     setReponse1Score(response.data.result[0].response)
    }

    


  }catch(error){
    console.log("Error :",error)
  }
}




const loadimpactscore = () => {
  if(response1score === 0){
    SetImpactDescription("Close to average")
    SetImpactColor("#004225")
  }else if(response1score === 1){
    SetImpactDescription("Slightly raised")
    SetImpactColor("green")
  }else if(response1score === 2){
    SetImpactDescription("High")
    SetImpactColor("#EE9322")
  }else if(response1score >= 3 && response1score <= 10){
    SetImpactDescription("Very High")
    SetImpactColor("red")
  }
}





useEffect(() => {
  loadimpactscore()
},[response1score])


useEffect(() => {
  fetchscore1();
},[])

//<---------------------------END---------------------------------->

//<----------------------------Fetching response 2 score----------------------------->



const fetchscore = async () => {
  try{
    let response = await fetch_svc.fetchScoreResponse(studentid);
    if(response){
      setResponse2(response.data.result)
    }
    response2 && response2.map((index) => {
      return(
        console.log(index)
      )
    })

  }catch(error){
    console.log("Error :",error)
  }
}

useEffect(() => {
  fetchscore()
},[])



const emotionalProblems = [3,4,13,16,24]
const conduct = [5,7,12,18,22]
const hyperactivity = [2,10,15,21,25]
const peer_problem = [6,11,14,19,23]
const pro_social = [4,9,17,20]


 










useEffect(() => {
  const calc_score = () => {
    let overall_stress =  0
    let emotional_distress= 0
    let behavioral_difficulties= 0
    let hyperactivity_difficulties= 0
    let difficulty_peers= 0
    let kind_behavior= 0
    let conductScore = 0
    
    
   response2 && response2.forEach((index) => {
    if (emotionalProblems.includes(index.question_id)) {
      emotional_distress += index.response;
    } else if (conduct.includes(index.question_id)) {
      behavioral_difficulties += index.response;
    } else if (hyperactivity.includes(index.question_id)) {
      hyperactivity_difficulties += index.response;
    } else if (peer_problem.includes(index.question_id)) {
      difficulty_peers += index.response;
    } else if (pro_social.includes(index.question_id)) {
      kind_behavior += index.response;
    }

    
  
    overall_stress = emotional_distress + behavioral_difficulties + hyperactivity_difficulties + difficulty_peers
  
    SetScore({
        overall_stress,
        emotional_distress,
        behavioral_difficulties,
        hyperactivity_difficulties,
        difficulty_peers,
        kind_behavior,
       
    })
   })
  }

  calc_score();
},[response2])






const array_score = Object.values(score)
const array_category = Object.keys(score)




const table_data = []

for( let i = 0; i < 6; i++){
  let array_interpretation = ""
  let array_description = ""
  let array_color = ""
 

  if(array_category[i] === "overall_stress"){
    if(array_score[i] >= 0 && array_score[i] <= 14){
      array_interpretation = "Close to average"
      array_color = "green"
    }else if(array_score[i] >= 15 && array_score[i] <= 17){
      array_interpretation = "Slightly raised"
      array_color = "green"
    }else if(array_score[i] === 18 || array_score[i] === 19){
      array_interpretation = "High"
      array_color = "#EE9322"
    }else if(array_score[i] >= 20 && array_score[i] <= 40){
      array_interpretation = "Very high"
      array_color = "red"
    }
  }else if(array_category[i] === "emotional_distress" || array_category[i] === "behavioral_difficulties" ){
    if(array_score[i] >= 0 && array_score[i] <= 4){
      array_interpretation = "Close to average"
      array_color = "#004225"
    }else if(array_score[i] === 5){
      array_interpretation = "Slightly raised"
      array_color = "green"
    }else if(array_score[i] === 6){
      array_interpretation = "High"
      array_color = "#EE9322"
    }else if(array_score[i] >= 7 && array_score[i] <= 10){
      array_interpretation = "Very high"
      array_color = "red"
    }
  }else if(array_category[i] === "hyperactivity_difficulties"){
    if(array_score[i] >= 0 && array_score[i] <= 5){
      array_interpretation = "Close to average"
      array_color = "#004225"
    }else if(array_score[i] === 6){
      array_interpretation = "Slightly raised"
      array_color = "green"
    }else if(array_score[i] === 7){
      array_interpretation = "High"
      array_color = "#EE9322"
    }else if(array_score[i] >= 8 && array_score[i] <= 10){
      array_interpretation = "Very high"
      array_color="red"
    }
  }else if(array_category[i] === "difficulty_peers"){
    if(array_score[i] >= 0 && array_score[i] <= 2){
      array_interpretation = "Close to average"
      array_color = "#004225"
    }else if(array_score[i] === 3){
      array_interpretation = "Slightly raised"
      array_color = "green"
    }else if(array_score[i] === 4){
      array_interpretation = "High"
      array_color = "#EE9322"
    }else if(array_score[i] >= 5 && array_score[i] <= 10){
      array_interpretation = "Very high"
      array_color = "red"
    }
  }else if(array_category[i] === "kind_behavior"){
    if(array_score[i] >= 7 && array_score[i] <= 10){
      array_interpretation = "Close to average"
      array_color = "#004225"
    }else if(array_score[i] === 6  ){
      array_interpretation = "Slightly lower"
      array_color = "green"
    }else if(array_score[i] === 5){
      array_interpretation = "Low"
      array_color = "#EE9322"
    }else if(array_score[i] >= 0 && array_score[i] <= 4){
      array_interpretation = "Very low"
      array_color = "red"
    }
  }

  



  if(array_category[i] === "overall_stress"){
    array_description = "Score for overall stress"
  }else if(array_category[i] === "emotional_distress"){
    array_description = "Score for emotional distress"
  }else if( array_category[i] === "behavioral_difficulties"){
    array_description = "Score for Behavioral difficulties"
  }else if(array_category[i] === "hyperactivity_difficulties"){
    array_description = "Score for hyperactivity and concentration difficulties"
  }else if(array_category[i] === "difficulty_peers"){
    array_description = "Score for difficulties getting along with peers"
  }else if(array_category[i] === "kind_behavior"){
    array_description = "Score for kind and helpful behaviour"
  }




  


    table_data.push({
      table_category : array_description,
      table_score : array_score[i],
      table_interpretation : array_interpretation,
      table_color : array_color
      
    })
}





//<--------------------Event handlers---------------------------->

useEffect(() => {
  const handleScroll = () => {
      if(window.scrollY > 0){
        SetScroll(true);
        window.removeEventListener('scroll',handleScroll);
      }
  };

  window.addEventListener('scroll',handleScroll);

  return() => {
    window.removeEventListener('scroll',handleScroll);
  }
    
},[])

































 


//<--------------------JSX style object--------------------------------------------->

const pie_chart = {
  marginRight:"15px"
}



  

  return (
    <MainLayout>
        <div className='container'>
        <h1>Details</h1>
            <div className='row'>
                <div className='col-md-6 col-sm-12'>
                      
                      <H4holder>ID: {studentid}</H4holder>
                      <DetailContainer>
                          <p>Name: {name}</p>
                          <p>Roll no: {rollno}</p>
                          <p>Class: {class_student}</p>
                          
                      </DetailContainer>
                      <ButtonWrapper>
                        <Response1Button className='btn' onClick={generateExcelFile} style={{backgroundColor:"#0D1282"}}>Response 1</Response1Button>
                        <Response2Button className='btn '  style={{backgroundColor:"#0D1282"}}>Response 2</Response2Button>
                      </ButtonWrapper>
                      
                </div>
                <div className='col-md-6 col-sm-12'>
                 
                  <div className="card mb-4" style={{height:"350px"}}>
                    <div className="card-body">
                      {
                        graphData && <Pie
                          data={graphData} height={300} width={300} options={{ maintainAspectRatio: false }} />
                      }

                    </div>
                  </div>
                
                 
                    
                </div>
            </div>
            
            <div className={scroll ? 'table-design visible animated-table ':'table-design'}>
              <div className={'row'}>
                  <div className='col-md-12 col-sm-12'>
                        <p style={{backgroundColor:"#B4B4B3", display: "inline-block",marginRight:"5px",padding:"4px",borderRadius:"5px"}}>Submitted By:</p>
                        <p style={{display: "inline-block"}}>Student</p>
                      <div style={{backgroundColor:"#F1EFEF"}} className='card mb-4'>
                          <div className='card-body'>
                          <div className='maintable'>
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                              
                                <th style={{textAlign:"center"}} scope="col">Parameters</th>
                                <th style={{textAlign:"center"}}  scope="col">Score</th>
                                <th style={{textAlign:"center"}} scope="col">Interpretations</th>
                              </tr>
                            </thead>
                            <tbody>

                              {
                                table_data && table_data.map((index) => {
                                  return(
                                    <tr>

                                      <td style={{textAlign:"center"}}>{index.table_category}</td>
                                      <td  style={{textAlign:"center"}} >{index.table_score}</td>
                                      <td style={{backgroundColor:`${index.table_color}`,color:"white",textAlign:"center"}}>{index.table_interpretation}</td>
                                    </tr>
                                  )
                                })
                              }
                            
                              
                            
                            </tbody>
                          </table>
                        </div>
                          </div>
                      </div>
                        <p style={{backgroundColor:"#B4B4B3", display: "inline-block",marginRight:"5px",padding:"4px",borderRadius:"5px"}}>Young person's level of concern:</p>
                       
                          <p style={{display: "inline-block"}}>
                            This young person feels he/she has <span style={{textTransform:"uppercase",backgroundColor:`${impactcolor}`,color:"white",borderRadius:"3px",padding:"5px"}}>{impactdescription}</span>  difficulties.
                          </p>

                        

                        <h4>Impact Insight</h4>
                        <div className='card mb-4'>
                          <div className='card-body'>
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                  </tr>
                                
                                </tbody>
                              </table>
                          </div>
                        </div>
                  </div>
              </div>
            </div>
            
           

            <hr style={{width:"84%",margin: "20px auto",height:"3px",backgroundColor:"black"}} />
            
            <div className={scroll ? 'table-design visible animated-table ':'table-design'}>
              <div className='row'>
                  <div className='col-md-12 col-sm-12'>
                        <p style={{backgroundColor:"#B4B4B3", display: "inline-block",marginRight:"5px",padding:"4px",borderRadius:"5px"}}>Submitted By:</p>
                        <p style={{display: "inline-block"}}>Teacher</p>
                      <div className='card mb-4'>
                          <div className='card-body'>
                          <div className='maintable'>
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                              
                                <th scope="col">Parameters</th>
                                <th scope="col">score</th>
                                <th scope="col">Interpretation</th>
                              </tr>
                            </thead>
                            <tbody>

                              {
                                table_data && table_data.map((index) => {
                                  return(
                                    <tr>

                                      <td>{index.table_category}</td>
                                      <td>{index.table_score}</td>
                                      <td>Placeholder</td>
                                    </tr>
                                  )
                                })
                              }
                            
                              
                            
                            </tbody>
                          </table>
                        </div>
                          </div>
                      </div>
                        <p style={{backgroundColor:"#B4B4B3", display: "inline-block",marginRight:"5px",padding:"4px",borderRadius:"5px"}}>Young person's level of concern:</p>
                        <p style={{display: "inline-block"}}>This young person feels he has VERY HIGH difficulties.</p>

                        <h4>Impact Insight</h4>
                        <div className='card mb-4'>
                          <div className='card-body'>
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                  </tr>
                                
                                </tbody>
                              </table>
                          </div>
                        </div>
                  </div>
              </div>
            </div>

            


            
            
        </div>
    </MainLayout>

  )
}

export default StudentDetail