import React from "react";
import { Card, Button, Image } from "react-bootstrap";
import Logo from "../images/logo-large.jpg";
import HeaderStyle from "./Header.module.css";
import Wrapper from "./ui/Wrapper";
import Divider from "../images/divider-03.svg";
import DividerLarge from "../images/divider-04.svg";
import Info from "./Info";

const Header = () => {
  const cardWrapper = HeaderStyle.cardWrapper;
  const innerCardWrapper = HeaderStyle.innerCardWrapper;
  const cardBody = HeaderStyle.cardBody;
  const logo = HeaderStyle.logo;
  const slogin = HeaderStyle.slogin;
  const subText = HeaderStyle.subText;
  const smSubText = HeaderStyle.smSubText;
  const btn = HeaderStyle.btn;
  const divide = HeaderStyle.divide;
  const divideLarge = HeaderStyle.divideLarge;
  const exteriorText = HeaderStyle.exteriorText;
  const hr = HeaderStyle.hr;
  const servicesWrapper = HeaderStyle.servicesWrapper;

  return (
    <>
      <Wrapper className={cardWrapper}>
        <Wrapper className={innerCardWrapper}>
          <Info />
          <Wrapper className={cardBody}>
            <Card.Img src={Logo} alt="Done Bright Done Right LLC" className={logo} />
            <Card.Title className={slogin}>
              Done Right <br /> Done Bright LLC
            </Card.Title>
            <hr className={hr} />
            <em className={exteriorText}>Exterior Cleaning Services</em>
            <Card.Text className={subText}>
              Welcome to our family-owned and operated pressure washing
              business! We're a husband and wife team ready to serve you! &nbsp;
              <span className={servicesWrapper}>
                <em>
                  Our passion is to provide top-quality pressure washing
                  services local to the surrounding areas of Frisco Texas.
                </em>
              </span>
            </Card.Text>
            <Card.Text className={smSubText}>
              At Done Right Done Bright LLC, we understand the importance of
              maintaining a clean and presentable property. We are a faithful
              small business passionate about combining professionalism, skill, and
              community spirit. Whether you're a homeowner or business owner,
              we're here to make your property shine.
            </Card.Text>
            <Button
              href="#contact"
              className={btn}
            >
              CONTACT US TODAY
            </Button>
          </Wrapper>
        </Wrapper>
      </Wrapper>
      <Image src={Divider} className={divide} />
      <Image src={DividerLarge} className={divideLarge} />
    </>
  );
};
export default Header;

// created wrapper to over ride bootstrap Card to solve background issue - I wanred
// transparent white but bootstrap bg-color over rode, as Card wrapped arround my Wrapper,
// this still prevented style change
