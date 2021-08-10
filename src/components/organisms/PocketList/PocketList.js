import React, { useContext } from 'react';
// Components
import PocketInfo from './../../molecules/PocketInfo/PocketInfo';
import PocketAddition from '../../molecules/PocketAddition/PocketAddition';
//Context
import { PocketContext } from '../../../context/PocketContext';
//Styles 
import { StyledContainerPocket } from './pocketList.styles';

const PocketList = ({ icon, name, percentage, money}) => {

    const { percentagePocket } = useContext(PocketContext);
    return (
        <StyledContainerPocket >
            <PocketInfo title icon={icon} name={name} percentage={percentagePocket} money={money} />
            <PocketAddition goalPocket={money} />
        </StyledContainerPocket>
    );
};

export default PocketList;
