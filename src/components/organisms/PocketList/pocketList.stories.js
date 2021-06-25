import React from 'react'
//components
import PocketList from './PocketList';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    component: PocketList,
    title: 'Organisms/Pocket User List'
}

export const PocketUsertList = () => <PocketList icon="airplane" name="Travel to Paris" />