import React, { useContext, useState } from 'react';
// Components
import Icon from '../../atoms/Icon/Icon';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Quantity from '../../atoms/Quantity/Quantity';
import ModalMessage from '../../molecules/ModalMessage/ModalMessage';
// Styles 
import { StyledBalance, StyledContainerBalance, StyledDivBudget } from './walletBalance.styles';
//Context
import { PocketContext } from '../../../context/PocketContext';

const WalletBalance = () => {

    const { initialAmount, setInitialAmount, showRecharge, setShowRecharge, budget, setBudget } = useContext(PocketContext);
    const [walletRecharge, setWalletRecharge] = useState(0);
    const initialAmountInteger = parseInt(initialAmount);

    const handleWalletRecharge = (e) => {
        setWalletRecharge(e.target.value);
    }

    const newInitialAmount = () => {
        const walletRechargeInteger = parseInt(walletRecharge);
        const newValueInitialAmount = initialAmountInteger + walletRechargeInteger;
        setInitialAmount(newValueInitialAmount);
        setBudget(newValueInitialAmount);
        setShowRecharge(false);
        setWalletRecharge();
    }

    return (
        <StyledBalance>
            <Icon name="wallet" color="gray" size="25" marginTop="7" />
            <Quantity weight="800" fontSize="40" >{initialAmount}</Quantity>
            <StyledDivBudget>
                <Quantity fontSize="20">{budget}</Quantity>
            </StyledDivBudget>
            <ButtonIcon onClick={() => setShowRecharge(true)} name="coin-dollar" size="25" />
            {showRecharge && <StyledContainerBalance>
                <ModalMessage quantity onClick={newInitialAmount} onChange={(e) => handleWalletRecharge(e) } />
            </StyledContainerBalance>}
        </StyledBalance>
    );
};

export default WalletBalance;
