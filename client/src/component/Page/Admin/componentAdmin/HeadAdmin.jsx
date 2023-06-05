import React from "react";
import { Link, NavLink, useNavigate  } from "react-router-dom";
import logoTraveloka from "../../../../assets/images/logo_tralver.svg";
import HomeIcon from '@mui/icons-material/Home';
import"./Admin.scss"

function HeadAdmin() {
   const navigate = useNavigate ()
  




  return (
    <div className="wp-headerAdmin flex justify-between items-center h-[60px] px-8 bg-[#f2f3f3]">
      <img src={logoTraveloka} alt="" />
      <div className=" flex justify-evenly items-center w-[600px] ">
      <NavLink to="/adminrom" className="font-medium text-3xl">
       Quản lí khách hàng
      </NavLink>
      <NavLink to="/adminuser" className="font-medium text-3xl">
        Quản lí phòng
      </NavLink>
      <NavLink to="/adminorder" className="font-medium text-3xl ">
        Quản lí đơn hàng
      </NavLink>
      </div>
    
        <HomeIcon style={{fontSize:"40px"}} className="text-blue-600" onClick={()=>navigate("/")}/>
      
    </div>
  );
}

export default HeadAdmin;
