import React from "react";
import styled from "styled-components";
import { ImCross } from "react-icons/im";

const Container = styled.div`
  width: 60%;
  background-color: grey;
  margin: 0 auto;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
`;
const DisplayInfo = styled.div`
  width: 100%;
  border: 1px solid black;
  margin: 10px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: white;

  & span {
    padding: 10px;
  }
`;
const Icon = styled.span`
  position: absolute;
  top: 2px;
  right: 4px;
  &:hover {
    color: purple;
    transition: color 0.4s ease-in-out;
    cursor: pointer;
  }
`;
const DisplayInformation = (props) => {
  const { username, age, id, onDeleteHandler } = props;

  function handleDelete() {
    onDeleteHandler(id);
  }
  return (
    <Container>
      <DisplayInfo>
        <span>
          {username} ({age} Years old)
        </span>
        <Icon onClick={handleDelete}>
          <ImCross />
        </Icon>
      </DisplayInfo>
    </Container>
  );
};

export default DisplayInformation;
