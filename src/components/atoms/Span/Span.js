import React from 'react';

const Span = ({ children, fontSize, weight, color }) => {
    return (
        <span 
            fontSize={fontSize}
            weight={weight}
            color={color}
        >
            {children}
        </span>
    );
};

export default Span;
