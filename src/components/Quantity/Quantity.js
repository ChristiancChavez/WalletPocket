import React from 'react';
// Styles
import StyledQuantity from './quantity.styles';

const Quantity = ({ children, fontSize, weigth }) => {
    return (
        <StyledQuantity fontSize={fontSize} weigth={weigth}>
            {children}
        </StyledQuantity>
    );
};

export default Quantity;
