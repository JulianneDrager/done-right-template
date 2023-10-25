import React from "react";
import Header from "../Header/Header";
import Nav from "../ui/Nav";
import Banner from "../Banner/Banner";

import { Container } from "react-bootstrap";
import BeforeAndAfter from "../ComponentOne/CompOne";
import Contact from "../Contact/Contact"; //test
import About from "../About/About";

const Screen = () => {
  return (
    <>
      <Container className="p-0">
        <Nav />
        <Banner />
        <Header />
        <About />
        <BeforeAndAfter />
        <Contact />
      </Container>
    </>
  );
};
export default Screen;
