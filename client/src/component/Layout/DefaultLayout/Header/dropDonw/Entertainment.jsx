import React, { useEffect, useRef, useState } from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CasinoIcon from "@mui/icons-material/Casino";
import TourIcon from "@mui/icons-material/Tour";
function Entertainment() {
  const [isToggleEntertainment, setIoggleEntertainment] = useState(false);
  const refWaper = useRef();

  useEffect(() => {
    let handleClose = (e) => {
      if (!refWaper.current.contains(e.target)) {
        setIoggleEntertainment(false);
      }
    };
    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, []);

  return (
    <>
      <li className="flex items-center cursor-pointer relative popupEntertainment" ref={refWaper}>
        <h1
          className="font-medium "
          onClick={() => setIoggleEntertainment(!isToggleEntertainment)}
        >
          Hoạt động và giải trí{" "}
        </h1>
        <ArrowDropDownIcon />
        <div
          className={` absolute w-80 rounded-md bg-white top-10 z-[10]  ${
            isToggleEntertainment
              ? `activeEntertainment`
              : `inactiveEntertainment`
          } `}
        >
          <ul className="popup-transport-list flex flex-col gap-4 py-4">
            <li className="popup-transportitem hover:bg-gray-200 p-2">
              <DoneAllIcon
                className="text-red-500 mr-5 font-normal"
                style={{ fontSize: "24px" }}
              />
              <span className="font-thin text-2xl">Xperience</span>
            </li>
            <li className="popup-transportitem hover:bg-gray-200 p-2">
              <CasinoIcon
                className="text-fuchsia-500 mr-5 font-normal"
                style={{ fontSize: "24px" }}
              />
              <span className="font-thin text-2xl">Attactsions</span>
            </li>
            <li className="popup-transportitem hover:bg-gray-200 p-2">
              <TourIcon
                className="text-fuchsia-500 mr-5 font-normal"
                style={{ fontSize: "24px" }}
              />
              <span className="font-thin text-2xl">Tours</span>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
}

export default Entertainment;
