import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../../app/useSlice";

function DropProfile() {
  const dispatch = useDispatch();
  const displayUser = useSelector((state) => state.user.loginUser);
  const displayAdmin = useSelector((state) => state.user.loginUser.roles);

  const [dropProfile, setDropProfile] = useState(false);
  const refWapper = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    let handleClose = (e) => {
      if (!refWapper.current.contains(e.target)) {
        setDropProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <li className="flex items-center cursor-pointer relative popupProfile mr-10 z-[10] h-auto">
        <div
          to=""
          className="flex justify-between items-center gap-2"
          ref={refWapper}
          onClick={() => setDropProfile(!dropProfile)}
        >
          <div className="">
            <AccountCircleIcon style={{ fontSize: "24px" }} />
          </div>
          <p className="cursor-pointer">
            {displayUser?.firstname}
            <span className="ml-[6px]">{displayUser?.lastname}</span>
          </p>
          <ArrowDropDownIcon />
        </div>
        <div
          className={` absolute w-80 rounded-md bg-white top-10  ${
            dropProfile ? `activeProfile` : `inactiveProfile`
          } `}
        >
          <ul className="popup-transport-list flex flex-col gap-4 py-4">
            <li className="popup-transportitem hover:bg-gray-200 p-2">
              <Link to="/profile">
                <PersonOutlineIcon
                  className="text-blue-500 mr-5 font-normal "
                  style={{ fontSize: "24px" }}
                />
                <span className="font-thin text-2xl">Hồ sơ</span>
              </Link>
            </li>
            {displayAdmin === "admin" ? (
              <li className="popup-transportitem hover:bg-gray-200 p-2">
                <Link to="/admin">
                  <PersonOutlineIcon
                    className="text-blue-500 mr-5 font-normal"
                    style={{ fontSize: "24px" }}
                  />
                  <span className="font-thin text-2xl">Admin</span>
                </Link>
              </li>
            ) : (
              <></>
            )}
            <li
              className="popup-transportitem hover:bg-gray-200 p-2"
              onClick={handleLogout}
            >
              <PowerSettingsNewIcon
                className="text-blue-500 mr-5 font-normal"
                style={{ fontSize: "24px" }}
              />
              <span className="font-thin text-2xl">Đăng xuất</span>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
}

export default DropProfile;
