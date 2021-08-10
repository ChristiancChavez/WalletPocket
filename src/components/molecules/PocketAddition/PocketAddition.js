import React, { useContext, useState } from 'react';
// Components
import Quantity from '../../atoms/Quantity/Quantity';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Input from './../../atoms/Input/Input';
// Context
import { PocketContext } from '../../../context/PocketContext';
// Styles 
import { StyledContainerAddition, StyledContainerIcons, StyledQuantityAdded } from './pocketAddition.styles';

const PocketAddition = ({ quantity, goalPocket }) => {

    const { pocketList, setPocketList, setPercentagePocket  } = useContext(PocketContext);
    const [showQuantityAdded, setShowQuantityAdded] = useState(false);
    const [valueAdditionPocketInput, setValueAdditionPocketInput] = useState(0);
    const [quantityGoalPocket, setQuantityGoalPocket] = useState(0);

    const additionMoneyPocket = () => {
        const convertValueAddition = Number(valueAdditionPocketInput);
        const newQuantityGoalPocket = convertValueAddition + quantityGoalPocket;
        setQuantityGoalPocket(newQuantityGoalPocket);
        const newPercentagePocket = (newQuantityGoalPocket * 100) / goalPocket;
        setPercentagePocket(newPercentagePocket);
        setValueAdditionPocketInput(0);
        setShowQuantityAdded(false);
    }

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
            <Quantity weigth="900" fontSize="28">{quantityGoalPocket}</Quantity>
            <StyledContainerIcons>
                <ButtonIcon onClick={() => setShowQuantityAdded(true)} name="coin-dollar" size="20" />
                <ButtonIcon onClick={(e) => deletePocketUser(e)} name="bin2" size="20" />
            </StyledContainerIcons>
            {showQuantityAdded && <StyledQuantityAdded>
                <Input variantStyle="addition" placeholder="Pocket's addition" value={valueAdditionPocketInput} onChange={(e) => setValueAdditionPocketInput(e.target.value)} />
                <ButtonIcon onClick={additionMoneyPocket} name="checkmark" size="17" color="green" />
                <ButtonIcon onClick={() => setShowQuantityAdded(false)} name="cross" size="15" color="red" />
            </StyledQuantityAdded>}
        </StyledContainerAddition>
    );
};

export default PocketAddition;
