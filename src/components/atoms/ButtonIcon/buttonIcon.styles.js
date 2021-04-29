import styled from "styled-components";


const StyledButonIcon = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  margin: 0;
  display: flex;
  align-items: center;
  flex-flow: row;
  justify-content: center;
  &:hover {
    background: lightgray;
  }
`;

export default StyledButonIcon;
