import React, { useState } from "react";
import RoomIcon from "@mui/icons-material/Room";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PersonIcon from "@mui/icons-material/Person";
import "./FormSearch.scss";
import { Link } from "react-router-dom";

function FormSearch() {
  const [dateStart, stateDateStart] = useState(null);
  const [dateEnd, stateDateEnd] = useState("");

  return (
    <>
      <div className="wp-search  mx-auto  ">
        <div className=" h-14  bg-slate-200">
          <h1 className="text-center font-semibold text-2xl leading-[35px] text-blue-600">
            {" "}
            Bạn muốn đi đâu nào
          </h1>
        </div>
        <form action="" className=" px-7 py-10 flex flex-col  h-[400px] justify-between">
          <div className="flex flex-col mb-6 text-2xl">
            <label htmlFor=" " className="font-bold ">Thành Phố</label>
            <div className="h-[40px] wp-input w-[100%] flex justify-evenly items-center mt-4">
              <RoomIcon style={{fontSize:'30px'}} className="text-blue-600 " />
              <input
                type="text"
                className="w-[94%] outline-none"
                placeholder="Bạn muốn đến thành phố nào"
               
              />
            </div>
          </div>
          <div className="flex   py-6  h-[400px] justify-between ">
            <div className="flex flex-col mb-6 w-[30%] text-2xl">
              <label htmlFor="">Ngày đặt </label>
              <div className="h-[40px] wp-input w-[100%] flex justify-evenly items-center mt-4">
                <CalendarMonthIcon style={{fontSize:'30px'}} className="text-blue-600 "  />
                <input type="date" className="w-[70%] outline-none" />
              </div>
            </div>
            <div className="flex flex-col  mb-6 w-[30%] text-2xl">
              <label htmlFor="">Số đêm</label>
              <div className="h-[40px] wp-input w-[100%] flex justify-evenly items-center mt-4">
                <DarkModeIcon style={{fontSize:'30px'}} className="text-blue-600 "  />
                <input type="number" className="w-[70%] outline-none" />
              </div>
            </div>
            <div className="h-[40px] w-[30%]">
              <p className="">Trả phòng</p>
              <p className=" mt-4">ygnyog</p>
            </div>
          </div>
          <div className="w-[100%]">
            <div className="w-[100%]">
              <label htmlFor="">Số phòng</label>
              <div className=" h-[40px] wp-input w-[100%] flex justify-evenly items-center mt-4">
                <PersonIcon style={{fontSize:'30px'}} className="text-blue-600 " />
                <input type="number" className="w-[94%] outline-none" />
              </div>
            </div>
            <Link to="/catecary" className="w-[150px] h-[40px] my-4 btn-form block text-center font-semibold hover:bg-blue-400 "> Tìm phòng </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormSearch;
