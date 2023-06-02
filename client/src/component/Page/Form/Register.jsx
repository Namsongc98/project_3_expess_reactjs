import React from "react";
import "./form.scss"
import phone_coin from "../../../assets/images/phone_coin.svg";
import ticket from "../../../assets/images/ticket.svg";
import pay_register from "../../../assets/images/pay_register.svg";
import ticket_arworr from "../../../assets/images/ticket_arworr.svg";

function Register() {
  return (
    <div className="py-6 gap-20 relative">
      <div className=" h-[146px] bg-[#0194f3] text-white leading-10 flex flex-col justify-center pl-10 gap-5 ">
        <h1 className="font-bold text-4xl">
          Đằng kí thành viên của Tralveroka và trả nghiệm ưu đãi hấp dẫn
        </h1>
        <h3 className="font-medium text-3xl">
          Thật nhanh và an toàn hãy đằng kí ngay để được{" "}
        </h3>
      </div>
      <div className=" grid grid-cols-3 p-10 gap-5">
        <div className=" ">
          <img src={phone_coin} alt="" className="w-16 mb-5" />
          <h2 className="font-bold text-4xl ">Nhận thưởng khi đăỵ chỗ</h2>
          <h4 className="leading-10">
            Tích điểm cho mỗi lần đặt vé và phòng khách sạn. Quy đổi để du lịch
            tiết kiệm hơn!
          </h4>
        </div>
        <div className=" ">
          <img src={ticket} alt="" className="w-16 mb-5" />
          <h2 className="font-bold text-4xl">
            Tiện lợi ngay cả sau khi đặt chỗ
          </h2>
          <h4 className="leading-10">
            Xem vé điện tử và phiếu thanh toán khi không có kết nối mạng. Hoàn
            tiền hoặc đổi lịch dễ dàng khi bạn phải thay đổi kế hoạch.
          </h4>
        </div>
        <div className=""></div>
        <div className="">
          <img src={pay_register} alt="" className="w-16 mb-5" />
          <h2 className="font-bold text-4xl">
            Thanh toán không cần thẻ với travelokaPay
          </h2>
          <h4 className="leading-10">
            Lưu thông tin thẻ trong My Cards để thanh toán an toàn và thuận tiện
            cho lần sau
          </h4>
        </div>
        <div className="">
          <img src={ticket_arworr} alt="" className="w-16 font-bold text-4xl mp-5 " />
          <h2 className="font-bold text-4xl">Trải nghiệm đặt chỗ suôn sẻ</h2>
          <h4 className="leading-10">
            Tính năng Thông báo giá giúp bạn dễ dàng đặt vé vào thời điểm thích
            hợp nhất. Điền thông tin hành khách trong nháy mắt với Passenger
            Quick Pick
          </h4>
        </div>
        <div className=""></div>
      </div>
      <div className="w-[400px] h-[500px] bg-white  absolute p-8 flex flex-col  wp-register-form top-20 right-8">
        <form action="">
          <h1 className="font-semibold text-4xl text-center">
            Đăng Kí Thành Viên Tralveroka!
          </h1>
          <div className="flex font-normal text-3xl justify-between my-5">
            <div className="">
              <label >Firstname</label>
              <input className="input__form w-[160px] h-[40px] mt-2 outline-none p-2" />
            </div>
            <div className="">
              <label >Lastname</label>
              <input className="input__form w-52 h-[40px] w-[160px] mt-2 outline-none p-2" />
            </div>
          </div>
          <div className="">
            <div className="font-normal text-3xl my-5">
              <label>Email</label><br/>
              <input className="input__form w-52 h-[40px] w-[340px] mt-2 outline-none p-2" />
            </div>
            <div className="font-normal text-3xl my-5">
              <label>Password</label><br/>
              <input className="input__form w-52 h-[40px] w-[340px] mt-2 outline-none p-2" />
            </div>
          </div>
          <div className="">
            <button className="btn__register">Tham gia</button>
          </div>
        </form>
        <div className="footer__register ">
          <span>Bạn Đăng Kí Chưa?</span>
          <a href=""></a>
        </div>
      </div>
    
    </div>
  );
}

export default Register;
