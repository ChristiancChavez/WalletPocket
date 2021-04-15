import React from 'react';
// Component
import PocketProgress from './ProgressPocket';


// eslint-disable-next-line import/no-anonymous-default-export
export default  {
    title: 'Pocket Progress',
    component: PocketProgress
}

export const pocketProgressEntertainment = () => <PocketProgress progress percentage="50" icon="glass2" category="Entertainment"></PocketProgress>;
export const PocketProgressTravel = () => <PocketProgress progress percentage="80" icon="airplane" category="Travel"></PocketProgress>;
export const PocketProgressHealth = () => <PocketProgress progress percentage="43" icon="medical_services" category="Health"></PocketProgress>;
export const PocketProgressHome = () => <PocketProgress progress percentage="20" icon="home" category="Home"></PocketProgress>;
export const PocketProgressFood = () => <PocketProgress progress percentage="0" icon="spoon-knife" category="Food"></PocketProgress>;
export const PocketProgressOther = () => <PocketProgress progress percentage="18" icon="plus" category="Other"></PocketProgress>;
export const pocketCategoryEntertainment = () => <PocketProgress icon="glass2" category="Entertainment"></PocketProgress>;
export const PocketCategoryTravel = () => <PocketProgress icon="airplane" category="Travel"></PocketProgress>;
export const PocketCategoryHealth = () => <PocketProgress icon="medical_services" category="Health"></PocketProgress>;
export const PocketCategoryHome = () => <PocketProgress icon="home" category="Home"></PocketProgress>;
export const PocketCategoryFood = () => <PocketProgress icon="spoon-knife" category="Food"></PocketProgress>;
export const PocketCategoryOther = () => <PocketProgress icon="plus" category="Other"></PocketProgress>;

