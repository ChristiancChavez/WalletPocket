import React from 'react';
// components
import Icon from '../Icon/Icon';
// Styles 
import StyledButonIcon from './buttonIcon.styles';
import IconsCollection from '../../../Helpers/IconsCollection';
const ButtonIcon = ({ name }) => {
    return (
        <StyledButonIcon>
            <IconsCollection />
            <Icon name={name} />
        </StyledButonIcon>
    );
};

export default ButtonIcon;
