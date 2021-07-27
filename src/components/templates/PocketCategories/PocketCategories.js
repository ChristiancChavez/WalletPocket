import React, { useState } from 'react';
import Span from '../../atoms/Span/Span';
import ProgressPocket from '../../molecules/ProgressPocket/ProgressPocket';
//pocket Categories
import { categoriesPockets } from '../../../utils/categoriesPockets';
//Styles
import { StyledDivPocketContainer, StyledDivPockets, StyledDivCreatePocket } from './pocketCategories.styles';

const PocketCategories = () => {

    const [showPanelPocket, setShowPanelPocket] = useState(false);

    const showCreatePocket = () => {
        setShowPanelPocket(true);
        console.log('jadfjabfakjdfbajkfbd');
    }
    const pocketCategoriesRender = (categoriesPockets) => {
        return categoriesPockets.map(categoriePockets => {
            return <ProgressPocket onClick={() => showCreatePocket()} icon={categoriePockets.icon} category={categoriePockets.category} key={categoriePockets.category} />
        })
    }

    return (
        <StyledDivPocketContainer>
            <Span weight="title" fontSize="title">Create your pockets</Span>
            <StyledDivPockets>
                {pocketCategoriesRender(categoriesPockets)}
            </StyledDivPockets>
            {showPanelPocket && <StyledDivCreatePocket>
                <ProgressPocket createPocket icon="home" />
            </StyledDivCreatePocket>}
        </StyledDivPocketContainer>
    );
};

export default PocketCategories;
