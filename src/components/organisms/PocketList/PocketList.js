import React, { useContext } from 'react';
// Components
import PocketInfo from './../../molecules/PocketInfo/PocketInfo';
import PocketAddition from '../../molecules/PocketAddition/PocketAddition';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Span from '../../atoms/Span/Span';
// Context
import { PocketContext } from '../../../context/PocketContext';
//Styles 
import { StyledContainerPocket, StyledDivMessageReachGoal } from './pocketList.styles';

const PocketList = ({ icon, name, percentage, money}) => {
    
    const { showReachedGoalPocket, renderMessageGoal } = useContext(PocketContext);

    const renderMessageGoalPocket = (renderMessageGoal) => {
        renderMessageGoal === 'reached' ?  <Span>You reached your goal, CONGRATS!!</Span> : <Span>You're close to reach your goal, KEEP GOING!!</Span>
    };
    return (
        <StyledContainerPocket>
        {showReachedGoalPocket && 
            <StyledDivMessageReachGoal>
                {renderMessageGoalPocket(renderMessageGoal)}
                <Span fontSize="title" color="#F9C70C">You reached your goal, CONGRATS!!</Span>
            </StyledDivMessageReachGoal>
        }
            
            <PocketInfo title icon={icon} name={name} percentage={percentage} money={money} />
            <PocketAddition goalPocket={money} />
        </StyledContainerPocket>
    );
};

export default PocketList;
