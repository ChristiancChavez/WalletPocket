import React, { useContext, useState } from 'react';
// Components
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import PocketList from '../PocketList/PocketList';
// Context
import { PocketContext } from '../../../context/PocketContext';
//Styles
import { StyledDivPocketsUser, StyledDivButtonShowPockets } from './pocketUser.styles.js';

const PocketsUser = () => {

    const {pocketList} = useContext(PocketContext);
    const [showPocketList, setShowPocketList] = useState(false);

    const showPocketListUser = () => {
        setShowPocketList(!showPocketList);
        console.log(pocketList);
    }

    return (
        <>
        <StyledDivButtonShowPockets>
                <ButtonIcon onClick={() => showPocketListUser()} name="menu" size="20" color="black" />
            </StyledDivButtonShowPockets>
                
            {showPocketList && <StyledDivPocketsUser> 
                        {pocketList.map(pocketListItem => <PocketList 
                            key={pocketListItem.namePocket} 
                            icon={pocketListItem.iconCategory} 
                            name={pocketListItem.namePocket} 
                            percentage="50" 
                            money={pocketListItem.amountPocket} 
                        />)}
                
            </StyledDivPocketsUser>}
        </>
    );
};

export default PocketsUser;
