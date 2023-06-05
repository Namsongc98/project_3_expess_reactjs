import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


function DropProfile() {
  const [dropProfile, setDropProfile] = useState(false);
  const refWapper = useRef();
  useEffect(()=>{
    let handleClose = (e)=>{
      if(!refWapper.current.contains(e.target)){
        setDropProfile(false)
      }
    }
    document.addEventListener("mousedown",handleClose)
    return ()=>{
      document.removeEventListener("mousedown",handleClose)
    }
  },[])

  return (
    <>
      <li className="flex items-center cursor-pointer relative popupProfile">
        <Link
          to="/login"
          className="flex justify-between items-center gap-2"
          ref={refWapper}
          onClick={() => setDropProfile(!dropProfile)}
        >
          <div className="">
            <AccountCircleIcon style={{ fontSize: "24px" }} />
          </div>
          <p className="cursor-pointer">Ngọc Sơn</p>
          <ArrowDropDownIcon />
        </Link>
        <div
          className={` absolute w-80 rounded-md bg-white top-10  ${
            dropProfile ? `activeProfile` : `inactiveProfile`
          } `}
        >
          <ul className="popup-transport-list flex flex-col gap-4 py-4">
            <li className="popup-transportitem hover:bg-gray-200 p-2">
              <Link to="/profile">
                <PersonOutlineIcon
                  className="text-blue-500 mr-5 font-normal"
                  style={{ fontSize: "24px" }}
                />
                <span className="font-thin text-2xl">Hồ sơ</span>
              </Link>
            </li>
            <li className="popup-transportitem hover:bg-gray-200 p-2">
              <PowerSettingsNewIcon
                className="text-blue-500 mr-5 font-normal"
                style={{ fontSize: "24px" }}
              />
              <span className="font-thin text-2xl">Dăng xuất</span>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
}

export default DropProfile;
