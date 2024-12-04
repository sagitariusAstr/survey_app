import React, { useEffect, useState } from 'react';
import MainLayout from "../components/Layout/MainLayout/MainLayout";
import TableWithSearch from '../components/Table/tablewithsearch';
import fetch_svc from './services/fetch.service';
import  styled  from 'styled-components';


export const SchoolListHolder = styled.div`
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

const SchoolListPage = () => {

  


  const [fetched_data,setFetchedData] = useState([]);
  const [schoolname,setSchoolName] = useState();

  const loadData = async () => {
    try{
        let response = await fetch_svc.fetchSchools();
        if(response){
          setFetchedData(response.data.result)
        }
    }catch(error){
      console.log("Error :",error)
    }
  }

  useEffect(() => {
    loadData();
  },[])

  const data = []
  
  fetched_data && fetched_data.map((index) => {
    return(
      data.push({name:index.name,id:index.id})
    )
  })

 
  


  

  return (
    <MainLayout>
      <div className='container'>
        <h1>List of Schools</h1>
        <SchoolListHolder>
          <TableWithSearch data={data}/>
        </SchoolListHolder>
        
      </div>
    </MainLayout>
  );
}

export default SchoolListPage;