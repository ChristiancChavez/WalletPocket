import React from 'react';
// Components
import PocketInfo from './../../molecules/PocketInfo/PocketInfo';
import PocketAddition from '../../molecules/PocketAddition/PocketAddition';
import ModalMessage from '../../molecules/ModalMessage/ModalMessage';
//Styles 
import { StyledContainerPocket, StyledContainerMessage } from './pocketList.styles';

const PocketList = () => {
    return (
        <StyledContainerPocket>
            <PocketInfo icon="airplane" name="Travel to Cartagena" percentage={25} money={1000000} />
            <PocketAddition />
            <StyledContainerMessage>
                <ModalMessage>¿Are you sure?, You'll remove this pocket</ModalMessage>
            </StyledContainerMessage>
        </StyledContainerPocket>
    );
};

export default PocketList;
