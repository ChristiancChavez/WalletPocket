import React from 'react';
import Span from '../../atoms/Span/Span';
import ProgressPocket from '../../molecules/ProgressPocket/ProgressPocket';
//Styles
import { StyledDivPocketContainer, StyledDivPockets } from './pocketCategories.styles';

const PocketCategories = () => {
    return (
        <StyledDivPocketContainer>
            <Span weight="title" fontSize="title">Create your pockets</Span>
            <StyledDivPockets>
                <ProgressPocket icon="medical_services" category="Health" />
                <ProgressPocket icon="airplane" category="Tarvel" />
                <ProgressPocket icon="home" category="Home" />
                <ProgressPocket icon="spoon-knife" category="Food" />
                <ProgressPocket icon="glass2" category="Entertainment" />
                <ProgressPocket icon="cog" category="Others" />
            </StyledDivPockets>
            <ProgressPocket createPocket icon="cog" />
        </StyledDivPocketContainer>
    );
};

export default PocketCategories;
