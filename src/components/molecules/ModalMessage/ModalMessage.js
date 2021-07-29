import React from 'react';
//Components
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Span from '../../atoms/Span/Span';
import Input from '../../atoms/Input/Input';
//Styles
import { StyledModaliv, StyledButtons } from './modalMessage.styles';

const ModalMessage = ({ children, quantity, onChange, onClick }) => {
    return (
        <StyledModaliv>
            <Span fontSize="message">{children}</Span>
            {quantity && <Input variantStyle='addition' onChange={onChange} placeholder="Wallet's recharge" type="text"  />}
            <StyledButtons>
                <ButtonIcon onClick={onClick} name="checkmark" size="17" color="green" />
                <ButtonIcon name="cross" size="17" color="red" />
            </StyledButtons>
        </StyledModaliv>
    );
};

export default ModalMessage;
