import React, { useEffect, useState } from "react";
import "./form.scss";

import phone_coin from "../../../assets/images/phone_coin.svg";
import ticket from "../../../assets/images/ticket.svg";
import pay_register from "../../../assets/images/pay_register.svg";
import ticket_arworr from "../../../assets/images/ticket_arworr.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { logout, postUser } from "../../../app/useSlice";

function Register() {
  //lấy giá trị input
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email_user, setEmailUser] = useState("");
  const [password_user, setPasswordUser] = useState("");

  //khởi tạo check validate
  const [checkExist, setExist] = useState(false);
  const [alertEmail, setAlertEmail] = useState(false);
  const [checkAlertPassword, setAlertPassword] = useState(false);
  const [sameEmail, setSameEmail] = useState(false);
  //
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const status = useSelector(state=>(state.user.status))

  // regex_patter
  const regexEmai = /^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;
  const regexPassword = /^[a-zA-Z0-9_\s]{6,}$/;
  //test regex
  const checkEmail = regexEmai.test(email_user);
  const checkPassword = regexPassword.test(password_user);
  //check validate cho register

  const checkErr = useSelector((state) => state.user.error);

  const newUser = {
    firstname: firstname,
    lastname: lastname,
    email_user: email_user,
    password_user: password_user,
    roles: "user",
  };

  useEffect(()=>{
    if(status===true){
      navigate('/login')
    }
  },[status])


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email_user || !password_user) {
      return handleExist();
    } else if (!checkEmail) {
      return handleEmail();
    } else if (!checkPassword) {
      return handlePassword();
    } else {
      dispatch(postUser(newUser));
    }
  };





  //snackbar-------------
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const handleExist = () => {
    setExist(true);
  };
  const handleEmail = () => {
    setAlertEmail(true);
  };
  const handlePassword = () => {
    setAlertPassword(true);
  };
  const handleSameEmail = () => {
    setSameEmail(true);
  };
  useEffect(() => {
    if (checkErr) {
      handleSameEmail();
    }
  }, [checkErr]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setExist(false);
    setSameEmail(false);
    setAlertPassword(false);
    setAlertEmail(false);
  };

  // const handlRegister = ()=>{
  //   dispatch(logout())
  //   navigate('/register')
  // }

  return (
    <div className="py-6 gap-20 relative ">
      <div className=" h-[146px] bg-[#0194f3] text-white leading-10 flex flex-col justify-center pl-10 gap-5 ">
        <h1 className="font-bold text-4xl">
          Đằng kí thành viên của Traveloka và trả nghiệm ưu đãi hấp dẫn
        </h1>
        <h3 className="font-medium text-3xl">
          Thật nhanh và an toàn hãy đằng kí ngay để được{" "}
        </h3>
      </div>
      <div className=" grid grid-cols-3 p-10 gap-5">
        <div className=" ">
          <img src={phone_coin} alt="" className="w-16 mb-5" />
          <h2 className="font-bold text-4xl ">Nhận thưởng khi đặt chỗ</h2>
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
            className="w-16 mb-5 "
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
        <form
          action="http://localhost:8080/users/post/register"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h1 className="font-semibold text-4xl text-center">
            Đăng Kí Thành Viên Traveloka!
          </h1>

          <div className="flex   justify-between my-5">
            <div className="">
              <label htmlFor="firstname" className="font-semibold">
                First name
              </label>
              <input
                id="firstname"
                className="input__form w-[160px] h-[40px] mt-2 outline-none p-2"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="">
              <label htmlFor="lastname" className="font-semibold">
                Last name
              </label>
              <input
                id="lastname"
                className="input__form  h-[40px] w-[160px] mt-2 outline-none p-2"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="">
            <div className="   my-5">
              <label className="font-semibold">Email</label>
              <br />
              <input
                className="input__form  h-[40px] w-[340px] mt-2 outline-none p-2"
                value={email_user}
                onChange={(e) => setEmailUser(e.target.value)}
              />
            </div>

            <div className="  my-5">
              <label className=" font-semibold ">Password</label>
              <br />
              <input
                className="input__form  h-[40px] w-[340px] mt-2 outline-none p-2"
                value={password_user}
                type="password"
                onChange={(e) => setPasswordUser(e.target.value)}
              />
            </div>
          </div>

          <div className="">
            <button className="btn__register">Tham gia</button>
          </div>
        </form>
        <Stack spacing={3} sx={{ width: "100%" }}>
          <Snackbar
            open={checkExist}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              Vui lòng nhập đầy đủ thông tin
            </Alert>
          </Snackbar>
          <Snackbar
            open={alertEmail}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              Vui lòng nhập đúng trường Email
            </Alert>
          </Snackbar>
          <Snackbar
            open={checkAlertPassword}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              Vui lòng nhập password trên 6 kí tự
            </Alert>
          </Snackbar>
          <Snackbar
            open={sameEmail}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              {checkErr}
            </Alert>
          </Snackbar>
        </Stack>
        <div className="footer__register ">
          <span>Bạn Đăng Kí Chưa?</span>
          <Link to="/login" className="font-medium text-blue-600  ml-3">
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
