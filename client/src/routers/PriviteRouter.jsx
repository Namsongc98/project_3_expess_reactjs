import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';



function PriviteRouter() {

 
    const isAdmin = useSelector((state) => state.user.loginUser?.roles);

  
  return (
    isAdmin==="admin" ? <Outlet/>:<Link to="/login"></Link>
  )
}

export default PriviteRouter