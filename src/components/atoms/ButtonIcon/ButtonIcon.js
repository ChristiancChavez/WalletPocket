import React from "react";
// components
import Icon from "../Icon/Icon";
// Styles
import StyledButonIcon from "./buttonIcon.styles";
import IconsCollection from "../../../Helpers/IconsCollection";
const ButtonIcon = ({ name, size, color, onClick }) => {
  return (
    <StyledButonIcon onClick={onClick}>
      <IconsCollection />
      <Icon name={name} size={size} color={color} />
    </StyledButonIcon>
  );
};

export default ButtonIcon;
