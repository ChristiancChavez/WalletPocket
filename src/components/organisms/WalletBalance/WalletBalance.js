import React from 'react';
// Components
import Icon from '../../atoms/Icon/Icon';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Quantity from '../../atoms/Quantity/Quantity';
// import ModalMessage from '../../molecules/ModalMessage/ModalMessage';
// Styles }
import { StyledBalance, StyledContainerBalance } from './walletBalance.styles';

const WalletBalance = () => {
    return (
        <StyledBalance>
            <Icon name="wallet" color="gray" size={25} marginTop={7} />
            <Quantity weight={800} fontSize="40" >2.000.000</Quantity>
            <ButtonIcon name="coin-dollar" size="25" />
{/*             <StyledContainerBalance>
                <ModalMessage quantity />
            </StyledContainerBalance> */}
        </StyledBalance>
    );
};

export default WalletBalance;
