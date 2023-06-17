import React, { useEffect, useRef, useState } from "react";
import LocalCarWashIcon from "@mui/icons-material/LocalCarWash";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FlightIcon from "@mui/icons-material/Flight";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';


function Transport() {
    const [isToggleTransport, setIoggleTransport] = useState(false);
  const refWaper = useRef();


  useEffect(() => {
    let handleClose = (e) => {
      if (!refWaper.current.contains(e.target)) {
        setIoggleTransport(false);
      }
    };
    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, []);
  return (
    <>
      <li className="flex items-center cursor-pointer relative" ref={refWaper}>
        <h1
          className="font-medium"
          onClick={() => setIoggleTransport(!isToggleTransport)}
        >
          Vận chuyển{" "}
        </h1>
        <ArrowDropDownIcon />

        <div
          className={`popup-transport absolute w-80 rounded-md bg-white top-10 z-[10] ${
            isToggleTransport ? `activeTransport` : `inactiveTransport`
          } `}
        >
          <ul className="popup-transport-list flex flex-col gap-4 py-4">
            <li className="popup-transportitem hover:bg-gray-200 p-2">
              <FlightIcon
                className="text-blue-500 mr-5 font-normal"
                style={{ fontSize: "24px" }}
              />
              <span className="font-thin text-2xl">Vé máy bay</span>
            </li>
            <li className="popup-transportitem hover:bg-gray-200 p-2">
              <MapsHomeWorkIcon
                className="text-fuchsia-500 mr-5 font-normal"
                style={{ fontSize: "24px" }}
              />
              <span className="font-thin text-2xl">Combo tiết kiệm</span>
            </li>
            <li className="popup-transportitem hover:bg-gray-200 p-2">
              <EmojiTransportationIcon
                className="text-green-300 mr-5 font-normal"
                style={{ fontSize: "24px" }}
              />
              <span className="font-thin text-2xl">Đưa đón sân bay</span>
            </li>
            <li className="popup-transportitem hover:bg-gray-200 p-2">
              <DirectionsCarIcon
                className="text-green-700 mr-5 font-normal"
                style={{ fontSize: "24px" }}
              />
              <span className="font-thin text-2xl">Cho thuê xe</span>
            </li>
            <li className="popup-transportitem hover:bg-gray-200 p-2">
              <DirectionsBusFilledIcon
                className="text-blue-300 mr-5 font-normal"
                style={{ fontSize: "24px" }}
              />
              <span className="font-thin text-2xl">Xe bus</span>
            </li>
            <li className="popup-transportitem hover:bg-gray-200 p-2">
              <FlightIcon
                className="text-gray-300 mr-5 font-normal"
                style={{ fontSize: "24px" }}
              />
              <span className="font-thin text-2xl">Tình trạng chuyến bay</span>
            </li>
            <li className="popup-transportitem hover:bg-gray-200 p-2">
              <NotificationsActiveIcon
                className="text-blue-500 mr-5 font-normal"
                style={{ fontSize: "24px" }}
              />
              <span className="font-thin text-2xl">Thông báo giá vé</span>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
}

export default Transport;
