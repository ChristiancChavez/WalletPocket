import React from 'react';
// components
import Icon from '../../atoms/Icon/Icon';
import Span from '../../atoms/Span/Span';
// Styles
import { StyledDivBar, StyledCircleProgress, StyledCircleRail, StyledSvgBar, StyledCategoryPocket, StyledContainerSvg, StyledSpan } from './progressPocket.styles'
const PocketProgress = ({ progress, percentage }) => {
    
    return (
        <StyledDivBar>
            { progress ? 
                (   
                    <StyledContainerSvg>
                        <StyledSvgBar viewBox="0 0 150 150">
                            <StyledCircleRail r="67" cx="75" cy="75"></StyledCircleRail>
                            <StyledCircleProgress r="67" cx="75" cy="75" percentage={percentage}></StyledCircleProgress>
                        </StyledSvgBar>
                        <Icon name="glass2" position />
                    </StyledContainerSvg>
                )
                :
                (   
                    <StyledCategoryPocket>
                        <Icon name="glass2" position />
                        <StyledSpan>
                            <Span children="Entertainment" fontSize="category"/>
                        </StyledSpan>
                    </StyledCategoryPocket>
                )
            }
        </StyledDivBar>
    );
};

export default PocketProgress;
