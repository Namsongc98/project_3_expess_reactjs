import React, { useState } from "react";
import RoomIcon from "@mui/icons-material/Room";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PersonIcon from "@mui/icons-material/Person";
import "./FormSearch.scss";
import { Link } from "react-router-dom";

function FormSearch() {
  return (
    <div className="top-[-40px] absolute left-[18%] w-[500px] ">
      <div className="wp-searchHone   mx-auto   ">
        <div className=" h-14  bg-slate-200">
          <h1 className="text-center font-semibold text-2xl leading-[35px] text-blue-600">
            {" "}
            Bạn muốn đi đâu nào
          </h1>
        </div>
        <form
          action=""
          className=" px-7 py-10 flex flex-col gap-0 h-[100%] justify-center bg-white"
        >
          <div className="flex flex-col mb-6 text-2xl">
            <label htmlFor=" " className="font-bold ">
              Thành Phố
            </label>
            <div className="h-[40px] wp-input w-[100%] flex justify-evenly items-center mt-4">
              <RoomIcon
                style={{ fontSize: "30px" }}
                className="text-blue-600 "
              />
              <input
                type="text"
                className="w-[94%] outline-none"
                placeholder="Bạn muốn đến thành phố nào"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormSearch;
