import React, { useContext } from 'react';
// Component
import Login from '../../organisms/Login/Login';
import AccessHome from '../../molecules/AccessHome/AccessHome';
import Span from './../../atoms/Span/Span';
//Context 
import { PocketContext } from '../../../context/PocketContext';
// Utils
import { loginRules } from './../../../utils/loginRules';
//Styles
import { StyledDivInitialLogin, StyledLoginRules, StyledUlRules } from './Initiallogin.styles';

const InitialLogin = () => {

    const { userNameWallet, setUserNameWallet, initialAmount, setInitialAmount, setShowHome, setShowLoginValidation } = useContext(PocketContext);

    const updateWalletInfo = (e) => {
        e.preventDefault();
        if(userNameWallet.trim() !== '' && initialAmount.trim() !== '' && initialAmount.length > 3 && userNameWallet.length < 15 && userNameWallet.length > 8 ) {
            setShowHome(true);
            setUserNameWallet('');
            setInitialAmount('');
            console.log(e.target)
        } else {
            setShowLoginValidation(true);
            setTimeout(() => {
                setShowLoginValidation(false);
            },3000)
        }
    };

    const showLoginRules = (loginRules) =>  {
        return loginRules.map(loginRule => {
            return <>
                <Span weight="category" key={loginRule.id}>{loginRule.variable}</Span>
                <StyledUlRules>
                    {loginRule.rules.map(rule => <li key={rule}>{rule}</li>)}
                </StyledUlRules>
                </>
        }) 
    };

    return (
        <StyledDivInitialLogin>
            <StyledLoginRules>
                <Span margin="15" weight="title" fontSize="title">Rules to fill this form</Span>
                {showLoginRules(loginRules)}
            </StyledLoginRules>
            <Login />
            <AccessHome onClick={updateWalletInfo} /> 
        </StyledDivInitialLogin>
    );
};

export default InitialLogin;
