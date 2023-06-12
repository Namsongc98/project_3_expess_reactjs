import React, { useEffect, useState } from "react";
import "./Admin.scss";
import { useDispatch, useSelector } from "react-redux";
import { getHotel } from "../../../../app/hotelSlice";
import axios from "axios";

function Adminhotel() {
  const [imageDisplay, setImgDisplay] = useState([]);
  const [image_homestay, setimghotel] = useState([]);
  const [name_homestay, setName_homestay] = useState("");
  const [city, setCity] = useState("");
  const [qualityrom, setQualityrom] = useState(0);
  const [desribe, setDesribe] = useState("");
  const dispatch = useDispatch();
  const hotel = useSelector((state) => state.hotel.hotelAll.data);

  useEffect(() => {
    dispatch(getHotel());
  }, [dispatch]);

  const handleHotel = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let index = 0; index < image_homestay.length; index++) {
      formData.append("photos", image_homestay[index]);
    }
    const newHotel = {
      name_homestay,
      image_homestay,
      city,
      qualityrom,
      desribe,
    };
    console.log(newHotel);
    try {
      const response = await axios.post(
        "http://localhost:8080/hotel/addhotel",
        newHotel,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  // chuc năng review hinh ảnh
  const handlePreview = (e) => {
    e.preventDefault();
    setimghotel([...e.target.files]);
    if (e.target.files) {
      const fileImgArr = Array.from(e.target.files).map((img) =>
        URL.createObjectURL(img)
      );
      setImgDisplay((img) => img.concat(fileImgArr));
      Array.from(e.target.files).map((img) => URL.revokeObjectURL(img));
    }
  };
  const renderImg = (source) => {
    return source.map((img, index) => {
      return <img src={img} className="w-[80px]" key={index} />;
    });
  };

  return (
    <div className="mt-10">
      <div className="w-[100%] h-[60px] text-4xl font-semibold text-blue-800 ">
        <h1 className="text-center leading-[60px] hover:underline  hover:decoration-solid">
          List phòng khách sạn
        </h1>
      </div>
      <div className="">
        <form
          encType="multipart/form-data"
          action="http://localhost:8080/hotel/addhotel"
          method="post"
          onSubmit={(e) => handleHotel(e)}
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
                      onChange={(e) => setName_homestay(e.target.value)}
                      autoComplete="given-name"
                      className="block w-[200px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      type="number"
                      name="qualityrom"
                      id="number"
                      autoComplete="given-name"
                      className="block w-[200px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      onChange={(e) => setDesribe(e.target.value)}
                      rows={3}
                      className="block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                <div className="w-[300px] h-[140px] py-1.5 wp-img flex justify-start gap-[2px] overflow-hidden">
                  {renderImg(imageDisplay)}
                </div>
                <input
                  type="file"
                  multiple
                  className=" px-3 py-2 w-[100px] text-sm font-semibold"
                  onChange={(e) => handlePreview(e)}
                />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
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
      </div>
      <div className="wp-table w-[100%] ">
        <table className=" table w-[100%]">
          <thead className="head-table bg-gray-200 ">
            <tr>
              <th>STT</th>
              <th>Tên khách sạn</th>
              <th>Hình ảnh</th>
              <th>Mô Tả</th>
              <th>Số phòng</th>
              <th>Thành Phố</th>
              <th> Xóa</th>
              <th>Sửa </th>
              <th>Chi tiêt phòng </th>
            </tr>
          </thead>
          <tbody>
            {hotel?.map((hotel, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{hotel.name_homestay}</td>

                <td>{hotel.imageDisPlay}</td>
                <td>{hotel.desribe}</td>
                <td>{hotel.qualityrom}</td>
                <td>{hotel.city}</td>
                <td>
                  <button>xóa</button>
                </td>
                <td>
                  <button>Sửa</button>
                </td>
                <td>
                  <button>Xem chi tiết</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Adminhotel;
