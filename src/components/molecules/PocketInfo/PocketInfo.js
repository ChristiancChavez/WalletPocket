import React from 'react';
// Components
import Span from '../../atoms/Span/Span';
import Quantity from '../../atoms/Quantity/Quantity';
import PocketProgress from '../ProgressPocket/ProgressPocket';
// Styles
import { StyledPocketInfo, StyledMoneyGoal } from './pocketInfo.styles';
import Input from '../../atoms/Input/Input';

const PocketInfo = ({ icon, name, percentage, money, pocket }) => {
    return (
        <StyledPocketInfo>
            <PocketProgress icon={icon} progress percentage={percentage} />
            <StyledMoneyGoal>
            {pocket ?
                (   
                    <>
                        <Input />
                        <Input />
                    </>
                )
                :
                (
                    <>
                        <Span fontSize="subtitle" color="gray">{name}</Span>
                        <Quantity weight="bold" fontSize="20">{money}</Quantity>
                    </>
                )}
            </StyledMoneyGoal>
        </StyledPocketInfo>
    );
};

export default PocketInfo;
