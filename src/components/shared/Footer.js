import React from "react";
import logo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <div className="row mx-auto footer py-xl-5 py-4">
      <div className="col-xl-3 mx-auto">
        <img src={logo} alt="logo_icon" />
        <p className="sans my-xxl-3 my-2 my-xl-3">
          The Mānuka trees that our honey comes from only flower for 2-6 weeks a
          year. Making our super honey even more precious. More than the ideal
          natural sweetener for healthy lifestyles, our higher potency honeys
          can be used as an antibacterial healing aid for cuts, burns and acne.
        </p>
        <div>
          <a href="https://www.facebook.com/" target="_blank" className="black">
            <i className="fa fa-2x fa-facebook zoom-in pr-3 mr-xl-4"></i>
          </a>
          <span className="px-2 px-xxl-4"></span>
          <a href="https://www.facebook.com/" target="_blank" className="black">
            <i className="fa fa-2x fa-instagram zoom-in"></i>
          </a>
        </div>
      </div>
      <div className="col-xl-2 my-2 my-xl-0 mx-auto">
        <p className="sans my-2">Raw Manuka</p>
        <p className="sans">Manuka On-the-go</p>
      </div>
      <div className="col-xl-2 my-2 my-xl-0 mx-auto">
        <p className="sans my-2">About Us</p>
        <p className="sans mb-2">About Manuka</p>
        <p className="sans">Privacy Policy</p>
      </div>
      <div className="col-xl-2 my-2 my-xl-0 mx-auto">
        <p className="sans my-2">+94 9 217 3866</p>
        <p className="sans mb-2">hello@menkora.com</p>
        <p className="sans mb-2">Contact Us</p>
        <p className="sans mb-2">Shipping Info</p>
      </div>
      <div className="col-xl-2 my-2 my-xl-0 mx-auto input">
        <p className="sans my-2">NEWSLETTER</p>
        <p className="sans mb-0">
          Subscribe to recieve updates, access to exclusive deals, and more.
        </p>
        <input
          className="form-control border p-xxl-3 p-2 px-xl-3 my-xl-3 my-2"
          type="email"
          placeholder="Email Address"
        />
        <button className="px-3 px-xl-4 px-xxl-5 btn py-2 py-xxl-3 border-0 zoom-in">
          SUBSCRIBE
        </button>
      </div>
      <div className="col-xl-12 mt-xl-5 pt-xl-5 mt-3 d-none d-lg-block">
        <p className="small"> © MANUKORA</p>
        <div className="d-flex align-items-center">
          <p>Powered By Shopify</p>
          <div className="d-flex align-items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
