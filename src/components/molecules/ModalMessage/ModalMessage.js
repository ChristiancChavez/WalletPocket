import React from 'react';
//Components
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Span from '../../atoms/Span/Span';
import Input from '../../atoms/Input/Input';
//Styles
import { StyledModaliv } from './modalMessage.styles';

const ModalMessage = ({ children, quantity }) => {
    return (
        <StyledModaliv>
            <Span fontSize="message">{children}</Span>
            {quantity && <Input placeholder="Wallet's recharge" type="text"  />}
            <ButtonIcon name="checkmark" size="17" color="green" />
        </StyledModaliv>
    );
};

export default ModalMessage;
