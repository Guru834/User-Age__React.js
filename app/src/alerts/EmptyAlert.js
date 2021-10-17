import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;
const Container = styled.div`
  width: 62%;
  background-color: white;
  margin: 0 auto;
  border-radius: 5px;
  align-items: center;
  margin-bottom: 30px;
  position: fixed;
  display: flex;
  flex-direction: column;
  margin-top: 20%;
  z-index: 100;
  left: 19%;
`;

const Header = styled.div`
  background-color: red;
  color: white;
  font-weight: 900;
  width: 100%;
  border-radius: 5px 5px 0px 0px;

  & h2 {
    margin: 0;
    padding: 9px;
  }
`;
const Message = styled.div`
  height: auto;
  width: 100%;

  & p {
    margin-bottom: 10%;
    padding-left: 10px;
  }

  & div {
    margin-left: 80%;
    width: 100%;
    margin-bottom: 2%;
  }
`;
const EmptyAlert = (props) => {
  function handleClick() {
    const check = false;
    props.onOkayClick(check);
  }
  return (
    <div>
      <BackDrop onClick={handleClick} />
      <Container>
        <Header>
          <h2>Invalid input</h2>
        </Header>
        <Message>
          <p>{props.title}</p>
          <div>
            <Button onClick={handleClick}>Okay</Button>
          </div>
        </Message>
      </Container>
    </div>
  );
};

export default EmptyAlert;
