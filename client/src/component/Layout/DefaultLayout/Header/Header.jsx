import React, { useState } from "react";
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
function Header() {
  const [isToggleTransport,setIoggleTransport]=useState(false)
  const [isToggleLive,setIoggleLive]=useState(false)
  const [isToggleEntertainment,setIoggleEntertainment]=useState(false)
  const [isToggleAddProduct,setIoggleAddProduct]=useState(false)
  const [isToggleApp,setIoggleApp]=useState(false)
  const [isToggleCoutry,setIoggleCoutry]=useState(false)
  const [isToggleLogin,setIoggleLogin]=useState(false)
  const [isToggleMenu,setIoggleMenu]=useState(false)
  



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
              <ArrowDropDownIcon />
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
              <ArrowDropDownIcon />
            </li>
            <li className="flex justify-between items-center gap-2">
              <div className="">
                <AccountCircleIcon style={{ fontSize: "24px" }} />
              </div>
              <p className="cursor-pointer">Đăng nhập</p>
              <ArrowDropDownIcon />
            </li>
            <li className="">
              <button className="bnt__register bg-sky-500 block rounded-md text-white">
                Đăng Kí
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className=" w-full px-10  bg-[#f2f3f3] p-2 ">
        <ul className="flex items-center gap-20 h-14">
          <li className="flex items-center cursor-pointer">
            <h1 className="font-medium  ">Vận chuyển </h1>
            <ArrowDropDownIcon />
          </li>
          <li className="flex items-center cursor-pointer">
            <h1 className="font-medium ">Chỗ ở</h1>
            <ArrowDropDownIcon />
          </li>
          <li className="flex items-center cursor-pointer">
            <h1 className="font-medium ">
              Hoạt động và giải trí{" "}
            </h1>
            <ArrowDropDownIcon />
          </li>
          <li className="flex items-center cursor-pointer">
            <h1 className="font-medium ">Sản phẩm bổ sung </h1>
            <ArrowDropDownIcon />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
