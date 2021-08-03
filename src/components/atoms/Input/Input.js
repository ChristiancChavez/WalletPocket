import React from "react";
// Dependencies
import { func, string } from "prop-types";
// Styled Component
import StyledInput from "./input.styles";

const Input = ({ placeholder, rest, variantStyle, type, onChange, value}) => {

  return (
    <StyledInput
      variantStyle={variantStyle}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      value={value}
      {...rest}
    />
  );
};

Input.propTypes = {
  onchange: func,
  variantStyle: string.isRequired,
  placeholder: string.isRequired,
  type: string,
};
Input.defaultProps = {
  variantStyle: "initial",
  type: "text"
};

export default Input;
