import React from 'react';
// Component
import PocketInfo from './PocketInfo';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'molecules/PocketInfo',
    component: PocketInfo
}

export const pocketInfoEntertainment = () => <PocketInfo icon="glass2" name="Parties" percentage="61" money="200.000"/>;
export const pocketInfoTravel = () => <PocketInfo icon="airplane" name="Cancún" percentage="90" money="4.000.000"/>;
export const pocketInfoHome = () => <PocketInfo icon="home" name="Own House" percentage="10" money="200.000"/>;
export const pocketInfoHealth = () => <PocketInfo icon="medical_services" name="Sura" percentage="25" money="2.000.000"/>;
export const pocketInfoOther = () => <PocketInfo icon="plus" name="Iphone 12" percentage="12" money="12.000.000"/>;
export const pocketInfoFood = () => <PocketInfo icon="spoon-knife" name="household food" percentage="78" money="500.000"/>;
