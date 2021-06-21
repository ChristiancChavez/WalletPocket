import React from 'react';
import AccessHome from '../../molecules/AccessHome/AccessHome';
//Componentes
import UserInput from './../../molecules/UserInput/UserInput';
// Styles
import { StyledDivLogin } from './Login.styles';

const Login = () => {
    return (
        <StyledDivLogin>
            <UserInput name="coin-dollar" placeholder="Type your name" />
            <UserInput name="wallet" placeholder="Type your wallet's amount" />
            <AccessHome />
        </StyledDivLogin>
    );
};

export default Login;
