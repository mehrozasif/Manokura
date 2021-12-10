import React from "react";
import brandData from "./Data/brandData";
const Brands = () => {
  return (
    <div className="row mx-auto bg-skin py-xxl-5 py-xl-4 py-3 justify-content-center">
      {brandData.map((item) => (
        <div className="col-xl-1 col-3 text-center px-0">
          <img src={item.product} width="50px" height="50px" alt="brand_icon" />
          <p className="small sans black mb-0 mt-2">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Brands;
