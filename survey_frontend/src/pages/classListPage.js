import React,{useState,useEffect} from 'react';
import { useParams,NavLink } from 'react-router-dom';
import MainLayout from '../components/Layout/MainLayout/MainLayout';
import fetch_svc from './services/fetch.service';
import  styled  from 'styled-components';

const ClassListHolder = styled.div`
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


const ClassListPage = () => {

const { name } = useParams();

let uniqueclassid = ""
let class_object = {}
const [classes,SetClass] = useState([]);

//<--------------------------Styled component----------------------------------->











//fetch all class using class name transferred as params

const loadclass = async () => {
  try{
    let response = await fetch_svc.fetchClass(name)
    if(response){
      const class_objects = response.data.result && response.data.result.map((index) => {
        return {
          class_name: index.class,
          uniqueclassid: name.split(" ")[0] + name.split(" ")[1] + index.class
        };
      });
      
      SetClass(class_objects);
    }
    
  }catch(error){
    console.log("Error :",error)
  }
}

console.log(classes);






useEffect(() => {
  loadclass();
},[])






  return (
   <MainLayout>
        <div className='container'>
            <h1>List of Class</h1>
            <ClassListHolder>
            <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'>Class</th>
                  </tr>

                </thead>
                <tbody>
                  {
                    
                    classes && classes.map((index) => (
                      <tr>
                          <td><NavLink to={`/studentlist/${index.uniqueclassid}`} style={{textDecoration:"none",color:"#0E21A0"}}>{index.class_name}</NavLink></td>

                      </tr>
                      
                    ))
                  }
                </tbody>
            </table>
            </ClassListHolder>
            
        </div>
   </MainLayout>
  )
}

export default ClassListPage