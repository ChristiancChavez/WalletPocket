import React from "react";
// Dependencies
import { func, string } from "prop-types";
// Styled Component
import StyledInput from "./input.styles";

const Input = ({ placeholder, rest, variantStyle, onchange, type, size }) => {
  return (
    <StyledInput
      variantStyle={variantStyle}
      placeholder={placeholder}
      onChange={onchange}
      type={type}
      size={size}
      {...rest}
    />
  );
};

Input.propTypes = {
  onchange: func,
  variantStyle: string.isRequired,
  placeholder: string.isRequired,
};
Input.defaultProps = {
  variantStyle: "initial",
};

export default Input;
