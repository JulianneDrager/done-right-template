import React from "react";
import { Card, ListGroup } from "react-bootstrap";
// import profilePicture from "../../images/about_profile_pic.jpg"

import aboutStyle from "./About.module.css";
import Wrapper from "../ui/Wrapper";
import useMediaQuery from "../UseMediaQuery/UseMediaQuery";

const About = () => {
  const matchesSm = useMediaQuery("(max-width: 768px)");

  const innerCardWrapper = aboutStyle.innerCardWrapper;
  const cardBody = aboutStyle.cardBody;
  // const aboutImg = aboutStyle.aboutImg;
  const aboutTitle = aboutStyle.aboutTitle;
  const subText = aboutStyle.subText;
  const subTextOffer = aboutStyle.subTextOffer;
  const cardWrapper = aboutStyle.cardWrapper;
  const aboutTitleWrapper = aboutStyle.aboutTitleWrapper;
  const emTitle = aboutStyle.emTitle;
  const listGroup = aboutStyle.listGroup;

  return (
    <>
      <div id="about">
        <Wrapper className={cardWrapper}>
          <div className={aboutTitleWrapper}>
            {matchesSm ? (
              <Card.Title className={aboutTitle}>
                <div className={emTitle}>
                  Proudly <br /> Family Owned
                </div>
              </Card.Title>
            ) : (
              <Card.Title className={aboutTitle}>
                <div className={emTitle}>Proudly Family Owned</div>
              </Card.Title>
            )}
          </div>
          <Wrapper className={innerCardWrapper}>
            <Wrapper className={cardBody}>
              <figure>
                {/* <Card.Img
                  src={profilePicture}
                  alt="pressure washing marital business"
                  className={[aboutImg
                  ]}
                /> */}
                <div><img src="https://source.unsplash.com/random" alt="Random IMG Placeholder" /></div>
              </figure>
              <Card.Text className={subText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Card.Text>
              <hr />
              <Card.Text className={subTextOffer}>
                Services
              </Card.Text>
              <Card.Text className={subTextOffer}>
                Offered:
              </Card.Text>
              <ListGroup className={listGroup}>
                <ListGroup.Item>Service 1</ListGroup.Item>
                <ListGroup.Item>Service 2</ListGroup.Item>
                <ListGroup.Item>Service 3</ListGroup.Item>
                <ListGroup.Item>Service 4</ListGroup.Item>
              </ListGroup>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </div>
    </>
  );
};
export default About;
