import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import beforeOne from "../images/before-1.jpg";
import afterOne from "../images/after-1.jpg";
import beforeTwo from "../images/before-2.jpg";
import afterTwo from "../images/after-2.jpg";
import beforeThree from "../images/before-3.jpg";
import afterThree from "../images/after-3.jpg";


const Gallery = () => {
  return (
    <Carousel autoPlay swipeable showThumbs={false} showArrows={true} infiniteLoop={true}>
      <div><img alt="Texas side walk before pressure wash" src={beforeOne} /></div>
      <div><img src={afterOne} alt="Texas side walk after pressure wash" /></div>
      <div><img src={beforeTwo} alt="Texas drive way before pressure wash" /></div>
      <div><img src={afterTwo} alt="Texas drive way after pressure wash" /></div>
      <div><img src={beforeThree} alt="Texas house fence before pressure wash" /></div>
      <div><img src={afterThree} alt="Texas house fence after pressure wash" /></div>
    </Carousel>
  );
};
export default Gallery;
