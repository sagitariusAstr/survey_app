import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/auth/login/login.page';
import InstructionLayout from '../pages/layout/instruction.layout';
import SchoolLayout from '../pages/layout/school.layout';
import AdminLayout from '../pages/layout/admin.layout';
import MainLayout from '../components/Layout/MainLayout/MainLayout';
import RegisterPage from '../pages/auth/register/register.page';
import AdminDashboard from '../pages/admin/admindashboard';
import Question1Layout from '../pages/layout/question1.layout';
import Question2Layout from '../pages/layout/question2.layout';
import ExtractResponse from '../pages/extract_response';
import SchoolListPage from '../pages/schoolListPage';
import SchoolDetailPage from '../pages/schoolDetailPage';
import ClassListPage from '../pages/classListPage';
import StudentListPage from '../pages/studentListPage';
import StudentDetail from '../pages/studentDetail';
import Transition from '../components/transition';






const Routing = () => {

    

    

    const isAdmin = () => {
        const token = localStorage.getItem("auth_token")
        const logged_in_role = JSON.parse(localStorage.getItem("auth_user")).role
        if(logged_in_role == "admin"){
            return true
        }

    }

    const ProtectedRoute = ({ element, adminOnly }) => {
        // Check if the user is an admin and if adminOnly is true for this route
        if (adminOnly && !isAdmin()) {
          // Redirect non-admin users to a different route (e.g., the login page)
          return <Navigate to="/" />;
        }
      
        // Render the protected route if the user is an admin or if adminOnly is false
        return element;
      };
    
    


    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>



          <Route
            path="/instructions"
            element={<InstructionLayout />}
          />
          <Route
            path="/transition"
            element={<Transition />}
          />
          <Route
            path="register"
            element={<ProtectedRoute element={<RegisterPage />} adminOnly />}
          />
          <Route
            path="admindashboard"
            element={<ProtectedRoute element={<AdminDashboard />} adminOnly />}
          />
          <Route
            path="question1set"
            element={<Question1Layout />}
          />
          <Route
            path="question2set"
            element={<Question2Layout />}
          />
          <Route
            path="extractresponse"
            element={<ProtectedRoute element={<ExtractResponse />} adminOnly />}
          />
          <Route
            path="schoollist"
            element={<ProtectedRoute element={<SchoolListPage />} adminOnly />}
          />
          <Route
            path="schooldetail/:name"
            element={<ProtectedRoute element={<SchoolDetailPage />} adminOnly />}
          />
          <Route
            path="classdetail/:name"
            element={<ProtectedRoute element={<ClassListPage />} adminOnly />}
          />
          <Route
            path="studentlist/:classid"
            element={<ProtectedRoute element={<StudentListPage />} adminOnly />}
          />
          <Route
            path="studentdetail/:studentid"
            element={<ProtectedRoute element={<StudentDetail />} adminOnly />}
          />




        </Routes>

          
        </BrowserRouter>
    )
}


export default Routing