import React,{useEffect, useState} from 'react';
import { Link,NavLink } from 'react-router-dom';
import styled from 'styled-components';
import "./header.css";

export const NavWrapper = styled(NavLink)`
color: white;
  text-decoration: none;
  
  position: relative;

  &::after {
    content: "";
    display: block;
    height: 2px; /* Adjust this value to control the thickness of the underline */
    background-color: white;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px; /* Adjust this value to control the space between text and underline */
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &.active::after {
    transform: scaleX(1);
  }
`;

const Header = () => {
  const [username,setUserName] = useState();
  const [ userRole,setUserRole] = useState();
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  }

  const loadloggedinUser = () => {
    let user = JSON.parse(localStorage.getItem("auth_user"));
    setUserName(user.name);
    setUserRole(user.role);
  }

  useEffect(() => {
    loadloggedinUser();

  },[])

  

  return (
    <>
      <nav className="navbar navbar-expand-lg   ">
        {
          userRole && userRole == 'admin' ? 
          <div className="container-fluid">
          <Link to={"/instructions"} className="navbar-brand" style={{color:"white"}} >Survey</Link>
          <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navnar-list "  >
              
              <li className="nav-item">
                <NavWrapper to="/extractresponse" className="nav-link" style={{color:"white"}} activeClassName="active-link" >Extract</NavWrapper>
              </li>
              <li className="nav-item">
                <NavWrapper to={"/question2set"} className="nav-link" style={{color:"white"}} activeClassName="active-link" >Set 2</NavWrapper>
              </li>
              <li className="nav-item">
                <NavWrapper to={"/question1set"} className="nav-link" style={{color:"white"}}activeClassName="active-link" >Set 1</NavWrapper>
              </li>
              <li className="nav-item">
                <NavWrapper to={"/schoollist"} className="nav-link" style={{color:"white"}} activeClassName="active-link" >School List</NavWrapper>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" style={{color:"white"}} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 {username}
                </Link>
                <ul className="dropdown-menu">
                  
                  <li><Link to={"/register"} className="dropdown-item" >Register User</Link></li>
                  <li><Link to={"/admindashboard"} className="dropdown-item" >Dashboard</Link></li>
                  <li><Link className="dropdown-item" onClick={handleLogout} >Logout</Link></li>
                  
                </ul>
              </li>
             
            </ul>
            
          </div>
        </div>
        :
        <div className="container-fluid">
          <Link to={"/instructions"} className="navbar-brand" style={{color:"white"}} >Survey</Link>
          <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navnar-list "  >
              <li className="nav-item">
                <Link className="nav-link active" style={{color:"white"}} aria-current="page" >Home</Link>
              </li>
              
              <li className="nav-item">
                <Link to={"/question2set"} className="nav-link" style={{color:"white"}} >Set 2</Link>
              </li>
              <li className="nav-item">
                <Link to={"/question1set"} className="nav-link" style={{color:"white"}} >Set 1</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" style={{color:"white"}} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 {username}
                </Link>
                <ul className="dropdown-menu">
                  
                  
                  <li><Link className="dropdown-item" onClick={handleLogout} >Logout</Link></li>
                  
                </ul>
              </li>
              
              
              
            </ul>
            
          </div>
        </div>
        }
        
      </nav>
    </>
  )
}

export default Header