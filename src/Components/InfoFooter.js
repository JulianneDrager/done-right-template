import React from "react";
import { Image } from "react-bootstrap";
import cert from "../images/cert.png";
import InfoStyle from "./InfoStyle.module.css";
import instagram from "../images/instagram.png";
import tiktok from "../images/tiktok.png";

const Info = () => {
  const infoFooter = InfoStyle.infoFooter;
  const infoHoursFooter = InfoStyle.infoHoursFooter;
  const icons = InfoStyle.icons;

  const instagramLink =
    "https://www.instagram.com/donerightdonebright/?igshid=MzRlODBiNWFlZA%3D%3D";
  const tiktokLink =
    "https://www.tiktok.com/@kristincollins86?is_from_webapp=1&sender_device=pc";

  return (
    <>
      <div className={infoFooter}>
        location:&nbsp; Frsico TX/Collin & Denton County
      </div>
      <div className={infoHoursFooter}>hours:&nbsp; 7AM - 6PM,</div>
      <div className={infoHoursFooter}>
        after hours by appointment:{" "}
        <span style={{ fontSize: 18, fontWeight: "bold" }}>
          &nbsp; 214.399.4965
        </span>
        
        <div className={icons}>
          <a href={instagramLink}>
            <Image src={instagram} alt="Done Right Done Bright Instagram" width={50}></Image>
          </a>
          <Image src={cert}  alt="exterior cleaning certificate" width={80} />
          <a href={tiktokLink}>
            <Image src={tiktok} alt="Done Right Done Bright Tiktok" width={50}></Image>
          </a>
        </div>
      </div>
    </>
  );
};
export default Info;
