import React, { useContext, useState } from 'react';
// Components
import Quantity from '../../atoms/Quantity/Quantity';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Input from './../../atoms/Input/Input';
// Context
import { PocketContext } from '../../../context/PocketContext';
// Styles 
import { StyledContainerAddition, StyledContainerIcons, StyledQuantityAdded, StyledDivMessageReachGoal } from './pocketAddition.styles';
import Span from './../../atoms/Span/Span';

const PocketAddition = ({ goalPocket }) => {

    const { pocketList, setPocketList, setPercentagePocket  } = useContext(PocketContext);
    const [showQuantityAdded, setShowQuantityAdded] = useState(false);
    const [valueAdditionPocketInput, setValueAdditionPocketInput] = useState(0);
    const [quantityGoalPocket, setQuantityGoalPocket] = useState(0);
    const [showReachedGoalPocket, setShowReachedGoalPocket] = useState(false);
    const [renderMessageGoal, setRenderMessageGoal] = useState('');

    const additionMoneyPocket = (e) => {
        const convertValueAddition = Number(valueAdditionPocketInput);
        if(convertValueAddition < goalPocket) {
            const newQuantityGoalPocket = convertValueAddition + quantityGoalPocket;
            if(newQuantityGoalPocket < goalPocket) {
                setQuantityGoalPocket(newQuantityGoalPocket);
                const newPercentagePocket = (newQuantityGoalPocket * 100) / goalPocket;
                setPercentagePocket(newPercentagePocket);
                setValueAdditionPocketInput(0);
                setShowQuantityAdded(false);
                updatePercentagePocket(e, newPercentagePocket);
            } 
        };

        if (quantityGoalPocket === goalPocket) {
            setShowReachedGoalPocket(true);
            setRenderMessageGoal('reached');
        } else {
            setRenderMessageGoal('');
        };
    };

    const updatePercentagePocket = (e, newPercentagePocket) => {
        const closestDivElement = e.target.closest("#styleContainerPocket");
        const pocketAdditionElement = closestDivElement.previousSibling;
        const childPocketAdditionElement = pocketAdditionElement.firstChild.firstChild;
        childPocketAdditionElement.setAttribute("style", "background-color:#F9C70C;");
        /* const childSpanElement = childPocketAdditionElement.firstChild.innerText;
        const filteredPocket = pocketList.filter(pocketItem => pocketItem.namePocket === childSpanElement);
        //const addPercentagePocket = {...filteredPocket, ['percentageState']: newPercentagePocket};  
        setPocketList([ ...pocketList, {...filteredPocket, 'percentageState': newPercentagePocket}]); */
        console.log(pocketList);
    };

    const renderMessageGoalPocket = (renderMessageGoal) => {
        renderMessageGoal === 'reached' ?  <Span>You reached your goal, CONGRATS!!</Span> : <Span>You're close to reach your goal, KEEP GOING!!</Span>
    };

    const deletePocketUser = (e) => {
        const closestDivElement = e.target.closest("#styleContainerPocket");
        const pocketAdditionElement = closestDivElement.previousSibling;
        const childPocketAdditionElement = pocketAdditionElement.lastChild;
        const childSpanElement = childPocketAdditionElement.firstChild.innerText;
        const newPocketList = pocketList.filter(pocketItem => pocketItem.namePocket.toLowerCase() !== childSpanElement);
        setPocketList(newPocketList);
    };

    const closeMessageReachedGoal = () => {
        setShowReachedGoalPocket(false);
    };

    return (
        <StyledContainerAddition id="styleContainerPocket">
            {showReachedGoalPocket && 
                <StyledDivMessageReachGoal>
                    <ButtonIcon name="cross" size="17" color="red" onClick={closeMessageReachedGoal} />
                    {renderMessageGoalPocket(renderMessageGoal)}
                </StyledDivMessageReachGoal>
            }
            <Quantity weigth="900" fontSize="28">{quantityGoalPocket}</Quantity>
            <StyledContainerIcons>
                <ButtonIcon onClick={() => setShowQuantityAdded(true)} name="coin-dollar" size="20" />
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
