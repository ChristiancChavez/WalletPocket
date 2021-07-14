import React, { createContext, useState, useEffect } from 'react';

export const PocketContext = createContext();

const PocketContextProvider = (props) => {

    const [initialAmount, setInitialAmount] = useState(JSON.parse(window.localStorage.getItem('initialAmount')) || '');
    const [userNameWallet, setUserNameWallet] = useState(JSON.parse(window.localStorage.getItem('userNameWallet')) || '');

    useEffect(() => {
        window.localStorage.setItem('initialAmount', JSON.stringify(initialAmount));
    },[initialAmount]);

    useEffect(() => {
        window.localStorage.setItem('userNameWallet', JSON.stringify(userNameWallet));
    },[userNameWallet]);

    return (
        <PocketContext.Provider value={{ initialAmount, setInitialAmount, userNameWallet, setUserNameWallet }}>
            {props.children}
        </PocketContext.Provider>
    )
}

export default PocketContextProvider;
