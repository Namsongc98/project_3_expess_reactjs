import React from "react";
import "./profileRom.scss";
import RoomIcon from "@mui/icons-material/Room";
import imghome from "../../../assets/images/payRoom.webp";
import imgBird from "../../../assets/images/imgBird.svg";
import pay_register from "../../../assets/images/pay_register.svg";
import { useSelector } from "react-redux";

function ProfileRom() {
  const getDetail = useSelector((state) => state.hotel.getDetail.data);

  return (
    <div className="w-[900px]  wp-profile ">
      <div className="wp-header-frofile">
        <h1 className="text-4xl font-medium mb-4 text-gray-600">
          {getDetail[0].name_homestay}
        </h1>
        <h1 className="text-2xl text-gray-600 mb-4 ">Stayhome</h1>
        <div className="mb-4 btn-stayHome"> stayHome</div>
        <div className="flex mb-4">
          <RoomIcon style={{ fontSize: "24px" }} className=" text-gray-600" />
          <h1 className="text-3xl font-medium text-gray-600 ml-5">
            {" "}
            {getDetail[0].city}
          </h1>
        </div>
      </div>
      <div className="mt-5 wp-detaiHome">
        <div className=" ">
          <img
            src={getDetail[0].image_homestay}
            alt=""
            className=" rounded-xl w-[75%]"
          />
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
            <div className="mt-8 font-medium text-3xl">
              <h1>Chi tiết Khách sạn:</h1>
              <p className="">{getDetail[0].desribe}</p>
            </div>
          </div>
          <div className="">
            <p className="">Giá phòng mỗi đêm từ</p>
            <p className=""> {getDetail[0].price} VND</p>
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
            <img src={pay_register} alt="" className="w-16 my-0 mx-auto" />
            <p className=" mt-6 font-medium text-3xl text-center">tiện ích</p>
          </div>
          <div className="">
            <img src={pay_register} alt="" className="w-16 my-0 mx-auto" />
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
