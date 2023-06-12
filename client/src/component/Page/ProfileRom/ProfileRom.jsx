import React from "react";
import "./profileRom.scss";
import RoomIcon from "@mui/icons-material/Room";
import imghome from "../../../assets/images/payRoom.webp";
import imgBird from "../../../assets/images/imgBird.svg";
import pay_register from "../../../assets/images/pay_register.svg";


function ProfileRom() {
  return (
    <div className="w-[900px] h-[1000px] wp-profile ">
      <div className="wp-header-frofile">
        <h1 className="text-4xl font-medium mb-4 text-gray-600">
          tên khách sạn
        </h1>
        <h1 className="text-2xl text-gray-600 mb-4 ">Stayhome</h1>
        <div className="mb-4 btn-stayHome"> stayHome</div>
        <div className="flex mb-4">
          <RoomIcon style={{ fontSize: "24px" }} className=" text-gray-600" />
          <h1 className="text-3xl font-medium text-gray-600 ml-5"> dịa chỉ</h1>
        </div>
      </div>
      <div className="mt-5 wp-detaiHome">
        <div className="wp-imgHome flex gap-[10px]">
          <img src={imghome} alt="" className=" rounded-xl w-[75%]" />
          <div className=" flex flex-col gap-[5px]">
            <img
              src={imghome}
              alt=""
              className="h-[120px] w-[150px] rounded-xl"
            />
            <img
              src={imghome}
              alt=""
              className="h-[120px] w-[150px] rounded-xl"
            />
            <img
              src={imghome}
              alt=""
              className="h-[120px] w-[150px] rounded-xl"
            />
            <img
              src={imghome}
              alt=""
              className="h-[120px] w-[150px] rounded-xl"
            />
          </div>
        </div>
        <div className="flex justify-between mt-10 ">
          <div className="">
            <h1 className="font-semibold text-4xl">Traveloka</h1>
            <div className=" flex mt-5 ">
              <img
                src={imgBird}
                alt=""
                className="font-semibold text-3xl mr-3"
              />
              <span className="font-medium text-3xl">8,5 Ấn tượng</span>
            </div>
          </div>
          <div className="">
            <p className="">Giá phòng mỗi đêm từ</p>
            <p className="">661.500 VND</p>
            <button className="btn-booking">Đặt ngay </button>
          </div>
        </div>
      </div>
      <div className=" mt-[50px]">
          <p className="font-bold text-4xl ">Tiện nghi khác sạn</p>
        <div className="flex justify-around mt-10">
          <div className=" ">
          
            <img src={pay_register} alt="" className="w-16 my-0 mx-auto" />
            <p className=" mt-6 font-medium text-3xl text-center">tiện ích</p>
          </div>
          <div className="">
            <img src={pay_register} alt="" className="w-16 my-0 mx-auto"/>
            <p className=" mt-6 font-medium text-3xl text-center">tiện ích</p>
          </div>
          <div className="">
            <img src={pay_register} alt="" className="w-16 my-0 mx-auto"/>
            <p className=" mt-6 font-medium text-3xl text-center">tiện ích</p>
          </div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default ProfileRom;
