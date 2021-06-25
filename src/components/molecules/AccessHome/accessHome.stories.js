import React from 'react';
//Component
import AccessHome from './AccessHome';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    component: AccessHome,
    title: 'molecules/Access Home'
}

export const AccessHomeTitle = () => <AccessHome name="user-plus" color="black" size="25" />; 
