import React from 'react';
// components
import Icon from '../../atoms/Icon/Icon'
// Styles
import { StyledDivBar, StyledCircleProgress, StyledCircleRail, StyledSvgBar } from './progressPocket.styles'
const PocketProgress = () => {
    return (
        <StyledDivBar>
            <StyledSvgBar viewBox="0 0 150 150">
                <StyledCircleRail r="67" cx="75" cy="75"></StyledCircleRail>
                <StyledCircleProgress r="67" cx="75" cy="75"></StyledCircleProgress>
            </StyledSvgBar>
            <Icon name="glass2" />
        </StyledDivBar>
    );
};

export default PocketProgress;
