import React from 'react';
// components
import Icon from '../Icon/Icon';
// Styles 
import StyledButonIcon from './buttonIcon.styles';
const ButtonIcon = ({ children, icon }) => {
    return (
        <StyledButonIcon>
            <Icon name={icon} />
            {children}
        </StyledButonIcon>
    );
};

export default ButtonIcon;
