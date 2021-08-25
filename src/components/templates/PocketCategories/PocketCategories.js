import React, { useContext } from 'react';
import Span from '../../atoms/Span/Span';
import ProgressPocket from '../../molecules/ProgressPocket/ProgressPocket';
//pocket Categories
import { categoriesPockets } from '../../../utils/categoriesPockets';
//Context
import { PocketContext } from '../../../context/PocketContext';
//Styles
import { StyledDivPocketContainer, StyledDivPockets, StyledDivCreatePocket } from './pocketCategories.styles';

const PocketCategories = () => {

    const { nameIconCategory, showPanelPocket } = useContext(PocketContext);

    const pocketCategoriesRender = (categoriesPockets) => {
        return categoriesPockets.map(categoriePockets => {
            return <ProgressPocket {...categoriePockets} key={categoriePockets.category} />
        })
    }

    return (
        <StyledDivPocketContainer>
            <Span weight="title" fontSize="title">Create your pockets</Span>
            <StyledDivPockets>
                {pocketCategoriesRender(categoriesPockets)}
            </StyledDivPockets>
            {showPanelPocket && <StyledDivCreatePocket>
                <ProgressPocket createPocket icon={nameIconCategory} category={nameIconCategory} />
            </StyledDivCreatePocket>}
        </StyledDivPocketContainer>
    );
};

export default PocketCategories;
