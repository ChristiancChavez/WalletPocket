import React from 'react';
// Components
import PocketInfo from './../../molecules/PocketInfo/PocketInfo';
import PocketAddition from '../../molecules/PocketAddition/PocketAddition';
//Styles 
import { StyledContainerPocket } from './pocketList.styles';

const PocketList = ({ icon, name, percentage, money}) => {
    return (
        <StyledContainerPocket>
            <PocketInfo title icon={icon} name={name} percentage={percentage} money={money} />
            <PocketAddition goalPocket={money} />
        </StyledContainerPocket>
    );
};

export default PocketList;
