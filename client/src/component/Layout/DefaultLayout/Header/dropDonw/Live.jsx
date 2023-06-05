import React, { useEffect, useRef, useState } from 'react'
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import ApartmentIcon from '@mui/icons-material/Apartment';

function Live() {
    const [isToggleLive, setIoggleLive] = useState(false);
    const refWaper = useRef();


    useEffect(() => {
      let handleClose = (e) => {
        if (!refWaper.current.contains(e.target)) {
            setIoggleLive(false);
        }
      };
      document.addEventListener("mousedown", handleClose);
      return () => {
        document.removeEventListener("mousedown", handleClose);
      };
    }, []);

  return (
    <>
         <li className="flex items-center cursor-pointer relative popupLive" ref={refWaper}>
            <h1
              className="font-medium "
              onClick={() => setIoggleLive(!isToggleLive)}
            >
              Chỗ ở
            </h1>
            <ArrowDropDownIcon />
            <div
              className={` absolute w-80 rounded-md bg-white top-10 ${
                isToggleLive ? `activeLive` : `inactiveLive`
              } `}
            >
              <ul className="popup-transport-list flex flex-col gap-4 py-4">
              <li className="popup-transportitem hover:bg-gray-200 p-2">
                  <ApartmentIcon
                    className="text-fuchsia-500 mr-5 font-normal"
                    style={{ fontSize: "24px" }}
                  />
                  <span className="font-thin text-2xl">Khách sạn</span>
                </li>
                <li className="popup-transportitem hover:bg-gray-200 p-2">
                  <MapsHomeWorkIcon
                    className="text-blue-500 mr-5 font-normal"
                    style={{ fontSize: "24px" }}
                  />
                  <span className="font-thin text-2xl">Combo tiết kiệm</span>
                </li>
               
              </ul>
            </div>
          </li>
    </>
  )
}

export default Live