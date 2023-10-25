import React from "react";
import { Card, Image } from "react-bootstrap";
import Gallery from "../Gallery/Gallery";
import PowerTool from "../../images/power-washer.svg";
import ComponentOne from "./CompOne.module.css";
import "../../../src/Components/Styling/style.css";
import Wrapper from "../ui/Wrapper";
import Divider from "../../images/divider-03.svg";
import DividerLarge from "../../images/divider-04.svg";

const CompOne = () => {
  const class1 = ComponentOne.class1;
  const class2 = ComponentOne.class2;
  const class3 = ComponentOne.class3;
  const class4 = ComponentOne.class4;
  const powerWasher = ComponentOne.powerWasher;
  const iconWrapper = ComponentOne.iconWrapper;
  const divide = ComponentOne.divide;
  const divideLarge = ComponentOne.divideLarge;

  return (
    <>
      <div>
        <Image src={PowerTool} className={powerWasher} />
        <div className={iconWrapper}>
          <Card.Title id="Hello World" className={class3}>
            We Do It <em>class3</em>
          </Card.Title>
          <Card.Title className={class4}>
            We Do It <em>class4</em>
          </Card.Title>
        </div>
        <Wrapper className={class1}>
          <Wrapper className={class2}>
            <hr />
            <Gallery autoPlay />
            <Image src={Divider} className={divide} />
            <Image src={DividerLarge} className={divideLarge} />
          </Wrapper>
        </Wrapper>
      </div>
    </>
  );
};
export default CompOne;
