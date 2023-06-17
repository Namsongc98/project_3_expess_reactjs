import React from "react";
import { NavLink } from "react-router-dom";
import "./Admin.scss"
import luffy from"../../../../assets/images/luffy.jpg"
import HotelIcon from '@mui/icons-material/Hotel';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProfileAdmin() {

  

  
  return (
    <>
      <div className="w-[20%] h-[100wh]  bg-gray-800 ">
        <div className="p-[20px] wp-nav">
          <div className="h-[180px] nav-infor flex justify-center text-center flex-col">
            <div className="nav-wp-img relative ">
              <img src={luffy} alt=""  className="    img-infor " />
            </div >
              <div className="m-[10px]">
                <h1 className="font-medium text-3xl text-white ">Vũ Sơn</h1>
                <h2 className="text-xl text-white">Admin</h2>
              </div>
          </div>
          <div className="wp-navlink mt-[50px] ">
            <ul className="flex flex-col justify-center gap-[20px]">
              <li className="">
                <HotelIcon style={{fontSize:"24px" }} className="mr-2 text-white"/>
                <NavLink to="/admin" className="font-medium text-2xl text-white">
                  Quản lí khách sạn
                </NavLink>
              </li>
              <li className="">
                <PeopleAltIcon style={{fontSize:"24px" }} className="mr-2 text-white" />
                <NavLink to="/adminuser" className="font-medium text-2xl text-white">
                  Quản lí khách hàng
                </NavLink>
              </li>
              <li className="">
                <ShoppingCartIcon style={{fontSize:"24px" }} className="mr-2 text-white"/>
                {/* <NavLink to="/adminorder" className="font-medium text-2xl text-white ">
                  Quản lí đơn hàng
                </NavLink> */}
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileAdmin;
