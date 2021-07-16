import React from 'react';
// Components
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
//Styles
import { StyledAccess } from './AccessHome.styles';

const AccessHome = ({ onClick }) => {
    return (
        <StyledAccess>
            <ButtonIcon onClick={onClick} name="user-plus" color="black" size="25" /> 
        </StyledAccess>
    );
};

export default AccessHome;
