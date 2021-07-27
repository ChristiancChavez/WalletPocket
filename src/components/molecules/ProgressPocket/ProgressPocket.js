import React, { useContext} from 'react';
// components
import Icon from '../../atoms/Icon/Icon';
import Span from '../../atoms/Span/Span';
import Input from './../../atoms/Input/Input'; 
import ButtonIcon from './../../atoms/ButtonIcon/ButtonIcon';  
// Context
import { PocketContext } from '../../../context/PocketContext';
// Styles
import { 
    StyledDivBar, 
    StyledCircleProgress, 
    StyledCircleRail, 
    StyledSvgBar, 
    StyledCategoryPocket, 
    StyledContainerSvg, 
    StyledSpan, 
    StyledDivPocket,
    StyledCategoryPocketInputs,
    StyledCreatePocket,
    StyledCategoryPocketButtons,
    StyledDivContainerCreate
} from './progressPocket.styles'
const PocketProgress = ({ progress, percentage, icon, category, createPocket, onClick }) => {
    
    const { setPocketList } = useContext(PocketContext);

    const addPocketToList = () => {
        setPocketList([...{ icon:"airplane", name:"Travel to Cartagena", percentage:25, money:1000000 }
        ])
    }
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
                <Icon onClick={onClick} name={icon} position />
                <StyledSpan>
                    <Span children={category} fontSize="category"/>
                </StyledSpan>
            </StyledCategoryPocket>
        )
    };

    return (
        <>
            {createPocket ?
            (   <StyledDivContainerCreate>
                    <Span fontSize="title" weight="category">Category {icon}</Span>
                    <StyledDivPocket>
                        <StyledCreatePocket>
                            <Icon name={icon} position />
                        </StyledCreatePocket>
                        <StyledCategoryPocketInputs>
                            <Input placeholder="Pocket's name" />
                            <Input placeholder="Money goal" />
                        </StyledCategoryPocketInputs>
                        <StyledCategoryPocketButtons>
                            <ButtonIcon onClick={() => addPocketToList} name="checkmark" color="green" size="15"/>
                            <ButtonIcon onClick={() => console.log('close')} name="cross" color="red" size="15"/>
                        </StyledCategoryPocketButtons>
                    </StyledDivPocket>
                </StyledDivContainerCreate>
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
