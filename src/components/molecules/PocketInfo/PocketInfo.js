import React from 'react';
// Components
import Span from '../../atoms/Span/Span';
import Icon from '../../atoms/Icon/Icon';
// Styles
import { StyledPocketInfo, StyledMoneyGoal } from './pocketInfo.styles';

const PocketInfo = () => {
    return (
        <StyledPocketInfo>
            <Span fontSize="subtitle" children="Parties" />
            <StyledMoneyGoal>
                <Icon name="glass2" />
                <Span children="200.000" />
            </StyledMoneyGoal>
        </StyledPocketInfo>
    );
};

export default PocketInfo;
