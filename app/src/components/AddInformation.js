import React, { useState } from "react";
import styled from "styled-components";
import EmptyAlert from "../alerts/EmptyAlert";
import Button from "./Button";
import Input from "./Input";

const Container = styled.div`
  width: 60%;
  background-color: grey;
  margin: 0 auto;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-bottom: 30px;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;

  & label {
    font-weight: 800;
    margin-bottom: 5px;
  }
  & Button {
    margin-top: 10px;
  }
`;

const AddInformation = (props) => {
  const { onSaveInformation } = props;
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState(0);
  const [alert, setAlert] = useState();
  let newAge = age;

  function handleUserInput(event) {
    event.preventDefault();

    if (username.trim().length === 0) {
      setAlert({
        title: "Please enter a username",
      });
    } else if (age.trim().length === 0) {
      setAlert({
        title: "Please enter a age",
      });
    } else if (age < 0) {
      setAlert({
        title: "The age can not be smaller than 0",
      });
    } else {
      if (age > 100) {
        newAge = 99;
      }
      setId((prevstate) => prevstate + 1);
      const userInfo = {
        id: id,
        username: username,
        age: newAge,
      };
      onSaveInformation(userInfo);
      setUsername("");
      setAge("");
    }
  }
  function handleClick(click) {
    setAlert(click);
  }
  return (
    <Container>
      {alert && <EmptyAlert onOkayClick={handleClick} title={alert.title} />}
      <UserInfo>
        <label>Username</label>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </UserInfo>
      <UserInfo>
        <label>Age (Years)</label>
        <Input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Button onClick={handleUserInput}>Add User</Button>
      </UserInfo>
    </Container>
  );
};

export default AddInformation;
