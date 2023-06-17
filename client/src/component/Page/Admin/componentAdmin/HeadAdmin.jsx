import React from "react";
import { Link, NavLink, useNavigate  } from "react-router-dom";
import logoTraveloka from "../../../../assets/images/logo_tralver.svg";
import HomeIcon from '@mui/icons-material/Home';
import"./Admin.scss"
import DropProfile from "../../../Layout/DefaultLayout/Header/dropDonw/DropProfile";

function HeadAdmin() {
   const navigate = useNavigate ()
  

  return (
    <div className="wp-headerAdmin flex justify-between items-center h-[60px] px-8 bg-[#f2f3f3]">
      <img src={logoTraveloka} alt="" />
      <div className=" flex justify-evenly items-center w-[100%] ">  
      </div>
      <HomeIcon style={{fontSize:"40px"}} className="text-blue-600 mr-10" onClick={()=>navigate("/")}/>
      <DropProfile />
    </div>
  );
}

export default HeadAdmin;
