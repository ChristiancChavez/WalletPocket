import React from 'react';
// Dependencies
import { func, string }   from 'prop-types';
// Styled Component
import StyledInput from './input.styles'

const Input = ({ placeholder, rest, variantStyle, onchange, type }) => {
    return (
        <StyledInput 
            className={`input ${variantStyle}`} 
            placeholder={placeholder} 
            onChange={onchange} 
            type={type} 
            {...rest} 
        />
    );
};

Input.propTypes = {
    onchange: func,
    variantStyle: string.isRequired,
    placeholder: string.isRequired

}

export default Input;
