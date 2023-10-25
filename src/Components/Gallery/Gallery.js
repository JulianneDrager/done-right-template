import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import beforeOne from "../../images/before-1.jpg";
// import afterOne from "../../images/after-1.jpg";
// import beforeTwo from "../../images/before-2.jpg";
// import afterTwo from "../../images/after-2.jpg";
// import beforeThree from "../../images/before-3.jpg";
// import afterThree from "../../images/after-3.jpg";


const Gallery = () => {
  return (
    <Carousel autoPlay swipeable showThumbs={false} showArrows={true} infiniteLoop={true}>
      <div><img src="https://source.unsplash.com/random" alt="Random IMG Placeholder" /></div>
      <div><img src="https://source.unsplash.com/random" alt="Random IMG Placeholder" /></div>
      <div><img src="https://source.unsplash.com/random" alt="Random IMG Placeholder" /></div>
      <div><img src="https://source.unsplash.com/random" alt="Random IMG Placeholder" /></div>
      <div><img src="https://source.unsplash.com/random" alt="Random IMG Placeholder" /></div>
      <div><img src="https://source.unsplash.com/random" alt="Random IMG Placeholder" /></div>
    </Carousel>
  );
};
export default Gallery;
