import React from 'react';
// Components
import Span from '../../atoms/Span/Span';
import Quantity from '../../atoms/Quantity/Quantity';
import PocketProgress from './../ProgressPocket/ProgressPocket';
// Styles
import { StyledPocketInfo, StyledMoneyGoal } from './pocketInfo.styles';

const PocketInfo = ({ icon, name, percentage, money }) => {
    return (
        <StyledPocketInfo>
            <PocketProgress icon={icon} progress percentage={percentage} />
            <StyledMoneyGoal>
                <Span fontSize="subtitle" children={name} color="gray" />
                <Quantity children={money} weight="bold" fontSize="20" />
            </StyledMoneyGoal>
        </StyledPocketInfo>
    );
};

export default PocketInfo;
