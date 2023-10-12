import React from "react";
import BannerStyle from "./BannerStyle.module.css";

const Banner = () => {
  const bannerBox = BannerStyle.bannerBox;
  return (
    <>
      <div className={bannerBox}>
        Now offering make ready services! Move in/move out interior cleaning
      </div>
    </>
  );
};
export default Banner;
