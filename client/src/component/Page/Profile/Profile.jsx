import React, { useEffect, useState } from "react";
import "./profile.scss";
import { NavLink } from "react-router-dom";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import {
  getProfile,
  getProfileLogin,
  postProfile,
} from "../../../app/profileSlice";

function Profile() {
  const [imageDisplay, setImgDisplay] = useState();
  const [avartar, userAvatar] = useState();
  const [userName, setUserName] = useState("");
  const [phoneUser, setPhoneUser] = useState(0);
  const [dateUser, setDateUser] = useState("");
  const [ageUser, setAgeUser] = useState(0);
  const [adressUser, setAdress] = useState("");
  const [gender, setGerder] = useState("");
  const [checkExist, setExist] = useState(false);
  const [profileAll, setProfile] = useState([]);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.loginUser.id_user);
  const handleSumit = async (e) => {
    e.preventDefault();
    const formattedDate = moment(dateUser, "YYYY/MM/DD").format("YYYY/MM/DD");
    setDateUser(formattedDate);
    const formData = new FormData();
    formData.append("name_user", userName);
    formData.append("avartar_user", avartar);
    formData.append("phone_user", phoneUser);
    formData.append("date_user", dateUser);
    formData.append("age", ageUser);
    formData.append("adress_user", adressUser);
    formData.append("gender", gender);
    formData.append("id_user", userId);
    if (
      !userName ||
      !avartar ||
      !phoneUser ||
      !dateUser ||
      !ageUser ||
      !gender ||
      !adressUser
    ) {
      handleExist();
    } else {
      dispatch(postProfile(formData));
    }
  };

  // const findProfile = profileAll?.find((profile) => profile.id_user === userId);

  useEffect(() => {
    dispatch(getProfile());
    // const getProfile = async () => {
    //   try {
    //     const response = await axios.get("http://localhost:8080/profile");
    //     setProfile(response.data.data);
    //     return response.data;
    //   } catch (error) {
    //     throw new Error(error);
    //   }
    // };
    // getProfile();
  }, []);

  useEffect(() => {
    dispatch(getProfileLogin());
  }, []);

  const hanldeRoomimg = (e) => {
    userAvatar(e.target.files[0]);
    const fileimg = e.target.files[0];
    fileimg.preview = URL.createObjectURL(fileimg);
    setImgDisplay(fileimg);
  };
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(imageDisplay?.preview);
    };
  }, [imageDisplay]);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setExist(false);
  };
  const handleExist = () => {
    setExist(true);
  };
  return (
    <div className="flex m-[20px] gap-[27px] container-profile">
      <div className=" w-[25%] p-4 dashboard-profile ">
        <div className="dashboard-infor flex justify-start gap-5 items-center  p-5">
          <div className="dashboard-wp__img w-[60px] h-[60px] rounded-full  overflow-hidden bg-slate-400">
            <img
              src={findProfile?.avartar_user}
              alt=""
              className="w-[60px] h-[60px]"
            />
          </div>
          <div className="">
            <p className="text-3xl font-semibold">{findProfile?.name_user}</p>
            <span className="text-xl">Email</span>
          </div>
        </div>
        <div className="py-3">
          <ul className="">
            <li className="flex ">
              <NavLink
                to="/profilerom"
                className="flex items-center py-2 px-6 gap-4 font-medium"
              >
                <LibraryBooksIcon
                  className="text-blue-500"
                  style={{ fontSize: "25px" }}
                />
                <p>Đặt chỗ của tôi</p>
              </NavLink>
              <div className=""></div>
            </li>
            <li className="">
              <NavLink
                to="/profilerom"
                className="flex items-center py-2 px-6 gap-4 font-medium"
              >
                <ManageAccountsIcon
                  className="text-blue-500"
                  style={{ fontSize: "25px" }}
                />
                <p className="">Tài khoản </p>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/register"
                className="flex items-center py-2 px-6 gap-4 font-medium"
              >
                <PowerSettingsNewIcon
                  className="text-blue-500"
                  style={{ fontSize: "25px" }}
                />
                <p className=""> Đăng xuất</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[75%]">
        <h1 className=" font-bold  text-4xl">Cài Đặt</h1>
        <div className="wp-searchFrofile  mx-auto  mt-6">
          <div className=" h-[56px] head-title  ">
            <h1 className=" font-semibold text-2xl leading-[56px]  pl-7">
              {" "}
              Dữ liệu cá nhân
            </h1>
          </div>
          <form
            action=""
            className=" px-7 py-10 flex flex-col  h-[400px] justify-between"
          >
            <div className="flex justify-around">
              <div className="flex flex-col mb-6 text-2xl w-[35%]">
                <label htmlFor=" " className="font-bold ">
                  Tên đầy đủ
                </label>
                <div className="h-[40px] wp-input w-[100%] flex justify-evenly items-center mt-4">
                  <input
                    type="text"
                    className="w-[94%] outline-none"
                    placeholder=" Họ và Tên..."
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                  />
                </div>
                <p className="text-xl mt-2 opacity-70">
                  {" "}
                  Tên trong hồ sơ được rút ngắn từ họ và tên của bạn{" "}
                </p>
              </div>
              <div className="flex flex-col mb-6 text-2xl w-[35%]">
                <label htmlFor=" " className="font-bold ">
                  số điện thoại
                </label>
                <div className="h-[40px] wp-input w-[100%] flex justify-evenly items-center mt-4">
                  <input
                    type="number"
                    className="w-[94%] outline-none"
                    placeholder="nhập số điện thoại..."
                    value={phoneUser}
                    onChange={(e) => setPhoneUser(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-8 flex flex-col justify-center items-center w-[20%]  ">
                <div className="w-[200px] h-[140px] py-1.5 wp-img flex justify-start gap-[2px] overflow-hidden">
                  <img src={imageDisplay?.preview} className="w-[200px]" />
                </div>
                <input
                  type="file"
                  className=" px-3 py-2 w-[100px] text-sm font-semibold"
                  onChange={(e) => hanldeRoomimg(e)}
                />
              </div>
            </div>
            <div className="flex  h-[400px] justify-between ">
              <div className="flex flex-col mb-6 w-[20%] text-2xl ">
                <label htmlFor="">Giới tính </label>
                <select
                  className="h-[40px] wp-input w-[100%]  pl-2 outline-none mt-4 "
                  value={gender}
                  onChange={(e) => setGerder(e.target.value)}
                >
                  <option value="">--Chọn giới tính--</option>
                  <option value={1}>nam</option>
                  <option value={0}>nữ</option>
                </select>
              </div>

              <div className="flex flex-col mb-6 w-[20%] text-2xl ">
                <label htmlFor="">Ngày tháng năm sinh </label>
                <input
                  type="date"
                  className="h-[40px] wp-input w-[100%]  pl-2 outline-none mt-4 "
                  value={dateUser}
                  onChange={(e) => setDateUser(e.target.value)}
                />
              </div>

              <div className="flex flex-col mb-6 w-[20%] text-2xl ">
                <label htmlFor="">Tuổi </label>
                <input
                  type="number"
                  className="h-[40px] wp-input w-[100%]  pl-2 outline-none mt-4 "
                  value={ageUser}
                  onChange={(e) => setAgeUser(e.target.value)}
                />
              </div>
            </div>
            <div className="w-[100%]">
              <div className="w-[100%]">
                <label htmlFor="">Thành phố đang ở</label>
                <div className=" h-[40px] wp-input w-[100%] flex justify-evenly items-center mt-4">
                  <input
                    type="text"
                    placeholder="Thành phố bạn đang ở"
                    className="w-[94%] outline-none"
                    value={adressUser}
                    onChange={(e) => setAdress(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  to="/catecary"
                  className="w-[80px] h-[40px] my-4 btn-form block text-center font-semibold hover:bg-blue-400 "
                >
                  Sửa
                </button>

                <button
                  to="/catecary"
                  onClick={(e) => handleSumit(e)}
                  className="w-[80px] h-[40px] my-4 btn-form block text-center font-semibold hover:bg-blue-400 "
                >
                  Lưu
                </button>
              </div>
            </div>
          </form>
          <Stack spacing={2} sx={{ width: "100%" }}>
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
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Profile;
