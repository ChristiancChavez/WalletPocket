import React from 'react';
// Component
import Login from '../../organisms/Login/Login';
//Styles
import { StyledDivInitialLogin } from './Initiallogin.styles';

const InitialLogin = () => {
    return (
        <StyledDivInitialLogin>
            <Login />
        </StyledDivInitialLogin>
    );
};

export default InitialLogin;
