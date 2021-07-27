import React, { useContext, useState } from 'react';
// Components
import Icon from '../../atoms/Icon/Icon';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Quantity from '../../atoms/Quantity/Quantity';
import ModalMessage from '../../molecules/ModalMessage/ModalMessage';
// Styles 
import { StyledBalance, StyledContainerBalance } from './walletBalance.styles';
//Context
import { PocketContext } from '../../../context/PocketContext';

const WalletBalance = () => {

    const { initialAmount } = useContext(PocketContext);
    const [showRecharge, setUseRecharge] = useState(false);

    return (
        <StyledBalance>
            <Icon name="wallet" color="gray" size="25" marginTop="7" />
            <Quantity weight="800" fontSize="40" >{initialAmount}</Quantity>
            <ButtonIcon onClick={() => setUseRecharge(!showRecharge)} name="coin-dollar" size="25" />
            {showRecharge && <StyledContainerBalance>
                <ModalMessage quantity />
            </StyledContainerBalance>}
        </StyledBalance>
    );
};

export default WalletBalance;
