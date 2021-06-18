import React from 'react';
// components
import Icon from '../../atoms/Icon/Icon';
import Span from '../../atoms/Span/Span';
import Input from './../../atoms/Input/Input'; 
// Styles
import { 
    StyledDivBar, 
    StyledCircleProgress, 
    StyledCircleRail, 
    StyledSvgBar, 
    StyledCategoryPocket, 
    StyledContainerSvg, 
    StyledSpan, 
    StyledDivPocket ,
    StyledCategoryPocketInputs,
    StyledCreatePocket
} from './progressPocket.styles'
const PocketProgress = ({ progress, percentage, icon, category, createPocket }) => {
    
    const showProgressVariation = (progress) => {
        return progress ? 
        (   
            <StyledContainerSvg>
                <StyledSvgBar viewBox="0 0 150 150">
                    <StyledCircleRail r="67" cx="75" cy="75"></StyledCircleRail>
                    <StyledCircleProgress r="67" cx="75" cy="75" percentage={percentage}></StyledCircleProgress>
                </StyledSvgBar>
                <Icon name={icon} position />
            </StyledContainerSvg>
        )
        :
        (   
            <StyledCategoryPocket>
                <Icon name={icon} position />
                <StyledSpan>
                    <Span children={category} fontSize="category"/>
                </StyledSpan>
            </StyledCategoryPocket>
        )
    };

    return (
        <>
            {createPocket ?
            (   <StyledDivPocket>
                    <StyledCreatePocket>
                        <Icon name={icon} position />
                    </StyledCreatePocket>
                    <StyledCategoryPocketInputs>
                        <Input placeholder="Pocket's name" />
                        <Input placeholder="Money goal" />
                    </StyledCategoryPocketInputs>
                </StyledDivPocket>
            )
            :
            (   <StyledDivBar>
                { showProgressVariation(progress)}
                </StyledDivBar>
            )}
        </>
    );
};

export default PocketProgress;
