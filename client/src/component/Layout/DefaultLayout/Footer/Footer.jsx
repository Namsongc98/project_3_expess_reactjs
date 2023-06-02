import React from "react";
import logo from "../../../../assets/images/logo_tralver.svg";
import "./Footer.scss";
import cart_1 from "../../../../assets/images/cart-1.svg";
import cart_2 from "../../../../assets/images/cart-2.png";
import cart_3 from "../../../../assets/images/cart-3.webp";
import cart_4 from "../../../../assets/images/cart-4.svg";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { arrImgFt,appStorenew,appGoolenew } from "./imgFooter.jsx";
function Footer() {
  return (
    <div className="footer-container">
      <div className="ft-top">
        <div className="ft-list--fisrt">
          <img src={logo} alt="" className="ft-logo" />
          <div className="ft-list-logo">
            <img src={cart_1} alt="" className="ft-item-logo" />
            <img src={cart_2} alt="" className="ft-item-logo" />
            <img src={cart_3} alt="" className="ft-item-logo" />
          </div>
          <div className="ft-wp-cooperate">
            <img src={cart_4} alt="" className="cooperate__img" />
            <p className="ft-cooperate-title">Hợp Tác với Traveloka</p>
          </div>
          <h1 className="ft-pay-cart">Đối tác thanh toán</h1>
          <div className="ft-list-cartPay">
            {arrImgFt?.map((img, index) => {
              return (
                <div className="ft-item-cart-wp" key={index}>
                  {" "}
                  <img src={img} alt="" className="ft-item-cart" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="ft-wp-list">
          <div className="ft-list">
            <div className="ft-about">
              <ul className="list-ft-about">
                <li className="item-ft-about--title">Về Traveloka</li>
                <li className="item-ft-about">Cách đặt chỗ</li>
                <li className="item-ft-about">Liên hệ chúng tôi</li>
                <li className="item-ft-about">Trợ giúp</li>
                <li className="item-ft-about">Tuyển dụng</li>
                <li className="item-ft-about">Về chúng tôi</li>
              </ul>
            </div>
            <div className="ft-about">
              <ul className="list-ft-contec">
                <li className="ft-contec-item-wp">Theo dõi chúng tôi trên</li>
                <li className="ft-contec-item-wp">
                  <FacebookIcon className="ft-connec--icon" />
                  <span className="ft-conect-name">Facebook</span>
                </li>
                <li className="ft-contec-item-wp">
                  <FacebookIcon className="ft-connec--icon" />
                  <span className="ft-conect-name">Facebook</span>
                </li>
                <li className="ft-contec-item-wp">
                  <InstagramIcon className="ft-connec--icon" />
                  <span className="ft-conect-name">Instagram</span>
                </li>
                <li className="ft-contec-item-wp">
                  <YouTubeIcon className="ft-connec--icon" />
                  <span className="ft-conect-name">Youtube</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="ft-list">
            <div className="ft-about">
              <ul className="list-ft-about">
                <li className="item-ft-about--title">Sản phảm</li>
                <li className="item-ft-about">Vé máy bay</li>
                <li className="item-ft-about">Khách sạn</li>
                <li className="item-ft-about">Combo tiết kiệm</li>
                <li className="item-ft-about">Xperience</li>
                <li className="item-ft-about">Car Rental</li>
                <li className="item-ft-about">Biệt thự</li>
                <li className="item-ft-about">Căn hộ</li>
                <li className="item-ft-about">Đưa đón sân bay</li>
              </ul>
            </div>
          </div>
          <div className="ft-list">
            <div className="ft-about">
              <ul className="list-ft-about">
                <li className="item-ft-about--title">Khác</li>
                <li className="item-ft-about">Traveloka Affiliate</li>
                <li className="item-ft-about">Traveloka Blog</li>
                <li className="item-ft-about">Chính sách quyền riêng tư</li>
                <li className="item-ft-about">Điều khoản & Điều kiện</li>
                <li className="item-ft-about">Quy chế hoạt động</li>
                <li className="item-ft-about">Đăng ký nơi nghỉ của bạn</li>
                <li className="item-ft-about">
                  Dứng kí doanh nghiệp hoạt động du lịchcủa bạn
                </li>
                <li className="item-ft-about">Khu vực báo chí</li>
              </ul>
            </div>
            <h1 className="ft-app-title">Tải ứng dụng Tralveloka</h1>
            <img src={appGoolenew} alt="" className="ft-app-img"/>
            <img src={appStorenew} alt="" className="ft-app-img" />
          </div>
        </div>
      </div>
      <div className="ft--bootom">
        <h1 className="ft-adress"> Công ty TNHH Traveloka Việt Nam. Mã số DN: 0313581779. Tòa nhà An Phú, 117-119 Lý Chính Thắng, P. 7, Q. 3, TPHCM</h1>
        <h1 className=" Copyring"> Copyright © 2023 Traveloka</h1>
      </div>
    </div>
  );
}

export default Footer;
