import React,{useEffect,useState} from 'react';
import MainLayout from '../components/Layout/MainLayout/MainLayout';
import * as XLSX from 'xlsx';
import fetchresponse_svc from './services/fetchresponse.service';



const ExtractResponse = () => {

  const [data2,setData2] = useState([]);
  const [data1,setData1] = useState([]);

  const loadResponse2Data = async () => {
    try{
      let response = await fetchresponse_svc.getResponse2Data();
      if(response){
        setData2(response.data.result)
      }
      
    }catch(error){
      console.log("Error :",error)
    }
  }

  const loadResponse1Data = async () => {
    try{
      let response = await fetchresponse_svc.getResponse1Data();
      if(response){
        setData1(response.data.result)
      }
    }catch(error){
        console.log("Error :",error)
    }
  }
  


  useEffect(() => {
    try{
      loadResponse2Data()
      loadResponse1Data()
    }catch(error){
      console.log("Error :",error)
    }
  },[])

  
  
  //headers for the chart sheet
  const headerRow2 = ['unique_studentID', 'Name', 'Class', ...data2?.map(response => response.question.question)];
  const headerRow1 = ['unique_studentID','Name','Class',...data1?.map(response => response.question.question)];

  const  generateExcelFile2 =  () => {
    
    if(data2.length === 0){
      console.log("There is no data")
      return;
    }
    //create new work book
      const workbook = XLSX.utils.book_new();
      const sheetName = 'Response';

    
    const studentResponsesMap = new Map();
    data2.forEach(item => {
      const studentKey = item.unique_studentID;
      const response = item.response;
  
      if (!studentResponsesMap.has(studentKey)) {
        studentResponsesMap.set(studentKey, [item.unique_studentID, item.name, item.class]);
      }
  
      const studentResponses = studentResponsesMap.get(studentKey);
      studentResponses.push(response);
    });

    const sheetData = [headerRow2.slice(0,28),...Array.from(studentResponsesMap.values())];
    

    

    const ws = XLSX.utils.aoa_to_sheet(sheetData);
    XLSX.utils.book_append_sheet(workbook, ws, sheetName);

    const fileName = 'responses.xlsx';
    XLSX.writeFile(workbook, fileName);


  }

  const  generateExcelFile1 =  () => {
    
    if(data2.length === 0){
      console.log("There is no data")
      return;
    }
    //create new work book
      const workbook = XLSX.utils.book_new();
      const sheetName = 'Response';

    
    const studentResponsesMap = new Map();
    data1.forEach(item => {
      const studentKey = item.unique_studentID;
      const response = item.response;
  
      if (!studentResponsesMap.has(studentKey)) {
        studentResponsesMap.set(studentKey, [item.unique_studentID, item.name, item.class]);
      }
  
      const studentResponses = studentResponsesMap.get(studentKey);
      studentResponses.push(response);
    });

    const sheetData = [headerRow1.slice(0,9),...Array.from(studentResponsesMap.values())];
    
    
    

    const ws = XLSX.utils.aoa_to_sheet(sheetData);
    XLSX.utils.book_append_sheet(workbook, ws, sheetName);

    const fileName = 'responses1.xlsx';
    XLSX.writeFile(workbook, fileName);


  }


  

  


  return (
    <MainLayout>
        <div className='container'>
          <div className='row'>
              <div className='col-md-6'>
                  <button onClick={generateExcelFile2} style={{backgroundColor:"#3498db"}}  className=' btn  '>Extract Response 2</button>
              </div>
              <div className='col-md-6'>
                  <button onClick={generateExcelFile1} className='btn btn-danger'>Extract Response 1</button>
              </div>
          </div>
        </div>

    </MainLayout>
  )
}

export default ExtractResponse