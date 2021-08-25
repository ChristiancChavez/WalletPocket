import React, { useContext } from 'react';
//Componentes
import UserInput from './../../molecules/UserInput/UserInput';
//Context
import { PocketContext } from '../../../context/PocketContext';
// Styles
import { StyledDivLogin, StyledDivMessage } from './Login.styles';
import Span from './../../atoms/Span/Span';

const Login = () => {

    const { setUserNameWallet, setInitialAmount, showLoginValidation, setBudget } = useContext(PocketContext);

    const setAmounts = (e) => {
        setInitialAmount(e.target.value);
        setBudget(e.target.value);
    }

    return (
        <StyledDivLogin>
            <UserInput name="profile" placeholder="Type your name" onChange={(e) => setUserNameWallet(e.target.value)} />
            <UserInput name="wallet" placeholder="Type your wallet's amount" onChange={(e) => setAmounts(e)} />
            {showLoginValidation && 
                <StyledDivMessage>
                    <Span fontSize="message" weight="category" color="red">Escribe o corrige tus datos para continuar</Span>
                </StyledDivMessage>
            }
        </StyledDivLogin>
    );
};

export default Login;
