import React from "react";
import BannerStyle from "./BannerStyle.module.css";

const Banner = () => {
  const bannerBox = BannerStyle.bannerBox;
  return (
    <>
      <div className={bannerBox}>
        List Services Offered Here
      </div>
    </>
  );
};
export default Banner;
