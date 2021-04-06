import React from "react";
// components
import Icon from "../Icon/Icon";
// Styles
import StyledButonIcon from "./buttonIcon.styles";
import IconsCollection from "../../../Helpers/IconsCollection";
const ButtonIcon = ({ name, border, borderHover }) => {
  return (
    <StyledButonIcon border={border} borderHover={borderHover}>
      <IconsCollection />
      <Icon name={name} />
    </StyledButonIcon>
  );
};

export default ButtonIcon;
