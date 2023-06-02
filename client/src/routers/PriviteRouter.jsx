import React from 'react'
import { Outlet } from 'react-router';


function PriviteRouter() {
    let useAuth = true;

    if(useAuth){
      
    }
  return (
    useAuth ? <Outlet/>:<></>
  )
}

export default PriviteRouter