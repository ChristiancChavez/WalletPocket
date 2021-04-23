import styled from "styled-components";

const fontSizeDefault = "16px";
const fontWeightDefault = 600;
const fontSize = (props) => {
  if (!props.fontSize) {
    return fontSizeDefault;
  }
  return `${props.fontSize}px`;
};

const fontWeight = (props) => {
  if (!props.weight) {
    return fontWeightDefault;
  }
  return props.weight;
};

const StyledQuantity = styled.span`
  background: transparent;
  color: #25265e;
  font-size: ${(props) => fontSize(props)};
  font-weight: ${(props) => fontWeight(props)};
  margin: 0;
`;

export default StyledQuantity;
