import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Slider.scss";

import axios from "axios";
import { getHotel, getHotelCity, getHotelId } from "../../../../app/hotelSlice";
import { useNavigate } from "react-router-dom";

function SliderCatecore() {
  const navigate = useNavigate();
  const hotelCity = useSelector((state) => state.hotel.hotelAll.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotel());
  }, []);

  const handleHotelCity = (city) => {
    dispatch(getHotelCity(city));
    navigate("/listrom");

    // try {
    //   const response = await axios.post(
    //     "http://localhost:8080/hotel/hotelcity",
    //     { city: nameCity }
    //   );
    //   console.log(response.data);
    //   return response.data;
    // } catch (error) {
    //   throw new Error(error);
    // }
  };

  return (
    <>
      <div className="my-5 ">
        <div className="mt-4 flex flex-wrap gap-4  justify-between overflow-hidden">
          {hotelCity?.map((hotel, index) => (
            <div
              className=""
              key={index}
              onClick={() => handleHotelCity(hotel.city)}
            >
              <img
                src={hotel.image_homestay}
                alt=""
                className="w-[170px] rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SliderCatecore;
