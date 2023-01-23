import styled from "styled-components";


const CARD = styled.div`
  height: calc(15rem + 12vw);
  width: calc(16rem + 12vw);
  background-color: none;
  border-radius: 20px;
  position: relative;
  margin-top: calc(5rem + 5vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    transition: all 0.6s;
    transform: scale(1.3);
  }
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`;



const Card = ({ name, text, image }) => {
  const Avatar = require(`../../assets/${image}.png`).default;

  return (
    <CARD>
      <Image img={Avatar} width="400" height="400" />
    </CARD>
  );
};

export default Card;
