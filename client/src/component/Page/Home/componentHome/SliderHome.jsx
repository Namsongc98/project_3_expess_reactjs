import React, { Component } from "react";
import Slider from "react-slick";
import home_combo from "../../../../assets/images/home_combo.webp";
import home_day from "../../../../assets/images/home_day.webp";
import home_phone from "../../../../assets/images/home_phone.webp";
import home_sale from "../../../../assets/images/home_sale.webp";
import home_target from "../../../../assets/images/home_target.webp";

export default class Resizable extends Component {
  state = {
    display: true,
    width: 100,
    marginTop:10
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div>
        <div
          style={{
            width: this.state.width + "%",
            display: this.state.display ? "block" : "none",
            marginTop: this.state.marginTop + "px"
         
          }}

        >
          <Slider {...settings}>
            <div  >
              <img src={home_combo} alt="" />
            </div>
            <div >
              <img src={home_day} alt="" />
            </div>
            <div >
              <img src={home_phone} alt="" />
            </div>
            <div >
              <img src={home_sale} alt="" />
            </div>
            <div >
              <img src={home_target} alt="" />
            </div>
            <div >
              <img src={home_phone} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
