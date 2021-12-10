import React from "react";
import gallery from "./Data/gallery";
import Marquee from "react-fast-marquee";
const Journey = () => {
  return (
    <div className="bg-white py-xl-5 py-3 black text-center">
      <h1 className="moret col-12">Follow the journey</h1>
      <p className="small col-12">@manukorahoney</p>

      <Marquee>
        {gallery.map((item) => (
          <img
            src={item.img}
            className="mx-2"
            width="200px"
            height="200px"
            alt="img"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Journey;
