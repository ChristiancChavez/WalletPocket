import React from "react";
// Dependencies
import PropTypes from "prop-types";
// Components
import StyledSvg from "./icon.styles";
import IconsCollection from "../../../Helpers/IconsCollection";

const Icon = ({ name, position,  onClick = () => {} }) => (
  <StyledSvg onClick={onClick} position={position}>
    <IconsCollection />
    <use xlinkHref={`#icon-${name}`} />
  </StyledSvg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  position: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Icon;
