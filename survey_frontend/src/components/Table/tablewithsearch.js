import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const TableWithSearch = ({ data}) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  console.log(data);
  
  const filteredData = data.filter(item => {
    let full_name = `${item.name}`.toLowerCase();
    return full_name.includes(searchTerm.toLocaleLowerCase())
  })

 

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">School ID</th>
            
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>

              <th scope="row">{index + 1}</th>
              {/* <td><NavLink to={`/schooldetail/${item.name}`} style={{textDecoration:"none"}}>{item.name}</NavLink></td> */}
              <td><NavLink to={`/classdetail/${item.name}`} style={{textDecoration:"none",color:"#0E21A0"}}>{item.name}</NavLink></td>
              <td>{item.id}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithSearch;
