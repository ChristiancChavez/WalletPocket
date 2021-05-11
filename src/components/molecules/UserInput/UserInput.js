import React from 'react';
// Components
import Input from '../../atoms/Input/Input';
import Icon from '../../atoms/Icon/Icon';
// Styles
import { StyledDivUser } from './UserInput.styles';

const UserInput = ({ name, placeholder }) => {
    return (
        <StyledDivUser>
            <Icon name={name} color="gray" />
            <Input placeholder={placeholder} variantStyle="addition" />
        </StyledDivUser>
    );
};

export default UserInput;
