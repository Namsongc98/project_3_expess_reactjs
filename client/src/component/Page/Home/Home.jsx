import React, { useState } from "react";
import home_combo from "../../../assets/images/home_combo.webp";
import home_day from "../../../assets/images/home_day.webp";
import home_phone from "../../../assets/images/home_phone.webp";
import home_sale from "../../../assets/images/home_sale.webp";
import home_target from "../../../assets/images/home_target.webp";
import hotel_flashSale from "../../../assets/images/hotel_flashSale.webp";
import freeRoom from "../../../assets/images/freeRoom.webp";
import Ezychane from "../../../assets/images/Ezychane.webp";
import payRoom from "../../../assets/images/payRoom.webp";
import imgresour from "../../../assets/images/imgresour.webp";
import supportImg from "../../../assets/images/freeRoom.webp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { arrimgHomePay, arrimghotel } from "./componentHome/imgHome";
import utilities1 from "../../../assets/imgPay/utilities1.png";
import utilities2 from "../../../assets/imgPay/utilities2.png";
import utilities3 from "../../../assets/imgPay/utilities3.png";
import utilities4 from "../../../assets/imgPay/utilities4.png";
import "./home.scss";
import FormSearch from "./componentHome/formSearch";
import SliderHome from "./componentHome/sliderHome";
import SliderCatecore from "./componentHome/SliderCatecore";
function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const headSlice = [
    { url: home_combo },
    { url: home_day },
    { url: home_phone },
    { url: home_sale },
    { url: home_target },
  ];

  const deadSlider = [home_combo, home_day, home_phone, home_sale, home_target];

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

  //gọi category

  return (
    <div className=" ">
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
        <div className="flex justify-center my-4">
          <div className="flex text-white">
            <div className="">
              <KeyboardArrowLeftIcon onClick={prevSlide} size={30} />
            </div>
            <div className="w-[100px]"></div>
            <div className=" hover:underline hover:opacity-100 font-semibold opacity-50">
              Xem khuyến mãi ở đây
            </div>
            <div className="w-[100px]"></div>
            <div className="">
              <KeyboardArrowRightIcon onClick={nextSlide} size={30} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[800px] mx-auto relative ">
        {/* <FormSearch /> */}
      </div>
      <div className="px-[190px]  mt-[100px]">
        <div className="">
          <h1 className="text-4xl font-medium">Ưu đãi nổi bật</h1>
          <img src={hotel_flashSale} alt="" className="rounded-2xl mt-3" />
        </div>
        <div className="mt-[80px]">
          <div className="">
            <h1 className="text-4xl font-medium">Vô vàn ưu đãi</h1>
          </div>
          <SliderHome />
        </div>
        <div className="mt-[80px]">
          <div className="">
            <h1 className="text-[24px] font-bold">Nhiều tính tiện lợi</h1>
          </div>
          <div className="mt-4 flex justify-between ">
            <img src={freeRoom} alt="" className="w-[170px] rounded-2xl" />
            <img src={Ezychane} alt="" className="w-[170px] rounded-2xl" />
            <img src={payRoom} alt="" className="w-[170px] rounded-2xl" />
            <img src={imgresour} alt="" className="w-[170px] rounded-2xl" />
            <img src={supportImg} alt="" className="w-[170px] rounded-2xl" />
          </div>
        </div>
        <div className="mt-[80px]">
          <div className="">
            <span className="text-[24px] font-bold hover:underline  hover:decoration-solid hover:text-blue-600 ">
              Bạn muốn đến thành phố nào ?
            </span>
          </div>
          <SliderCatecore />
        </div>
        <div className="flex my-[50px] wp-imgHome pb-[40px]">
          <div className="w-[30%]">
            <h1 className="text-[24px] font-bold">Đối tác khách sạn</h1>
            <p className="text-[16px] font-bold my-3 text-gray-300">
              Đối tác khách sạn trong nước và quốc tế
            </p>
            <p className="">
              Chúng tôi hợp tác với các chuỗi khách sạn trên toàn thế giới để
              bảo đảm mang lại kỳ nghỉ tuyệt vời nhất tại mọi điểm đến trong mơ
              của bạn!
            </p>
          </div>
          <div className="w-[70%] flex flex-wrap justify-center items-center  ">
            {arrimgHomePay?.map((img, index) => (
              <div className="w-[150px]" key={index}>
                <img src={img} alt="" className="w-[80px] m-1 mx-auto " />
              </div>
            ))}
          </div>
        </div>
        <div className="flex my-[50px] pb-[40px] wp-imgHome">
          <div className="w-[30%]">
            <h1 className="text-[24px] font-bold">Đối tác thanh toán</h1>

            <p className="mt-[30px]">
              Những đối tác thanh toán đáng tin cậy của chúng tôi sẽ giúp cho
              bạn luôn an tâm thực hiện mọi giao dịch một cách thuận lợi nhất!
            </p>
          </div>
          <div className="w-[70%] flex flex-wrap">
            {arrimghotel?.map((img, index) => (
              <div className="w-[150px]" key={index}>
                <img src={img} alt="" className="w-[80px] m-1 mx-auto " />
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <h1 className="my-[30px] text-center text-5xl font-semibold ">Tại sao nên đặt chỗ với Traveloka?</h1>
          <div className="flex  w-[920px]  gap-5 justify-center my-0 mx-auto">
            
            <div className="">
              <img src={utilities1} alt="" className="w-[150px] my-0 mx-auto" />
              <h1 className="text-4xl font-medium">
                Giá rẻ mỗi ngày với ưu đãi đặc biệt dành riêng cho ứng dụng
              </h1>
              <p className="">
                Đặt phòng qua ứng dụng để nhận giá tốt nhất với các khuyến mãi
                tuyệt vời!
              </p>
            </div>
            <div className="">
              <img src={utilities2} alt="" className="w-[150px] my-0 mx-auto" />
              <h1 className="text-4xl font-medium">Phương thức thanh toán an toàn và linh hoạt</h1>
              <p className="">
                Giao dịch trực tuyến an toàn với nhiều lựa chọn như thanh toán
                tại cửa hàng tiện lợi, chuyển khoản ngân hàng, thẻ tín dụng đến
                Internet Banking. Không tính phí giao dịch.
              </p>
            </div>
            <div className="">
              <img src={utilities3} alt="" className="w-[150px] my-0 mx-auto" />

              <h1 className="text-4xl font-medium">Hỗ trợ khách hàng 24/7</h1>
              <p className="">
                Đội ngũ nhân viên hỗ trợ khách hàng luôn sẵn sàng giúp đỡ bạn
                trong từng bước của quá trình đặt vé
              </p>
            </div>
            <div className="">
              <img src={utilities4} alt="" className="w-[150px] my-0 mx-auto" />

              <h1 className="text-4xl font-medium">Khách thực, đánh giá thực</h1>
              <p className="">
                Hơn 10.000.000 đánh giá, bình chọn đã được xác thực từ du khách
                sẽ giúp bạn đưa ra lựa chọn đúng đắn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
