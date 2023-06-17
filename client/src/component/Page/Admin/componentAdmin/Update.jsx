import React, { useEffect, useState } from "react";
import "./Admin.scss";
import { useDispatch, useSelector } from "react-redux";
import { getHotel } from "../../../../app/hotelSlice";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";


function Update({idHotel,setOpenUpdate}) {
   
 
   

  const [imageDisplay, setImgDisplay] = useState([]);
  const [image_homestay, setimghotel] = useState([]);
  const [name_homestay, setName_homestay] = useState("");
  const [city, setCity] = useState("");
  const [qualityrom, setQualityrom] = useState(0);
  const [desribe, setDesribe] = useState("");
  const [price, setPrice] = useState("");
  const [checkExist, setExist] = useState(false);
  const dispatch = useDispatch();
  const hotel = useSelector((state) => state.hotel.hotelAll.data);

  const findHotel = hotel.find((hotel)=>hotel.id_homestay===idHotel)

  useEffect(() => {
    dispatch(getHotel());
  }, [dispatch]);

  const handleHotel = async (e,id) => {
    e.preventDefault();

    if (!image_homestay || !name_homestay || !city || !qualityrom || !desribe||!price) {
      handleExist();
    } else {
 
      try {
        const formData = new FormData();
        formData.append("name_homestay", name_homestay);
        formData.append("image_homestay", image_homestay)
        formData.append("city", city);
        formData.append("qualityrom", qualityrom);
        formData.append("desribe", desribe);
        formData.append("price", price);
        const response = await axios.put(
          `http://localhost:8080/hotel/updatehotel/${id}`,
          formData
        );
        dispatch(getHotel());
        setOpenUpdate(null  )
        return response.data;
      } catch (error) {
        console.log(error)
        throw new Error(error);
      }
    }
  };

 
  // chuc năng review hinh ảnh
  const handlePreview = (e) => {
    e.preventDefault();
    setimghotel(e.target.files[0]);
    const fileimg = e.target.files[0];
    fileimg.preview = URL.createObjectURL(fileimg);
    setImgDisplay(fileimg);
  };
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(imageDisplay?.preview);
    };
  }, [imageDisplay]);
  // snackbar
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

      <div className="containerUpdate" >
        <form
        className=" w-[800px] my-[100px] mx-auto wp-form-Update"
          encType="multipart/form-data "
          action="http://localhost:8080/hotel/addhotel"
          method="post"
          onSubmit={(e) => handleHotel(e,findHotel.id_homestay)}
        >
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Thêm khách sạn
            </h2>
            <div className="flex">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="name_homestay"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Tên Khách sạn
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name_homestay"
                      id="name_homestay"
                      value={name_homestay}
                      placeholder={findHotel.name_homestay}
                      onChange={(e) => setName_homestay(e.target.value)}
                      autoComplete="given-name"
                      className="px-2 block w-[200px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="qualityrom"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Số phòng
                  </label>
                  <div className="mt-2">
                    <input
                      value={qualityrom}
                      onChange={(e) => setQualityrom(e.target.value)}
                      placeholder={findHotel.qualityrom}
                      type="number"
                      name="qualityrom"
                      id="number"
                      autoComplete="given-name"
                      className="px-2 block w-[200px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="qualityrom"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Price
                  </label>
                  <div className="mt-2">
                    <input
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      type="number"
                      name="qualityrom"
                      id="number"
                      autoComplete="given-name"
                      className="px-2 block w-[200px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              {/* mô tả */}
              <div className="flex flex-col items-center justify-evenly">
                <div className="col-span-full">
                  <label
                    htmlFor="desribe"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    About
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="desribe"
                      name="desribe"
                      value={desribe}
                      placeholder={desribe}
                      onChange={(e) => setDesribe(e.target.value)}
                      rows={3}
                      className="px-2 block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* Tên thành phố */}
                <div className="">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Tên thành phố
                  </label>
                  <select
                    name="city"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="block text-sm font-medium leading-6  w-[200px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">--Chọn thành phố-- </option>
                    <option value="Hà Nội">Hà Nội</option>
                    <option value="Hạ Long">Hạ Long</option>
                    <option value="SaPa">SaPa</option>
                    <option value="Đà Nẵng">Đà Nẵng</option>
                    <option value="TP Hồ Chí Minh">TP Hồ Chí Minh</option>
                  </select>
                </div>
              </div>
              {/* hình ảnh */}
              <div className="mb-8 flex flex-col justify-center items-center w-[50%]  ">
                <div className="w-[200px] h-[140px] py-1.5 wp-img flex justify-start gap-[2px] overflow-hidden">
                  <img src={imageDisplay.preview} className="w-[200px]" />
                </div>
                <input
                  type="file"
                  className=" px-3 py-2 w-[100px] text-sm font-semibold"
                  onChange={(e) => handlePreview(e)}
                />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={()=>setOpenUpdate(null)}
              >
                Trở về
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
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
 
  );
}

export default Update;
