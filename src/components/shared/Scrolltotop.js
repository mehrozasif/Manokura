import React, { useState } from "react";

const Scrolltotop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      style={{ display: visible ? "block" : "none" }}
      className="zoom-in scroll-btn border-0"
      onClick={scrollToTop}
    >
      <i className="fa fa-arrow-up"></i>
    </button>
  );
};

export default Scrolltotop;
