import React from "react";
import Navbar from "../shared/Navbar";
import message from "../../assets/images/message.png";
import whatsapp from "../../assets/images/whatsapp.png";
const Banner = () => {
  return (
    <div className="row mx-auto bg-banner">
      <div className="col-11 col-xl-10 mx-auto">
        <div className="row mx-auto">
          <Navbar />
          <div className="col-12 px-0 px-xl-3 col-xl-5 mx-md-0 mx-auto pt-xl-5">
            <h1 className="black mb-0">Super honey from a</h1>
            <h1 className="black">special place</h1>
            <p className="p1 sans black">
              Unique to the unspoiled wild bush of New Zealand, our delicious
              raw Mānuka honey has high levels of MGO, associated with
              antibacterial activity and is 100% traceable.
            </p>
            <button className="btn-yellow border-0 px-3 px-xl-4 py-xl-2 py-xxl-3 py-2 sans">
              SHOP MĀNUKA HONEY
            </button>
          </div>
        </div>
      </div>
      <a
        href="sms:+18664504185&body=Hi%2520there%252C%2520I%2527d%2520like%2520to%2520place%2520an%2520order"
        className="message w-fit p-3 zoom-in"
      >
        <img src={message} height="25" width="25" alt="message_icon" />
      </a>
      <a
        href="whatsapp://send?abid=phonenumber&text=Hi%2C%20there%252C%to%252C%place%252C%an%252C%order"
        className="whatsapp w-fit zoom-in"
      >
        <img src={whatsapp} height="55" width="55" alt="message_icon" />
      </a>
    </div>
  );
};

export default Banner;
