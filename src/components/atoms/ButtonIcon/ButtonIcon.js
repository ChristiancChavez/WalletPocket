import React from "react";
// components
import Icon from "../Icon/Icon";
// Styles
import StyledButonIcon from "./buttonIcon.styles";
import IconsCollection from "../../../Helpers/IconsCollection";
const ButtonIcon = ({ name, size, color, onClick }) => {
  return (
    <StyledButonIcon>
      <IconsCollection />
      <Icon name={name} size={size} color={color} onClick={onClick} />
    </StyledButonIcon>
  );
};

export default ButtonIcon;
