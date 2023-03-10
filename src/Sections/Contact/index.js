import Facebook from "../../assets/facebook-square-brands.svg";
import LinkedId from "../../assets/linkedin-brands.svg";
import Twitter from "../../assets/twitter-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import styled from "styled-components";

const ContactSection = styled.section`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: #1A120B;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #E5E5CB;
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid #E5E5CB;
  }
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  a {
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
          brightness(100%) contrast(97%);
      }
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: #3C2A21;
    border: none;
    border-radius: 4px;
    color: #D5CEA3;
    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: rgba(60, 42, 33, 0.8);
    }
    &::placeholder {
      color: rgba(213, 206, 163, 0.8);
      opacity: 0.6;
    }
    &[name="name"] {
      margin-right: 2rem;
    }
  }
  textarea {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: #3C2A21;
    border: none;
    border-radius: 4px;
    color: #D5CEA3;
    margin-bottom: 2rem;
    &:focus,
    &:active {
      background-color: rgba(60, 42, 33, 0.8);
    }
    &::placeholder {
      color: rgba(213, 206, 163, 0.8);
      opacity: 0.6;
    }
  }
  button {
    padding: 0.8rem 2rem;
    background-color: #D5CEA3;
    border-radius: 20px;
    font-size: 1.2rem;
    color: #0a0b10;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

const Row = styled.div`
  @media only Screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;
    input {
      &[name="name"] {
        margin-right: 0;
      }
    }
  }
`;
const Contact = () => {
  return (
    <ContactSection id="contact">
      <Title>Get in touch</Title>
      {/* <Text>Lorem ipsum dolor sit amet, consectetur adipisicing.</Text> */}
      <Icons>
        <a href="https://www.facebook.com/">
          {" "}
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com//">
          <img src={LinkedId} alt="LinkedId" />
        </a>
        <a href="https://twitter.com/">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={Instagram} alt="Instagram" />
        </a>
      </Icons>
      <Form>
        <Row>
          <input name="name" type="text" placeholder="your name" />
          <input
            name="email"
            type="email"
            placeholder="enter working email id"
          />
        </Row>
        <textarea
          name=""
          id=""
          cols="30"
          rows="2"
          placeholder="your message"
        ></textarea>
        <div style={{ margin: "0 auto" }}>
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Submit
          </button>
        </div>
      </Form>
    </ContactSection>
  );
};

export default Contact;
