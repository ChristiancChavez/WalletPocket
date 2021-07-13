import React from 'react';
// Component
import Login from '../../organisms/Login/Login';
import AccessHome from '../../molecules/AccessHome/AccessHome';
//Styles
import { StyledDivInitialLogin } from './Initiallogin.styles';
//Router
import { Link } from "react-router-dom"

const InitialLogin = () => {
    return (
        <StyledDivInitialLogin>
            <Login />
            <Link to="/home">
                <AccessHome />
            </Link>
        </StyledDivInitialLogin>
    );
};

export default InitialLogin;
