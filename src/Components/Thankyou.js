import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import ThankyouStyle from "./Thankyou.module.css";
import Wrapper from "./ui/Wrapper";

const Thankyou = () => {
  const { name } = useParams();
  //   console.log(name);
  const cardWrapper = ThankyouStyle.cardWrapper;
  const innerCardWrapper = ThankyouStyle.innerCardWrapper;
  const cardBody = ThankyouStyle.cardBody;

  return (
    <>
      <Wrapper className="contactBody"></Wrapper>

      <Wrapper className={cardWrapper}>
        <Wrapper className={innerCardWrapper}>
          <Wrapper className={cardBody}>
            <h1>
              Hello <b>{name}</b></h1> Thank you, for contacting us. <br />
              We will be in contact soon!
            
            <Button variant={"warning"} href="/">
              Back to Website
            </Button>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </>
  );
};
export default Thankyou;
