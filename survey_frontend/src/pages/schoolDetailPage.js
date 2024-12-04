import React,{useState,useEffect} from 'react'
import MainLayout from "../components/Layout/MainLayout/MainLayout"
import { useParams } from 'react-router-dom'
import fetchresponse_svc from './services/fetchresponse.service'
import TableWithStudents from '../components/Table/tablewithstudents'

const SchoolDetailPage = () => {

    const [uniquestudentid,setUniqueStudentId] = useState([]);
    const [names,setNames] = useState([]);

    const { name } = useParams();  
    

    const fetchstudents = async () => {
      try{
        let response = await fetchresponse_svc.getResponse1Students(name);
        if(response){
          setUniqueStudentId(response.data.result)
        }
        
      }catch(error){
        console.log("Error :",error)
      }
    }

    

    const fetchlistofstudents = async () => {
      try{
        let response = await fetchresponse_svc.getListofStudents(uniquestudentid);
       if(response && response){
        setNames(response.data.result)
       }
      }catch(error){
        console.log("Error :",error)
      }
    }

    
    
    


    useEffect(() => {
      fetchstudents()
    },[])

    useEffect(() => {
      if(uniquestudentid){
        fetchlistofstudents()
      }
    },[uniquestudentid])
    

    const data = []
    names && names.map((index) => {
      return(
        data.push(index)
      )
    })

   

  return (
    <MainLayout>
      <div className='container'>
        <h1>List of Students</h1>
        <div className='container'>
            <TableWithStudents data={data}  />
        </div>
      </div>
    </MainLayout>
  )
}

export default SchoolDetailPage