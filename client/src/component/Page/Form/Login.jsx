import React from "react";
import "./form.scss"

function Login() {
  return (
    <div className="w-[400px] h-[500px] bg-white   p-8 flex flex-col   wp__login">
      
      <form action="">
        <h1 className="font-semibold text-4xl text-center">
          Đăng Kí Thành Viên Tralveroka!
        </h1>
        <div className="flex font-normal text-3xl justify-between my-5">
          <div className="">
            <label>Firstname</label>
            <input className="input__form w-[160px] h-[40px] mt-2 outline-none p-2" />
          </div>
          <div className="">
            <label>Lastname</label>
            <input className="input__form w-52 h-[40px] w-[160px] mt-2 outline-none p-2" />
          </div>
        </div>
        <div className="">
          <div className="font-normal text-3xl my-5">
            <label>Email</label>
            <br />
            <input className="input__form w-52 h-[40px] w-[340px] mt-2 outline-none p-2" />
          </div>
          <div className="font-normal text-3xl my-5">
            <label>Password</label>
            <br />
            <input className="input__form w-52 h-[40px] w-[340px] mt-2 outline-none p-2" />
          </div>
        </div>
        <div className="">
          <button className="btn__register">Tham gia</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
