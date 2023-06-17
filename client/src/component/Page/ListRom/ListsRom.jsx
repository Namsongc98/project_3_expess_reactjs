import React from "react";
import "./ListRom.scss";
import imgTest from "../../../assets/images/home_day.webp";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import EmergencyShareIcon from "@mui/icons-material/EmergencyShare";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { getHotelDetail } from "../../../app/hotelSlice";

function ListRom() {
  const dispatch = useDispatch()
  const getCity = useSelector((state) => state.hotel.getCity.data);

  const handleDetali = (idHotel)=>{
    dispatch(getHotelDetail(idHotel))
  }
 

  return (
    <div className="my-[100px] mx-[100px]">
      <div className="">
        <h1 className=""></h1>
      </div>
      <div className="">
        <div className="flex flex-wrap gap-[30px] ">
          {getCity?.map((hotel, index) => (
            <div className="grid wp-cart h-[155px] w-[500px]   "  key={index}>
              <div className=" w-[127px] h-[155px]">
                <img src={hotel.image_homestay} alt="" className="w-[127px]" />
              </div>
              <div className=" w-full wp-frofile p-3">
                <h1 className="font-medium text-2xl mb-5 text-gray-800">
                  {hotel.name_homestay}
                </h1>
                <div className="flex  w-full gap-2 ">
                  <Link to="/profilerom" className="btn-stayHome text-base" onClick={()=>handleDetali(hotel.id_homestay)}>
                    Chi Tiết
                  </Link>
                  <div className="flex gap-3 items-center">
                    <StarIcon
                      style={{ fontSize: "20px" }}
                      className="text-yellow-400 "
                    />
                    <StarIcon
                      style={{ fontSize: "20px" }}
                      className="text-yellow-400 "
                    />
                    <StarIcon
                      style={{ fontSize: "20px" }}
                      className="text-yellow-400 "
                    />
                  </div>
                </div>
                <div className="my-5 flex gap-2 items-end">
                  <EmergencyShareIcon
                    style={{ fontSize: "20px" }}
                    className="text-gray-600"
                  />
                  <h1 className="font-normal text-xl text-gray-600">
                    {" "}
                    {hotel.city}
                  </h1>
                </div>
                <div className=" flex gap-3 items-center text-green-600 wp-free bg-green-100 p-2">
                  <ReceiptLongIcon style={{ fontSize: "16px" }} />
                  <p className="font-normal text-base">Miễn phí trả phòng</p>
                </div>
              </div>
              <div className="p-2 flex justify-between flex-col wp-pay ">
                <div className="flex items-center text-green-400  ">
                  <LocationCityIcon style={{ fontSize: "18px" }} className="" />
                  <p className="text-base font-normal ">Tiết Kiệm 35%</p>
                </div>

                <div className="h-[80px] gap-2 flex flex-col">
                  <h1 className="text-sm font-medium text-blue-500">
                    thanh toán khi nhận phòng
                  </h1>
                  <div className="flex gap-2">
                    <h1 className="text-xl font-medium text-orange-500">
                      120000
                    </h1>
                    <h1 className="text-xl font-medium text-orange-500">VND</h1>
                  </div>
                  <div className="flex items-center gap-1">
                    <MonetizationOnIcon
                      style={{ fontSize: "14px" }}
                      className="text-yellow-400"
                    />
                    <span className="text-base font-medium text-blue-500">
                      1234567
                    </span>
                    <span className="text-base font-medium text-blue-500">
                      điểm
                    </span>
                  </div>
                  <h1 className=" font-medium text-blue-500 ">Giá cuối cùng</h1>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default ListRom;
