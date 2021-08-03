import React, { useContext, useState } from 'react';
// Component
import Login from '../../organisms/Login/Login';
import AccessHome from '../../molecules/AccessHome/AccessHome';
import Span from './../../atoms/Span/Span';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
//Context 
import { PocketContext } from '../../../context/PocketContext';
// Utils
import { loginRules } from './../../../utils/loginRules';
//Styles
import { StyledDivInitialLogin, StyledLoginRules, StyledUlRules } from './Initiallogin.styles';

const InitialLogin = () => {

    const { userNameWallet, initialAmount, setShowHome, setShowLoginValidation } = useContext(PocketContext);
    const [showRules, setShowRules] = useState(true);

    const updateWalletInfo = (e) => {
        e.preventDefault();
        if(userNameWallet.trim() !== '' && initialAmount.trim() !== '' && initialAmount.length > 3 && userNameWallet.length < 15 && userNameWallet.length > 8 ) {
            setShowHome(true);
        } else {
            setShowLoginValidation(true);
            setTimeout(() => {
                setShowLoginValidation(false);
            },3000)
            setTimeout(() => {
                setShowRules(true);
            },3500)
        }
    };

    const showLoginRules = (loginRules) =>  {
        return loginRules.map(loginRule => {
            return <>
                <Span weight="category" key={loginRule.id}>{loginRule.variable}</Span>
                <StyledUlRules>
                    {loginRule.rules.map(rule => <li key={`${rule} ${loginRule.rules[rule]}`}>{rule}</li>)}
                </StyledUlRules>
                </>
        }) 
    };

    return (
        <StyledDivInitialLogin>
            <ButtonIcon name={showRules ? 'cross' : 'menu'} size="15" color={showRules ? 'red' : 'black'} onClick={() => setShowRules(!showRules)} />
            {showRules && 
                <StyledLoginRules>
                    <Span margin="15" weight="title" fontSize="title">Rules to fill this form</Span>
                    {showLoginRules(loginRules)}
                </StyledLoginRules>
            }   
            <Login />
            <AccessHome onClick={(e) => updateWalletInfo(e)} /> 
        </StyledDivInitialLogin>
    );
};

export default InitialLogin;
