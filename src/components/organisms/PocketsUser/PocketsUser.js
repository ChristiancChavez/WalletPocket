import React from 'react';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
// Components
import PocketList from '../PocketList/PocketList';

//Styles
import { StyledDivPocketsUser, StyledDivButtonShowPockets } from './pocketUser.styles.js';

const PocketsUser = () => {
    return (
        <StyledDivPocketsUser>
        <StyledDivButtonShowPockets>
            <ButtonIcon name="menu" color="black" />
        </StyledDivButtonShowPockets>
            <PocketList icon="airplane" name="Travel to Cartagena" percentage={25} money={1000000} />
            <PocketList icon="airplane" name="Travel to Usa" percentage={50} money={1850000} />
            <PocketList icon="airplane" name="Travel to Italy" percentage={85} money={1023000} />
        </StyledDivPocketsUser>
    );
};

export default PocketsUser;
