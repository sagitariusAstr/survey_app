import React,{useState,useEffect} from 'react'
import MainLayout from '../components/Layout/MainLayout/MainLayout'
import { useParams,NavLink } from 'react-router-dom'
import fetch_svc from './services/fetch.service'
import  styled  from 'styled-components'


export const StudentListHolder = styled.div `
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

const StudentListPage = () => {

    const { classid } = useParams();
    const[students,setStudents] = useState([]);

    //<------------------------------Styled component---------------------------------------->

    




  const fetchstudents = async () => {
    try{
      let response = await fetch_svc.fetchStudents(classid)
      if(response){
        setStudents(response.data.result)
      }
    }catch(error){
      console.log("Error ",error)
    }
  }

 

  useEffect(() => {
    fetchstudents();
  },[])

  console.log(students);


  return (
    <MainLayout>
      <div className='container'>
          <h1>List of Students</h1>
          <StudentListHolder>
          <table className='table'>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Unique Student ID</th>


              </tr>
            </thead>
            <tbody>
              {students.map((item, index) => (
                <tr key={index}>

                  <th scope="row">{index + 1}</th>
                  {/* <td><NavLink to={`/schooldetail/${item.name}`} style={{textDecoration:"none"}}>{item.name}</NavLink></td> */}
                  <td><NavLink to={`/studentdetail/${item.unique_studentID}`} style={{ textDecoration: "none", color: "#0E21A0" }}>{item.name}</NavLink></td>
                  <td><NavLink to={`/studentdetail/${item.unique_studentID}`} style={{ textDecoration: "none", color: "#0E21A0" }}>{item.unique_studentID}</NavLink></td>


                </tr>
              ))}
            </tbody>


          </table>
          </StudentListHolder>
          


      </div>
        
    </MainLayout>
  )
}

export default StudentListPage