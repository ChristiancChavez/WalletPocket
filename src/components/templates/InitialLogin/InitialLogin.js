import React, { useContext } from 'react';
// Component
import Login from '../../organisms/Login/Login';
import AccessHome from '../../molecules/AccessHome/AccessHome';
//Context 
import { PocketContext } from '../../../context/PocketContext';

//Styles
import { StyledDivInitialLogin } from './Initiallogin.styles';

const InitialLogin = () => {

    const { userNameWallet, setUserNameWallet, initialAmount, setInitialAmount, setShowHome } = useContext(PocketContext);

    const updateWalletInfo = (e) => {
        e.preventDefault();
        if(userNameWallet.trim() !== '' && initialAmount.trim() !== '') {
            setShowHome(true);
            setUserNameWallet('');
            setInitialAmount('');
        } else {
            console.log('typea los datos');
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
