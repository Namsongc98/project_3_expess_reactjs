import React from "react";
import logo_tralver from "../../../../assets/images/logo_tralver.svg";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import flag_VN from "../../../../assets/images/flag_VN.svg";
import SecurityUpdateIcon from "@mui/icons-material/SecurityUpdate";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./header.scss";
import Transport from "./dropDonw/Transport";
import Live from "./dropDonw/Live";
import Entertainment from "./dropDonw/Entertainment";
import Product from "./dropDonw/Product";
import { Link } from "react-router-dom";
import DropProfile from "./dropDonw/DropProfile";
function Header() {
  

  return (
    <div className=" ">
      <div className=" flex justify-between items-center h-14 m-6 ">
        <div className=" flex gap-4 items-center">
          <div className="">
            <MenuIcon
              className="text-sky-500  head__flag"
              style={{ fontSize: "30px" }}
            />
          </div>
          <div className="">
            <img src={logo_tralver} alt="" />
          </div>
        </div>
        <div className="">
          <ul className="flex justify-between items-center gap-8">
            <li className="flex justify-between items-center gap-2 head-flag h-12">
              <div className="">
                <SecurityUpdateIcon className="text-sky-500" />
              </div>
              <p className="cursor-pointer">Tải ứng dụng</p>
            
            </li>
            <li className="flex justify-between items-center gap-2">
              <div className="">
                <Diversity1Icon className="text-sky-500" />
              </div>
              <p className="cursor-pointer">Hợp tác với chúng tôi</p>
            </li>
            <li className="flex justify-between items-center gap-2">
              <div className="">
                <BookmarkAddIcon className="text-sky-500" />
              </div>
              <p className="cursor-pointer">Đã lưu</p>
            </li>
            <li className="flex justify-between items-center gap-2">
              <div className="">
                <MenuBookIcon className="text-sky-500" />
              </div>
              <p className="cursor-pointer">Đặt chỗ của tôi</p>
            </li>
            <li className="flex justify-between items-center gap-2 head-flag h-12">
              <div className=""></div>
              <div className=" wp_flag relative">
                <img src={flag_VN} alt="flag_VN" />
              </div>
              <p className="cursor-pointer">VND</p>
             
            </li>
            <li >
              <Link to="/login" className="flex justify-between items-center gap-2">
              <div className="">
                <AccountCircleIcon style={{ fontSize: "24px" }} />
              </div>
              <p className="cursor-pointer">Đăng nhập</p>
              <ArrowDropDownIcon/>
              </Link>
            </li>
            <DropProfile/>
           
            <li className="">
              <Link to="/register" className="bnt__register bg-sky-500 block rounded-md text-center leading-[30px] text-white">
                Đăng Kí
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className=" w-full px-10  bg-[#f2f3f3] p-2 ">
        <ul className="flex items-center gap-20 h-14">
          <Transport/>
          <Live/>
          <Entertainment/>
          <Product/>
        </ul>
      </div>
    </div>
  );
}

export default Header;
