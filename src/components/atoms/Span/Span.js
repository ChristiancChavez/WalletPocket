import React from 'react';
// Styles
import StyledSpan from './span.styles';

const Span = ({ children, fontSize, weight, color }) => {
    return (
        <StyledSpan 
            fontSize={fontSize}
            weight={weight}
            color={color}
        >
            {children}
        </StyledSpan>
    );
};

export default Span;
