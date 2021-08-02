import React, { useContext, useState } from 'react';
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
const PocketProgress = ({ progress, percentage, icon, category, createPocket }) => {
    
    const [namePocket, setNamePocket] = useState('');
    const [amountPocket, setAmountPocket] = useState('');
    
    const { setPocketList, setShowPanelPocket, setNameIconCategory, nameIconCategory, setIconCategory, iconCategory, pocketList } = useContext(PocketContext);

    const updateNamePocket = (e) => {
        setNamePocket(e.target.value);
    };

    const updateAmountPocket = (e) => {
        setAmountPocket(e.target.value);
    };

    const showCreatePocket = (category) => {
        switch(category){
            case 'food':
                setIconCategory('spoon-knife');
            break
            case 'Health':
                setIconCategory('medical_services');
            break
            case 'Travel':
                setIconCategory('airplane');
            break
            case 'Home':
                setIconCategory('home');
            break
            case 'Entertainment':
                setIconCategory('glass2');
            break
            default:
                setIconCategory('cog');
            break
        }
        setShowPanelPocket(true);
        setNameIconCategory(category);
    }

    const addPocketToList = () => {
        setPocketList([...pocketList, { icon:{iconCategory}, name:{namePocket}, percentage:0, money:{amountPocket} }]);
        setNamePocket('');
        setAmountPocket('');
        console.log(pocketList, 'previus');
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
            <StyledCategoryPocket >
                <Icon onClick={(e) => showCreatePocket(category)} name={icon} position />
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
                    <Span fontSize="title" weight="category">Category {nameIconCategory}</Span>
                    <StyledDivPocket>
                        <StyledCreatePocket>
                            <Icon name={iconCategory} position createPocket />
                        </StyledCreatePocket>
                        <StyledCategoryPocketInputs>
                        <Input variantStyle="pocket" value={amountPocket} onChange={(e) => updateAmountPocket(e)} placeholder="Money goal" />
                        <Input variantStyle="pocket" value={namePocket} onChange={(e) => updateNamePocket(e)} placeholder="Pocket's name" />
                        </StyledCategoryPocketInputs>
                        <StyledCategoryPocketButtons>
                            <ButtonIcon onClick={() => addPocketToList()} name="checkmark" color="green" size="15"/>
                            <ButtonIcon onClick={() => setShowPanelPocket(false)} name="cross" color="red" size="15"/>
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
