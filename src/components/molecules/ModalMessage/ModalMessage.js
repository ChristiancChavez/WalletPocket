import React, { useContext} from 'react';
//Components
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Span from '../../atoms/Span/Span';
import Input from '../../atoms/Input/Input';
//Context
import { PocketContext } from '../../../context/PocketContext';
//Styles
import { StyledModaliv, StyledButtons } from './modalMessage.styles';

const ModalMessage = ({ children, quantity, onChange, onClick }) => {
 
    const { setUseRecharge, walletRecharge, setWalletRecharge } = useContext(PocketContext);
    
    const closeWalletRecharge = () => {
        setUseRecharge(false);
        setWalletRecharge();
    }


    return (
        <StyledModaliv>
            <Span fontSize="message">{children}</Span>
            {quantity && <Input value={walletRecharge} variantStyle='addition' onChange={onChange} placeholder="Wallet's recharge" type="text"  />}
            <StyledButtons>
                <ButtonIcon onClick={onClick} name="checkmark" size="17" color="green" />
                <ButtonIcon onClick={closeWalletRecharge} name="cross" size="17" color="red" />
            </StyledButtons>
        </StyledModaliv>
    );
};

export default ModalMessage;
