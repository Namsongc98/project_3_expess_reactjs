import React, { useState } from "react";
import "./form.scss";
import phone_coin from "../../../assets/images/phone_coin.svg";
import ticket from "../../../assets/images/ticket.svg";
import pay_register from "../../../assets/images/pay_register.svg";
import ticket_arworr from "../../../assets/images/ticket_arworr.svg";
import { Link } from "react-router-dom";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const [phoneUser, setPhoneUser] = useState("");

  const regexEmai = /^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;
  const regexPassword = /^[a-zA-Z0-9_\s]{6,}$/;
  
  const checkEmail = regexEmai.test(emailUser);
  const checkPassword = regexPassword.test(passwordUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !emailUser || !passwordUser) {
      console.log("không được để trống");
    } else if (!checkEmail) {
      console.log(checkEmail);
    } else if (!checkPassword) {
      console.log(checkPassword);
    } else {
      console.log("ok");
    }
  };

  return (
    <div className="py-6 gap-20 relative ">
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
          <img
            src={ticket_arworr}
            alt=""
            className="w-16 font-bold text-4xl mp-5 "
          />
          <h2 className="font-bold text-4xl">Trải nghiệm đặt chỗ suôn sẻ</h2>
          <h4 className="leading-10">
            Tính năng Thông báo giá giúp bạn dễ dàng đặt vé vào thời điểm thích
            hợp nhất. Điền thông tin hành khách trong nháy mắt với Passenger
            Quick Pick
          </h4>
        </div>
        <div className=""></div>
      </div>
      <div className="w-[400px]  bg-white shadow-slate-500 absolute p-8 flex flex-col  wp-register-form top-20 right-8">
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <h1 className="font-semibold text-4xl text-center">
            Đăng Kí Thành Viên Tralveroka!
          </h1>
          <div className="flex font-semibold text-2xl justify-between my-5">
            <div className="">
              <label>Firstname</label>
              <input
                className="input__form w-[160px] h-[40px] mt-2 outline-none p-2"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="">
              <label>Lastname</label>
              <input
                className="input__form  h-[40px] w-[160px] mt-2 outline-none p-2"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="">
            <div className=" font-semibold text-2xl my-5">
              <label>Email</label>
              <br />
              <input
                className="input__form  h-[40px] w-[340px] mt-2 outline-none p-2"
                value={emailUser}
                onChange={(e) => setEmailUser(e.target.value)}
              />
            </div>
            <p className="text-xl">
              Email không chứa kí tự đặc biệt và không được để trống
            </p>
            <div className=" font-semibold text-2xl my-5">
              <label>Password</label>
              <br />
              <input
                className="input__form  h-[40px] w-[340px] mt-2 outline-none p-2"
                value={passwordUser}
                onChange={(e) => setPasswordUser(e.target.value)}
              />
            </div>
            <p className="text-xl">
              Password không chứa kí tự đặc biệt và trên 6 kí tự
            </p>
           
          </div>
          <div className="">
            <button className="btn__register">Tham gia</button>
          </div>
        </form>
        <div className="footer__register ">
          <span>Bạn Đăng Kí Chưa?</span>  <Link to="/login" className="font-medium text-blue-600 ">Đăng nhập</Link>
         
        </div>
      </div>
    </div>
  );
}

export default Register;
