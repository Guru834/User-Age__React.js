import styled from "styled-components";

const Button = styled.button`
  background-color: #0035a2;
  color: white;
  width: 15%;
  height: auto;
  padding: 5px;
  border: none;
  border-radius: 2px;

  &:hover {
    background-color: #00a2ec;
    transition: background-color 0.5s ease-in-out, color 1s ease-in-out;
    cursor: pointer;
    color: black;
  }
`;

export default Button;
