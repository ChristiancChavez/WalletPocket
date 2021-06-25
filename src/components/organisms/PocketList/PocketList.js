import React from 'react';
// Components
import PocketInfo from './../../molecules/PocketInfo/PocketInfo';
import PocketAddition from '../../molecules/PocketAddition/PocketAddition';
import ModalMessage from '../../molecules/ModalMessage/ModalMessage';
//Styles 
import { StyledContainerPocket, StyledContainerMessage } from './pocketList.styles';

const PocketList = ({ icon, name, percentage, money}) => {
    return (
        <StyledContainerPocket>
            <PocketInfo icon={icon} name={name} percentage={percentage} money={money} />
            <PocketAddition />
            <StyledContainerMessage>
                <ModalMessage>¿Are you sure?, You'll remove this pocket</ModalMessage>
            </StyledContainerMessage>
        </StyledContainerPocket>
    );
};

export default PocketList;
