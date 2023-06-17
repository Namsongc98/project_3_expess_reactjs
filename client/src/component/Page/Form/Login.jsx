import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./form.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../app/useSlice";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

function Login() {
  const [email_user, setEmailUser] = useState("");
  const [password_user, setPasswordUser] = useState("");

  const [checkExist, setExist] = useState(false);
 
  const [sameEmail, setSameEmail] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const error = useSelector((state) => state.user.error);
  const sussessStatus = useSelector((state) => state.user.starus);
  const userData = useSelector((state) => state.user.loginUser);

  useEffect(() => {
    if (userData.roles === "admin") {
      navigate("/admin");
    } else if (userData.roles === "user") {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [userData]);

  const currenUser = {
    email_user: email_user,
    password_user: password_user,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email_user || !password_user) {
      handleExist();
      return;
    } else {
      dispatch(loginUser(currenUser, navigate));
    }
  };

  useEffect(() => {
    if (error) {
      handleSameEmail();
    }
  }, [error]);
  useEffect(() => {
    if (sussessStatus) {
    }
  }, [sussessStatus]);

  

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const handleExist = () => {
    setExist(true);
  };

  const handleSameEmail = () => {
    setSameEmail(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setExist(false);

    setSameEmail(false);
  };
  return (
    <div className="container__login">
      <div className="w-[400px] h-[400px] bg-white p-16 flex flex-col wp__login  ">
        <form
          action="http://localhost:8080/users/post/login"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h1 className="font-semibold text-4xl text-center">Đăng Nhập</h1>
          <div className="">
            <div className=" font-semibold text-2xl my-10  ">
              <label htmlFor="email">Email</label>
              <br />
              <input
                id="email"
                name="email"
                className="input__form  h-[40px] w-[340px] mt-2 outline-none p-2"
                value={email_user}
                onChange={(e) => setEmailUser(e.target.value)}
              />
            </div>
            <p className=""></p>
            <div className=" font-semibold text-2xl my-5">
              <label htmlFor="passwword">Password</label>
              <br />
              <input
                id="passwword"
                name="passwword"
                className="input__form  h-[40px] w-[340px] mt-2 outline-none p-2"
                value={password_user}
                type="password"
                onChange={(e) => setPasswordUser(e.target.value)}
              />
            </div>
            <p></p>
          </div>
          <div className="">
            <button className="btn__register" >Tham gia</button>
          </div>
          <div className="flex justify-start items-center">
            <p className="">Bạn có tài khoản chưa?</p>
            <Link to="/register" className="font-medium text-blue-600 ">
              Đăng kí
            </Link>
          </div>
        </form>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar
            open={checkExist}
            autoHideDuration={6000}
            onClose={handleClose}
          >
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
           {error}
            </Alert>
          </Snackbar>
        </Stack>
      </div>
    </div>
  );
}

export default Login;
