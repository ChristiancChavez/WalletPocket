import React, { useContext } from 'react';
// Component
import Login from '../../organisms/Login/Login';
import AccessHome from '../../molecules/AccessHome/AccessHome';
//Context 
import { PocketContext } from '../../../context/PocketContext';
//Router
import { Link } from "react-router-dom"
//Styles
import { StyledDivInitialLogin } from './Initiallogin.styles';

const InitialLogin = () => {

    const { initialAmount, userNameWallet } = useContext(PocketContext);

    return (
        <StyledDivInitialLogin>
            <Login />
            <Link to="/home">
                <AccessHome disabled={initialAmount & userNameWallet ? false : true} /> 
            </Link>
        </StyledDivInitialLogin>
    );
};

export default InitialLogin;
