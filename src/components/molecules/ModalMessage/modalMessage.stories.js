import React from 'react';
//Component
import ModalMessage from './ModalMessage';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    component: ModalMessage,
    title: 'molecules/Modal Message'
}

export const ModalMessageQuantity = () => <ModalMessage quantity>Have to add more money to your wallet</ModalMessage>;
export const ModalMessageNoQuantity = () => <ModalMessage>¿Are yo sure?</ModalMessage>;
