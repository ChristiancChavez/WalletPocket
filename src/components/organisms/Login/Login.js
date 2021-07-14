import React, { useContext } from 'react';
//Componentes
import UserInput from './../../molecules/UserInput/UserInput';
//Context
import { PocketContext } from '../../../context/PocketContext';
// Styles
import { StyledDivLogin } from './Login.styles';

const Login = () => {

    const { setUserNameWallet, setInitialAmount } = useContext(PocketContext);

    return (
        <StyledDivLogin>
            <UserInput name="profile" placeholder="Type your name" onChange={(e) => setUserNameWallet(e.target.value)} />
            <UserInput name="wallet" placeholder="Type your wallet's amount" onChange={(e) => setInitialAmount(e.target.value)} />
        </StyledDivLogin>
    );
};

export default Login;
