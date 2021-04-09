import React from 'react';
// Components
import Quantity from '../../atoms/Quantity/Quantity';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Input from './../../atoms/Input/Input';
// Styles 
import { StyledContainerAddition, StyledContainerIcons, StyledQuantityAdded } from './pocketAddition.styles';

const PocketAddition = ({ quantity }) => {
    return (
        <StyledContainerAddition>
            <Quantity weigth="900" fontSize="28">{quantity}</Quantity>
            <StyledContainerIcons>
                <ButtonIcon name="coin-dollar" size="20" />
                <ButtonIcon name="bin2" size="20" />
            </StyledContainerIcons>
            <StyledQuantityAdded>
                <Input variantStyle="addition" placeholder="Pocket's recharge" />
                <ButtonIcon name="checkmark" size="20" color="green" />
                <ButtonIcon name="cross" size="16" color="red" />
            </StyledQuantityAdded>
        </StyledContainerAddition>
    );
};

export default PocketAddition;
