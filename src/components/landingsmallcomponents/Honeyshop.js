import React from "react";
import products from "./Data/products";
const Honeyshop = () => {
  return (
    <div className="row mx-auto bg-white py-5 my-4">
      <div className="col-xl-10 mx-auto">
        <div className="row mx-auto">
          <h1 className="moret col-12 mb-0 text-center">Shop Mānuka Honey</h1>
          {products.map((product) => (
            <div className="col-xl-3 col-6 mb-3 mx-auto">
              <div class="product my-2 my-xl-3">
                <img
                  src={product.product}
                  className="h-100 w-100"
                  alt="product1"
                />
                <div class="content">
                  <div class="text">
                    <button class="btn-yellow border-0 px-3 px-xl-5 py-xl-2 py-xxl-3 py-2 sans">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-center mb-1 f-30">{product.name}</p>
              <p className="text-center sans mb-2 mt-0 f-30">{product.type}</p>
              <p className="text-center sans my-1 f-30">{product.price}</p>
              <div className="d text-center">
                {[...Array(product.rate)].map((el, index) => (
                  <i className="fa fa-star yellow" key={index}></i>
                ))}
                <span> ({product.reviews})</span>
              </div>
            </div>
          ))}
          <div className="col-12 text-center mt-xl-5 mt-2">
            <button class="btn-yellow border-0 px-3 px-xl-4 py-xl-2 py-xxl-3 py-2 sans zoom-in">
              SHOP THE MANUKORA RANGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Honeyshop;
