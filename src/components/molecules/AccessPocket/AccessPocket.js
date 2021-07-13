import React from 'react';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Span from './../../atoms/Span/Span';
//Styles 
import { StyledDivAccessPocket } from './accessPocket.styles';
//Router 
import { Link } from "react-router-dom";

const AccessPocket = () => {
    return (
        <StyledDivAccessPocket>
            <Span fontSize="title" weight="title">Pocket</Span>
            <Link to="/create" >
                <ButtonIcon color="black" name="plus" size="19" />
            </Link>
        </StyledDivAccessPocket>
    );
};

export default AccessPocket;
