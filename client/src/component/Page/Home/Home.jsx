import React, { useState } from "react";

import home_combo from "../../../assets/images/home_combo.webp";
import home_day from "../../../assets/images/home_day.webp";
import home_phone from "../../../assets/images/home_phone.webp";
import home_sale from "../../../assets/images/home_sale.webp";
import home_target from "../../../assets/images/home_target.webp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import "./home.scss";
function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const headSlice = [
    { url: home_combo },
    { url: home_day },
    { url: home_phone },
    { url: home_sale },
    { url: home_target },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? headSlice.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === headSlice.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <div className="bg-[#45afe7] h-[320px]">
        <div className="flex">
          <div className="text-white pt-[60px] w-[470px]   ml-[120px] mr-3 ">
            <h1 className="mb-[30px] font-bold text-4xl">
              Tìm & đặt phòng khách sạn giá rẻ chỉ với 3 bước đơn giản!
            </h1>
            <h1 className="font-semibold text-3xl">
              Khám phá ngay những ưu đãi tốt nhất dành cho bạn tại Traveloka!
            </h1>
          </div>

          <div className=" w-full flex gap-[20px] mt-3 overflow-hidden">
              <div
                style={{
                  backgroundImage: `url(${headSlice[currentIndex].url})`,
                }}
                className="w-[471px] h-[230px] rounded-2xl bg-center bg-cover duration-500"
              ></div>
          </div>
        </div>
        <div className="flex justify-center my-2">
          <div className="flex text-white">
            <div className="">
              <KeyboardArrowLeftIcon onClick={prevSlide} size={30} />
            </div>
            <div className="w-[100px]"></div>
            <div className="">xem link</div>
            <div className="w-[100px]"></div>
            <div className="">
              <KeyboardArrowRightIcon onClick={nextSlide} size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
