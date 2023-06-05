import React, { useState } from "react";
import freeRoom from "../../../../assets/images/freeRoom.webp";
import Ezychane from "../../../../assets/images/Ezychane.webp";
import payRoom from "../../../../assets/images/payRoom.webp";
import imgresour from "../../../../assets/images/imgresour.webp";
import supportImg from "../../../../assets/images/freeRoom.webp";
import "./Slider.scss"
function SliderCatecore() {
  const [slice, setSlice] = useState(0);

  return (
    <>
      <div className="my-5">
        <div className="my-5">
          <button className="btn-catecary ">Hà Nội </button>
          <button className="btn-catecary">Nha Trang </button>
          <button className="btn-catecaryHCM ">TP Hồ Chí Minh</button>
        </div>
        <div className="mt-4 flex justify-between overflow-hidden">
          <img src={freeRoom} alt="" className="w-[170px] rounded-2xl" />
          <img src={Ezychane} alt="" className="w-[170px] rounded-2xl" />
          <img src={payRoom} alt="" className="w-[170px] rounded-2xl" />
          <img src={imgresour} alt="" className="w-[170px] rounded-2xl" />
          <img src={supportImg} alt="" className="w-[170px] rounded-2xl" />
        </div>
      </div>
    </>
  );
}

export default SliderCatecore;
