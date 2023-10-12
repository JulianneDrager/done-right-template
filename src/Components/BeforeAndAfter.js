import React from "react";
import { Card, Image } from "react-bootstrap";
import Gallery from "../Components/Gallery";
import PowerTool from "../images/power-washer.svg";
import BeforeStyle from "./Before.module.css";
import "./style.css";
import Wrapper from "./ui/Wrapper";
import Divider from "../images/divider-03.svg";
import DividerLarge from "../images/divider-04.svg";

const BeforeAndAfter = () => {
  const innerCardWrapper = BeforeStyle.innerCardWrapper;
  const cardBody = BeforeStyle.cardBody;
  const right = BeforeStyle.right;
  const bright = BeforeStyle.bright;
  const powerWasher = BeforeStyle.powerWasher;
  const iconWrapper = BeforeStyle.iconWrapper;
  const divide = BeforeStyle.divide;
  const divideLarge = BeforeStyle.divideLarge;

  return (
    <>
      <div>
      <Image src={PowerTool} className={powerWasher} />
        <div className={iconWrapper}>
          <Card.Title className={right}>
            We Do It <em>Right</em>
          </Card.Title>
          <Card.Title className={bright}>
            We Do It <em>Bright</em>
          </Card.Title>
        </div>
        <Wrapper className={innerCardWrapper}>
          <Wrapper className={cardBody}>
            <hr />
            <Gallery autoPlay/>
            <Image src={Divider} className={divide} />
            <Image src={DividerLarge} className={divideLarge} />
          </Wrapper>
        </Wrapper>
      </div>
    </>
  );
};
export default BeforeAndAfter;
