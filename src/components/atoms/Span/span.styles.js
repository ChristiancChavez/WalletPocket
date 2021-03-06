import styled from "styled-components";

const textSize = (props) => {
  if (!props.fontSize) {
    return "15px";
  }

  let spanText;
  switch (props.fontSize) {
    case "user":
      spanText = "17px";
      break;
    case "category":
      spanText = "18px";
      break;
    case "message":
      spanText = "19px";
      break;
    case "title":
      spanText = "20px";
      break;
    case "subtitle":
      spanText = "18px";
      break;
      case "titleApp":
      spanText = "40px";
      break;
    default:
      spanText = "15px";
  }
  return spanText;
};

const textMargin = (props) => {
  if (!props.margin) {
    return "0";
  }
  return `${props.margin}px`;
}

const textColor = (props) => {
  if (!props.color) {
    return "black";
  }
  return props.color;
};

const textWeight = (props) => {
  if (!props.weight) {
    return 600;
  }

  let spanWeight;
  switch (props.weight) {
    case "category":
      spanWeight = 700;
      break;
    case "title":
      spanWeight = 800;
      break;
    default:
      spanWeight = 600;
  }
  return spanWeight;
};

export const StyledSpan = styled.span`
  font-size: ${(props) => textSize(props)};
  color: ${(props) => textColor(props)};
  font-weight: ${(props) => textWeight(props)};
  margin-top: ${(props) => textMargin(props)}
`
export const StyledAnchor = styled.a`
  font-size: ${(props) => textSize(props)};
  color: ${(props) => textColor(props)};
  font-weight: ${(props) => textWeight(props)};
  margin-bottom: ${(props) => textMargin(props)};
`
