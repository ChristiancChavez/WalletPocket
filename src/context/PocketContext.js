import React, { createContext, useState, useEffect } from 'react';

export const PocketContext = createContext();

const PocketContextProvider = (props) => {

    const [initialAmount, setInitialAmount] = useState(JSON.parse(window.localStorage.getItem('initialAmount')) || 0);
    const [userNameWallet, setUserNameWallet] = useState(JSON.parse(window.localStorage.getItem('userNameWallet')) || '');
    const [showHome, setShowHome] = useState(false);
    const [showLoginValidation, setShowLoginValidation] = useState(false);
    useEffect(() => {
        window.localStorage.setItem('initialAmount', JSON.stringify(initialAmount));
    },[initialAmount]);

    useEffect(() => {
        window.localStorage.setItem('userNameWallet', JSON.stringify(userNameWallet));
    },[userNameWallet]);

    return (
        <PocketContext.Provider value={{ initialAmount, setInitialAmount, userNameWallet, setUserNameWallet, showHome, setShowHome, showLoginValidation, setShowLoginValidation }}>
            {props.children}
        </PocketContext.Provider>
    )
}

export default PocketContextProvider;
