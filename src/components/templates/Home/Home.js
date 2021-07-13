import React from 'react';
//Components
import AccessPocket from '../../molecules/AccessPocket/AccessPocket';
import WalletBalance from '../../organisms/WalletBalance/WalletBalance';
import PocketsUser from './../../organisms/PocketsUser/PocketsUser';
import Span from '../../atoms/Span/Span';
//Styles
import { StyledDivHome } from './Home.styles';

const Home = () => {
    return (
        <StyledDivHome>
            <Span fontSize="titleApp" weight="title" color="white" title>WALLET POCKET</Span>
            <WalletBalance />
            <AccessPocket />
            <PocketsUser />
        </StyledDivHome>
    );
};

export default Home;
