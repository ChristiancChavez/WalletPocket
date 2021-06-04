import React from 'react';
import Span from '../../atoms/Span/Span';
import PocketProgress from '../../molecules/ProgressPocket/ProgressPocket';
import UserInput from './../../molecules/UserInput/UserInput';
//Styles
import { StyledDivPocketContainer, StyledDivPockets } from './pocketCategories.styles';

const PocketCategories = () => {
    return (
        <StyledDivPocketContainer>
            <Span weight="title" fontSize="title">Create your pockets</Span>
            <StyledDivPockets>
                <PocketProgress icon="medical_services" category="Health" />
                <PocketProgress icon="airplane" category="Tarvel" />
                <PocketProgress icon="home" category="Home" />
                <PocketProgress icon="spoon-knife" category="Food" />
                <PocketProgress icon="glass2" category="Entertainment" />
                <PocketProgress icon="cog" category="Others" />
            </StyledDivPockets>
        </StyledDivPocketContainer>
    );
};

export default PocketCategories;
