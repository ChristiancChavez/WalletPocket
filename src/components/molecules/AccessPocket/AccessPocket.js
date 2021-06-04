import React from 'react';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Span from './../../atoms/Span/Span';
//Styles 
import { StyledDivAccessPocket } from './accessPocket.styles';

const AccessPocket = () => {
    return (
        <StyledDivAccessPocket>
            <Span fontSize="title" weight="category">Pocket</Span>
            <ButtonIcon color="black" name="plus" size="15" />
        </StyledDivAccessPocket>
    );
};

export default AccessPocket;
