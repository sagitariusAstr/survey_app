import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'

const TableWithStudents = ({data}) => {
    const [searchTerm,setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

   

    const filteredData = data.filter((index) => {
        let full_name = `${index.name}`.toLowerCase();
        return full_name.includes(searchTerm.toLocaleLowerCase())
    })

    console.log(filteredData)

   

  return (
    <div>
        <input
            type='text'
            placeholder='Enter Name'
            value={searchTerm}
            onChange={handleChange}
        />
        <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Unique ID</th>
            
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>

              <th scope="row">{index + 1}</th>
              <td><NavLink style={{textDecoration:"none"}}>{item.name}</NavLink></td>
              <td>{item.unique_studentID}</td>
              
            </tr>
          ))}
        </tbody>
      </table>

        
    </div>
  )
}

export default TableWithStudents