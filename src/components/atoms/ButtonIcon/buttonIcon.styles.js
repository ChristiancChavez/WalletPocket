import styled from "styled-components";

const withoutBorder = "none";

const border = (props) => {
  if (!props.border) {
    return withoutBorder;
  }
  return props.border;
};
const borderHover = (props) => {
  if (!props.borderHover) {
    return withoutBorder;
  }
  return props.borderHover;
};

const StyledButonIcon = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  padding: 5px 10px;
  border: ${(props) => border(props)};
  border-radius: 50%;
  margin: 0 3px;
  &:hover {
    border: ${(props) => borderHover(props)};
    background: lightgray;
  }
`;

export default StyledButonIcon;
