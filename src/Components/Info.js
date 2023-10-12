import React from "react";

import InfoStyle from "../Components/InfoStyle.module.css";

const Info = () => {
  const info = InfoStyle.info;
  const infoHours = InfoStyle.infoHours;

  return (
    <>
      <div className={info}>
        location:&nbsp; Frisco Tx, Collin, Denton, Hood, Hunt County's
      </div>

      <div className={infoHours}>hours:&nbsp; 7AM - 6PM,</div>
      <div className={infoHours}>
        after hours by appointment:
        <span style={{ fontSize: 18, fontWeight: "bold" }}>
          &nbsp; 214.399.4965
        </span>
      </div>
    </>
  );
};
export default Info;
