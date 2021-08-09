import React, { useContext, useState } from 'react';
// Components
import Quantity from '../../atoms/Quantity/Quantity';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Input from './../../atoms/Input/Input';
// Context
import { PocketContext } from '../../../context/PocketContext';
// Styles 
import { StyledContainerAddition, StyledContainerIcons, StyledQuantityAdded } from './pocketAddition.styles';

const PocketAddition = ({ quantity }) => {

    const { pocketList, setPocketList  } = useContext(PocketContext);
    const [showQuantityAdded, setShowQuantityAdded] = useState(false);

    const deletePocketUser = (e) => {
        const closestDivElement = e.target.closest("#styleContainerPocket");
        const pocketAdditionElement = closestDivElement.previousSibling;
        const childPocketAdditionElement = pocketAdditionElement.lastChild;
        const childSpanElement = childPocketAdditionElement.firstChild.innerText;
        const newPocketList = pocketList.filter(pocketItem => pocketItem.namePocket.toLowerCase() !== childSpanElement);
        setPocketList(newPocketList);
        console.log(closestDivElement);
    };

    return (
        <StyledContainerAddition id="styleContainerPocket">
            <Quantity weigth="900" fontSize="28">{quantity}</Quantity>
            <StyledContainerIcons>
                <ButtonIcon onClick={() => setShowQuantityAdded(true)} name="coin-dollar" size="20" />
                <ButtonIcon onClick={(e) => deletePocketUser(e)} name="bin2" size="20" />
            </StyledContainerIcons>
            {showQuantityAdded && <StyledQuantityAdded>
                <Input variantStyle="addition" placeholder="Pocket's recharge" />
                <ButtonIcon onClick={(e) => console.log(e.target)} name="checkmark" size="17" color="green" />
                <ButtonIcon onClick={() => setShowQuantityAdded(false)} name="cross" size="15" color="red" />
            </StyledQuantityAdded>}
        </StyledContainerAddition>
    );
};

export default PocketAddition;
