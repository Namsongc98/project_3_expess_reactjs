import React, { useEffect, useRef, useState } from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RedeemIcon from "@mui/icons-material/Redeem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Product() {
  const [isToggleAddProduct, setIoggleAddProduct] = useState(false);
  const refWaper = useRef();

  useEffect(() => {
    let handleClose = (e) => {
      if (!refWaper.current.contains(e.target)) {
        setIoggleAddProduct(false);
      }
    };
    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, []);
  return (
    <>
      <li
        className="flex items-center cursor-pointer relative popupProduct"
        ref={refWaper}
      >
        <h1
          className="font-medium "
          onClick={() => setIoggleAddProduct(!isToggleAddProduct)}
        >
          Sản phẩm bổ sung{" "}
        </h1>
        <ArrowDropDownIcon />
        <div
          className={` absolute w-80 rounded-md bg-white top-10 z-[10] ${
            isToggleAddProduct ? `activeProduct` : `inactiveProduct`
          } `}
        >
          <ul className="popup-transport-list flex flex-col gap-4 py-4">
            <li className="popup-transportitem hover:bg-gray-200 p-2">
              
              <MonetizationOnIcon
                className="text-blue-500 mr-5 font-normal"
                style={{ fontSize: "24px" }}
              />
              <span className="font-thin text-2xl">Điểm thưởng của tôi</span>
            </li>
            <li className="popup-transportitem hover:bg-gray-200 p-2">
              <RedeemIcon
                className="text-fuchsia-500 mr-5 font-normal"
                style={{ fontSize: "24px" }}
              />
              <span className="font-thin text-2xl">Phiếu quà của tôi</span>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
}

export default Product;
