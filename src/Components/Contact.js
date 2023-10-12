import { useNavigate } from "react-router-dom";

import { Row, Col, Button, Form, Card } from "react-bootstrap";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import ContactStyle from "./Contact.module.css";
import BeforeStyle from "./Before.module.css";
import Wrapper from "./ui/Wrapper";
import InfoFooter from "./InfoFooter";

const Contact = () => {
  const contact = ContactStyle.contact;
  const form = ContactStyle.form;
  const email = ContactStyle.email;
  const name = ContactStyle.name;
  const innerCardWrapper = BeforeStyle.innerCardWrapper;
  const btn = ContactStyle.btn;
  const footer = ContactStyle.footer;
  const contactTitleWrapper = ContactStyle.contactTitleWrapper;
  const cardWrapper = ContactStyle.cardWrapper

  const navigate = useNavigate();
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yqqa4un", //service id 
        "inform-template", //template id (get from settings)
        // console.log("DATA",  refForm.current.name.value),
        refForm.current,
        "-WpB-FImu7bWPZZxl" //public key (get from account page in Email.js)
      )
      .then(
        (result) => {
          //   alert("Message successfully sent!");
          navigate(`thankyou/${refForm.current.name.value}`);
          // window.location.reload(false);
          console.log("result", result);
        },
        (error) => {
          alert("Failed to send the message, please try again");
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Card id="contact" className={innerCardWrapper}>
        <div className={contactTitleWrapper}>
          <Card.Title className={contact}>Book An Appointment</Card.Title>
        </div>
        <Wrapper className={cardWrapper}>
          <Form
            id="contact"
            ref={refForm}
            onSubmit={sendEmail}
            className={form}
            autoComplete="on"
          >
            <Row>
              <Form.Group as={Col} sm={12} md={6} controlId="formGridEmail">
                <Form.Control
                  className={email}
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control
                  className={name}
                  name="name"
                  type="name"
                  placeholder="Enter Name"
                  required
                />
              </Form.Group>
            </Row>

            <Form.Control
              as="textarea"
              name="message"
              type="text"
              rows={3}
              placeholder="Enter Message"
            />
            <Button variant="light" type="submit" value="send" className={btn}>
              SUBMIT
            </Button>
          </Form>
          <InfoFooter/>
        </Wrapper>
      </Card>
      <Card.Text className={footer}>
        © 2023 All Rights Reserved DesigninGlory.com
      </Card.Text>
    </>
  );
};
export default Contact;
