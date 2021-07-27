import React, { createContext, useState, useEffect } from 'react';

export const PocketContext = createContext();

const PocketContextProvider = (props) => {

    const [initialAmount, setInitialAmount] = useState(JSON.parse(window.localStorage.getItem('initialAmount')) || 0);
    const [userNameWallet, setUserNameWallet] = useState(JSON.parse(window.localStorage.getItem('userNameWallet')) || '');
    const [pocketList, setPocketList] = useState(JSON.parse(window.localStorage.getItem('pocketList')) || [])
    const [showHome, setShowHome] = useState(false);
    const [showLoginValidation, setShowLoginValidation] = useState(false);
    useEffect(() => {
        window.localStorage.setItem('initialAmount', JSON.stringify(initialAmount));
    },[initialAmount]);

    useEffect(() => {
        window.localStorage.setItem('userNameWallet', JSON.stringify(userNameWallet));
    },[userNameWallet]);

    useEffect(() => {
        window.localStorage.setItem('pocketList', JSON.stringify(pocketList));
    },[pocketList]);

    return (
        <PocketContext.Provider 
            value={{ 
                initialAmount, 
                setInitialAmount, 
                userNameWallet, 
                setUserNameWallet, 
                showHome, 
                setShowHome, 
                showLoginValidation, 
                setShowLoginValidation, 
                setPocketList 
            }}>
            {props.children}
        </PocketContext.Provider>
    )
}

export default PocketContextProvider;
