import React from "react";
import { Card, Button, Image } from "react-bootstrap";
import Logo from "../../images/logo-large.jpg";
import HeaderStyle from "./Header.module.css";
import Wrapper from "../ui/Wrapper";
import Divider from "../../images/divider-03.svg";
import DividerLarge from "../../images/divider-04.svg";
import Info from "../Info/Info";

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
              Title Text 1 <br /> Title Text 2
            </Card.Title>
            <hr className={hr} />
            <em className={exteriorText}>Services Offered Here</em>
            <Card.Text className={subText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&nbsp;
              <span className={servicesWrapper}>
                {/* <em>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </em> */}
              </span>
            </Card.Text>
            <Card.Text className={smSubText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
