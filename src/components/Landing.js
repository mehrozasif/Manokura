import React from "react";
import Banner from "./landingsmallcomponents/Banner";
import Brands from "./landingsmallcomponents/Brands";
import Breakfast from "./landingsmallcomponents/Breakfast";
import Honey from "./landingsmallcomponents/Honey";
import Honeyshop from "./landingsmallcomponents/Honeyshop";
import Journey from "./landingsmallcomponents/Journey";
import { Productdetail } from "./landingsmallcomponents/Productdetail";
import Footer from "./shared/Footer";
import { Header } from "./shared/Header";
import Scrolltotop from "./shared/Scrolltotop";
export const Landing = () => {
  return (
    <React.Fragment>
      <Header />
      <Scrolltotop />
      <Banner />
      <Honeyshop />
      <Productdetail />
      <Breakfast />
      <Honey />
      <Brands />
      <Journey />
      <Footer />
    </React.Fragment>
  );
};
