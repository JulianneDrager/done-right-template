import React from "react";

import InfoStyle from "./InfoStyle.module.css";

const Info = () => {
  const info = InfoStyle.info;
  const infoHours = InfoStyle.infoHours;

  return (
    <>
      <div className={info}>
        location:&nbsp; 1600 Pennsylvania Avenue NW, Washington, DC 20500
      </div>

      <div className={infoHours}>hours:&nbsp; 9AM - 5PM,</div>
      <div className={infoHours}>
        after hours by appointment:
        <span style={{ fontSize: 18, fontWeight: "bold" }}>
          &nbsp; 555.555.5555
        </span>
      </div>
    </>
  );
};
export default Info;
