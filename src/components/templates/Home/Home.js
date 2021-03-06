import React from 'react';
//Components
import AccessPocket from '../../molecules/AccessPocket/AccessPocket';
import WalletBalance from '../../organisms/WalletBalance/WalletBalance';
import PocketsUser from './../../organisms/PocketsUser/PocketsUser';
//Styles
import { StyledDivHome } from './Home.styles';

const Home = () => {
    return (
        <StyledDivHome>
            <WalletBalance />
            <AccessPocket />
            <PocketsUser />
        </StyledDivHome>
    );
};

export default Home;
