import React, { useContext } from 'react';
// Component
import Login from '../../organisms/Login/Login';
import AccessHome from '../../molecules/AccessHome/AccessHome';
//Context 
import { PocketContext } from '../../../context/PocketContext';

//Styles
import { StyledDivInitialLogin } from './Initiallogin.styles';

const InitialLogin = () => {

    const { userNameWallet, setUserNameWallet, initialAmount, setInitialAmount, setShowHome, setShowLoginValidation } = useContext(PocketContext);

    const updateWalletInfo = (e) => {
        e.preventDefault();
        if(userNameWallet.trim() !== '' && initialAmount.trim() !== '') {
            setShowHome(true);
            setUserNameWallet('');
            setInitialAmount('');
        } else {
            setShowLoginValidation(true);
            setTimeout(() => {
                setShowLoginValidation(false);
            },3000)
        }
    };

    return (
        <StyledDivInitialLogin>
            <Login />
            <AccessHome onClick={updateWalletInfo} /> 
        </StyledDivInitialLogin>
    );
};

export default InitialLogin;
