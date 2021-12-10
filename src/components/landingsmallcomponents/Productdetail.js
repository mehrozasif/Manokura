import React from "react";
import ProductDetailData from "./Data/ProductDetailData";
export const Productdetail = () => {
  return (
    <div className="row mx-auto">
      <div className="col-xl-8 col-xxl-7 mx-auto">
        {ProductDetailData.map((item, index) => (
          <div
            key="index"
            className={`row mx-auto mb-xl-5 my-2 ${
              index === 1 ? "row-reverse" : ""
            }`}
          >
            <div className="col-lg my-auto">
              <h1 className="moret">{item.name}</h1>
              <p className="sans">{item.detail} </p>
              <p className="sans">
                <u>{item.more}</u>
              </p>
            </div>
            <div className="col-lg">
              <img src={item.product} className="w-100" alt="product_icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
