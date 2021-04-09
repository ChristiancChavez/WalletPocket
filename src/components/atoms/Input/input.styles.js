import styled from "styled-components";

const textColor = (props) => {
  if (!props.variantStyle) return "black";
  let textColor;
  switch (props.variantStyle) {
    case "initial":
      textColor = "white";
      break;
    case "pocket":
      textColor = "black";
      break;
    case "addition":
      textColor = "#25265e";
      break;
    default:
      textColor = "black";
  }
  return textColor;
};

const StyledInput = styled.input`
  background: transparent;
  border: none;
  padding: 5px 15px 5px 3px;
  color: ${(props) => textColor(props)};
  border-bottom: 1px solid lightgray;
  outline: none;
  width: 100%;
  font-size: 15px;
  margin: 5px;
`;
export default StyledInput;
