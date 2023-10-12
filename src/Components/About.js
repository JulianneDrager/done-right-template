import React from "react";
import { Card, ListGroup } from "react-bootstrap";
// import Placeholder from "../images/placeholder.svg";
import profilePicture from "../images/about_profile_pic.jpg";

import AboutStyle from "./About.module.css";
import Wrapper from "./ui/Wrapper";
import useMediaQuery from "./UseMediaQuery";

const About = () => {
  const matchesSm = useMediaQuery("(max-width: 768px)");

  const innerCardWrapper = AboutStyle.innerCardWrapper;
  const cardBody = AboutStyle.cardBody;
  const aboutUsImg = AboutStyle.aboutUsImg;
  const aboutTitle = AboutStyle.aboutTitle;
  const subText = AboutStyle.subText;
  const subTextOffer = AboutStyle.subTextOffer;
  const cardWrapper = AboutStyle.cardWrapper;
  const aboutTitleWrapper = AboutStyle.aboutTitleWrapper;
  const emTitle = AboutStyle.emTitle;
  const listGroup = AboutStyle.listGroup;

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
                <Card.Img
                  src={profilePicture}
                  alt="pressure washing marital business"
                  className={[aboutUsImg]}
                />
              </figure>
              <Card.Text className={subText}>
                Meet Jeramy and Kristin Davis, the devoted couple of a local
                power washing business in Texas, dedicated to providing
                exceptional service to their community.
              </Card.Text>
              <Card.Text className={subText}>
                This dynamic duo has a strong foundation of excellence.
                Meticulous, with passion and professionalism with a dedicated
                commitment to prioritizing community involvement. They believe
                in the power of positive impact and are grateful for the
                opportunity to serve.
              </Card.Text>
              <Card.Text className={subText}>
                <em>
                  "We take pride in our ability to build strong relationships,
                  treating every job as our own, with compassion and precision.
                  With the end goal to experience your smile of a job well done"
                </em>
              </Card.Text>

              <hr />
              <Card.Text className={subTextOffer}>
                We offer a range of
              </Card.Text>
              <Card.Text className={subTextOffer}>
                Pressure Washing services:
              </Card.Text>
              <ListGroup className={listGroup}>
                <ListGroup.Item>Deck</ListGroup.Item>
                <ListGroup.Item>Driveway</ListGroup.Item>
                <ListGroup.Item>Exterior House</ListGroup.Item>
                <ListGroup.Item>Exterior Windows</ListGroup.Item>
              </ListGroup>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </div>
    </>
  );
};
export default About;
