import React, { useContext, useState } from 'react';
// Components
import Quantity from '../../atoms/Quantity/Quantity';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Input from './../../atoms/Input/Input';
import Span from '../../atoms/Span/Span';
// Context
import { PocketContext } from '../../../context/PocketContext';
// Styles 
import { StyledContainerAddition, StyledContainerIcons, StyledQuantityAdded, StyledDivMessageReachGoal } from './pocketAddition.styles';

const PocketAddition = ({ goalPocket }) => {

    const { pocketList, setPocketList } = useContext(PocketContext);
    const [showQuantityAdded, setShowQuantityAdded] = useState(false);
    const [valueAdditionPocketInput, setValueAdditionPocketInput] = useState(0);
    const [quantityGoalPocket, setQuantityGoalPocket] = useState(0);
    const [showReachedGoalPocket, setShowReachedGoalPocket] = useState(false);
    const [showAdditionMoneyButton, setShowAdditionMoneyButton] = useState(true);

    const additionMoneyPocket = (e) => {
        const convertValueAddition = Number(valueAdditionPocketInput);
        if(convertValueAddition < goalPocket) {
            const newQuantityGoalPocket = convertValueAddition + quantityGoalPocket;
            if(newQuantityGoalPocket <= goalPocket) {
                setQuantityGoalPocket(newQuantityGoalPocket);
                const newPercentagePocket = (newQuantityGoalPocket * 100) / goalPocket;
                setValueAdditionPocketInput(0);
                updatePercentagePocket(e, newPercentagePocket);
                setShowQuantityAdded(false);
            } 
        } else {
            const newQuantityGoalPocket = convertValueAddition + quantityGoalPocket;
            setQuantityGoalPocket(newQuantityGoalPocket);
            const newPercentagePocket = (newQuantityGoalPocket * 100) / goalPocket;
            setValueAdditionPocketInput(0);
            updatePercentagePocket(e, newPercentagePocket);
            setShowReachedGoalPocket(true);
            setShowAdditionMoneyButton(false);
            setShowQuantityAdded(false);
        } 

        
    };

    const updatePercentagePocket = (e, newPercentagePocket) => {
        const closestDivElement = e.target.closest("#styleContainerPocket");
        const pocketAdditionElement = closestDivElement.previousSibling;
        const childPocketAdditionElement = pocketAdditionElement.firstChild.firstChild.firstChild;
        childPocketAdditionElement.setAttribute("style", `height:${newPercentagePocket}%;`);
    };

    const deletePocketUser = (e) => {
        const closestDivElement = e.target.closest("#styleContainerPocket");
        const pocketAdditionElement = closestDivElement.previousSibling;
        const childPocketAdditionElement = pocketAdditionElement.lastChild;
        const childSpanElement = childPocketAdditionElement.firstChild.innerText;
        const newPocketList = pocketList.filter(pocketItem => pocketItem.namePocket.toLowerCase() !== childSpanElement);
        setPocketList(newPocketList);
    };

    return (
        <StyledContainerAddition id="styleContainerPocket">
        {showReachedGoalPocket && 
            <StyledDivMessageReachGoal>
                <Span fontSize="category" color="#F9C70C">You reached your goal, CONGRATS!!</Span>
            </StyledDivMessageReachGoal>
        }
            <Quantity weigth="900" fontSize="28">{quantityGoalPocket}</Quantity>
            <StyledContainerIcons>
                {showAdditionMoneyButton && 
                    <ButtonIcon onClick={() => setShowQuantityAdded(true)} name="coin-dollar" size="20" />
                }
                <ButtonIcon onClick={(e) => deletePocketUser(e)} name="bin2" size="20" />
            </StyledContainerIcons>
            {showQuantityAdded && <StyledQuantityAdded>
                <Input variantStyle="addition" placeholder="Pocket's addition" value={valueAdditionPocketInput} onChange={(e) => setValueAdditionPocketInput(e.target.value)} />
                <ButtonIcon onClick={(e) => additionMoneyPocket(e)} name="checkmark" size="17" color="green" />
                <ButtonIcon onClick={() => setShowQuantityAdded(false)} name="cross" size="15" color="red" />
            </StyledQuantityAdded>}
        </StyledContainerAddition>
    );
};

export default PocketAddition;
