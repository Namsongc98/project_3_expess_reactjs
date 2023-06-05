import React from "react";
import "./form.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container__login">
      <div className="w-[400px] h-[400px] bg-white p-16 flex flex-col wp__login  ">
        <form action="">
          <h1 className="font-semibold text-4xl text-center">
            Đăng Kí Thành Viên Tralveroka!
          </h1>
          <div className="">
            <div className=" font-semibold text-2xl my-10  ">
              <label>Email</label>
              <br />
              <input className="input__form  h-[40px] w-[340px] mt-2 outline-none p-2" />
            </div>
            <p className=""></p>
            <div className=" font-semibold text-2xl my-5">
              <label>Password</label>
              <br />
              <input className="input__form  h-[40px] w-[340px] mt-2 outline-none p-2" />
            </div>
            <p></p>
          </div>
          <div className="">
            <button className="btn__register">Tham gia</button>
          </div>
          <div className="flex justify-start items-center">

            <p className="">Bạn có tài khoản chưa?</p>
            <Link to="/register" className="font-medium text-blue-600 ">
              Đăng kí
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
