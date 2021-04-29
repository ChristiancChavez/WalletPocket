import React from "react";
// Dependencies
import PropTypes from "prop-types";
// Components
import { StyledSvg, StyledDiv } from "./icon.styles";
import IconsCollection from "../../../Helpers/IconsCollection";

const Icon = ({ name, position, size, color, marginTop, onClick = () => {} }) => (
  <StyledDiv marginTop={marginTop}>
    <StyledSvg onClick={onClick} position={position} size={size} color={color} >
      <IconsCollection />
      <use xlinkHref={`#icon-${name}`} />
    </StyledSvg>
  </StyledDiv>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  position: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default Icon;
