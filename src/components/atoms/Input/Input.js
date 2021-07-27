import React from "react";
// Dependencies
import { func, string } from "prop-types";
// Styled Component
import StyledInput from "./input.styles";

const Input = ({ placeholder, rest, variantStyle, type, onChange}) => {

  const handleInput = (e) => {
    onChange(e);
  }

  return (
    <StyledInput
      variantStyle={variantStyle}
      placeholder={placeholder}
      onChange={handleInput}
      type={type}
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
