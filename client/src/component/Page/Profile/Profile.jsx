import React from "react";
import "./profile.scss";
import { Link, NavLink } from "react-router-dom";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonIcon from "@mui/icons-material/Person";

import imgProfile from "../../../assets/images/freeRoom.webp";

function Profile() {
  return (
    <div className="flex m-[20px] gap-[27px] container-profile">
      <div className=" w-[25%] p-4 dashboard-profile ">
        <div className="dashboard-infor flex justify-start gap-5 items-center  p-5">
          <div className="dashboard-wp__img w-[60px] h-[60px] rounded-full  overflow-hidden">
            <img src={imgProfile} alt="" className="w-[60px] h-[60px]" />
          </div>
          <div className="">
            <p className="text-3xl font-semibold">Vũ Sơn</p>
            <span className="text-xl">Email</span>
          </div>
        </div>
        <div className="py-3">
          <ul className="">
            <li className="flex ">
              <NavLink
                to="/profilerom"
                className="flex items-center py-2 px-6 gap-4 font-medium"
              >
                <LibraryBooksIcon
                  className="text-blue-500"
                  style={{ fontSize: "25px" }}
                />
                <p>Đặt chỗ của tôi</p>
              </NavLink>
              <div className=""></div>
            </li>
            <li className="">
              <NavLink
                to="/profilerom"
                className="flex items-center py-2 px-6 gap-4 font-medium"
              >
                <ManageAccountsIcon
                  className="text-blue-500"
                  style={{ fontSize: "25px" }}
                />
                <p className="">Tài khoản </p>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/register"
                className="flex items-center py-2 px-6 gap-4 font-medium"
              >
                <PowerSettingsNewIcon
                  className="text-blue-500"
                  style={{ fontSize: "25px" }}
                />
                <p className=""> Đăng xuất</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[75%]">
        <h1 className=" font-bold  text-4xl">Cài Đặt</h1>
        <div className="wp-search  mx-auto  mt-6">
          <div className=" h-[56px] head-title  ">
            <h1 className=" font-semibold text-2xl leading-[56px]  pl-7">
              {" "}
              Dữ liệu cá nhân
            </h1>
          </div>
          <form
            action=""
            className=" px-7 py-10 flex flex-col  h-[400px] justify-between"
          >
            <div className="flex flex-col mb-6 text-2xl">
              <label htmlFor=" " className="font-bold ">
                Tên đầy đủ
              </label>
              <div className="h-[40px] wp-input w-[100%] flex justify-evenly items-center mt-4">
                <input
                  type="text"
                  className="w-[94%] outline-none"
                  placeholder=""
                />
              </div>
              <p className="text-xl mt-2 opacity-70">
                {" "}
                Tên trong hồ sơ được rút ngắn từ họ và tên của bạn{" "}
              </p>
            </div>
            <div className="flex  h-[400px] justify-between ">
              <div className="flex flex-col mb-6 w-[20%] text-2xl ">
                <label htmlFor="">Giới tính </label>
                <select className="h-[40px] wp-input w-[100%]  pl-2 outline-none mt-4 ">
                  <option value="">--Chọn giới tính--</option>
                  <option value="">nam</option>
                  <option value="">nữ</option>
                </select>
              </div>

              <div className="flex flex-col mb-6 w-[20%] text-2xl ">
                <label htmlFor="">Ngày sinh </label>
                <select className="h-[40px] wp-input w-[100%]  pl-2 outline-none mt-4 ">
                  <option value="">--Chọn ngày sinh --</option>
                  <option value="">nam</option>
                  <option value="">nữ</option>
                </select>
              </div>
              <div className="flex flex-col mb-6 w-[20%] text-2xl ">
                <label htmlFor=""> Tháng sinh </label>
                <select className="h-[40px] wp-input w-[100%]  pl-2 outline-none mt-4 ">
                  <option value="">--Chọn tháng sinh--</option>
                  <option value="">nam</option>
                  <option value="">nữ</option>
                </select>
              </div>
              <div className="flex flex-col mb-6 w-[20%] text-2xl ">
                <label htmlFor="">Năm sinh </label>
                <select className="h-[40px] wp-input w-[100%]  pl-2 outline-none mt-4 ">
                  <option value="">--Chọn năm sinh--</option>
                  <option value="">nam</option>
                  <option value="">nữ</option>
                </select>
              </div>
            </div>
            <div className="w-[100%]">
              <div className="w-[100%]">
                <label htmlFor="">Thành phố đang ở</label>
                <div className=" h-[40px] wp-input w-[100%] flex justify-evenly items-center mt-4">
                  <input
                    type="text"
                    placeholder="Thành phố bạn đang ở"
                    className="w-[94%] outline-none"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <button
                  to="/catecary"
                  className="w-[80px] h-[40px] my-4 btn-form block text-center font-semibold hover:bg-blue-400 "
                >
                      Hủy
                </button>
                <button
                  to="/catecary"
                  className="w-[80px] h-[40px] my-4 btn-form block text-center font-semibold hover:bg-blue-400 "
                >
                  Lưu
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
