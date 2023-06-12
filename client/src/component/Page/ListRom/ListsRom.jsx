import React from "react";
import"./ListRom.scss"
import imgTest from "../../../assets/images/home_day.webp"
import { Link } from "react-router-dom";

function ListRom() {
  return (
    <div className="my-5 mx-[100px]">
      <div className="wp-inputList w-[300px] h-16 my-5 ">
        <input type="text" className="outline-none" />
      </div>
      <div className="grid grid-cols-2 ">
        <div className="grid wp-cart h-[175px] w-[500px]   ">
          <div className=" w-[127px] h-[175px]">
            <img src={imgTest} alt="" className="w-[127px]" />
          </div>
          <div className="p-5 w-[160px] wp-frofile" >
            <h1 className="font-medium text-3xl mb-5">Tên</h1>
            <Link to="/profilerom" className="btn-stayHome">Chi Tiết</Link>
            <div className="mt-5">
              
              <h1 className="font-normal text-2xl"> địa điểm</h1>
            </div>
          </div>
          <div className="p-5 flex justify-evenly flex-col  wp-pay">
            <div className=""></div>
            <h1 className="text-xl">thanh toán khi nhận phòng</h1>
            <h1 className="text-2xl font-medium text-orange-500">tiền</h1>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default ListRom;
