import React from 'react';
//Componentes
import UserInput from './../../molecules/UserInput/UserInput';
// Styles
import { StyledDivLogin } from './Login.styles';

const Login = () => {
    return (
        <StyledDivLogin>
            <UserInput name="user-plus" placeholder="Type your name" />
            <UserInput name="wallet" placeholder="Type your wallet's amount" />
        </StyledDivLogin>
    );
};

export default Login;
