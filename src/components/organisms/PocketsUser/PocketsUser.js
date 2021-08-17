import React, { useContext, useState } from 'react';
// Components
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import PocketList from '../PocketList/PocketList';
import Span from '../../atoms/Span/Span';
// Context
import { PocketContext } from '../../../context/PocketContext';
//Styles
import { StyledDivPocketsUser, StyledDivButtonShowPockets } from './pocketUser.styles.js';

const PocketsUser = () => {

    const { pocketList } = useContext(PocketContext);
    const [showPocketList, setShowPocketList] = useState(false);

    const showPocketListUser = () => {
        setShowPocketList(!showPocketList);
        console.log(pocketList);
    };

    const renderPocketList = () => {
        if(pocketList.length > 0){
            return pocketList.map(pocketListItem => <PocketList 
                key={pocketListItem.namePocket} 
                icon={pocketListItem.iconCategory} 
                name={pocketListItem.namePocket} 
                percentage={pocketListItem.percentage } 
                money={pocketListItem.amountPocket} 
            />)
        } else {
            return <Span fontSize="message" weight="category" color="red">You don't have any pockets yet</Span>
        }
    };

    return (
        <>
            <StyledDivButtonShowPockets>
                <ButtonIcon onClick={() => showPocketListUser()} name="menu" size="20" color="black" />
            </StyledDivButtonShowPockets>
                    
            {showPocketList && 
                <StyledDivPocketsUser> 
                    {renderPocketList()}  
                </StyledDivPocketsUser>
            }
        </>
    );
};

export default PocketsUser;
