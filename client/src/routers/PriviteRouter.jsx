import React from 'react'
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';


function PriviteRouter() {
    let addmin = true;

  return (
    addmin ? <Outlet/>:<Link to="/login"></Link>
   
    
    
  )
}

export default PriviteRouter