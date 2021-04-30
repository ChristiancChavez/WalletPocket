import React from 'react';
//Dependencies
import blue from '../../../Helpers/Images/Ellipse 12.png';
import yellow from '../../../Helpers/Images/Ellipse 3.png';
import orange from '../../../Helpers/Images/Ellipse 10.png';
import purple from '../../../Helpers/Images/Ellipse 9.png';
import turquoise from '../../../Helpers/Images/Ellipse 4.png';
// Styles
import { StyledBackground, StyledPartBackground } from './background.styles';

const Background = () => {
const backgroundsImages = [
    { name:'blue', img:blue }, 
    { name:'yellow', img:yellow }, 
    { name:'orange', img:orange }, 
    { name:'purple', img:purple },
    { name:'turquoise', img:turquoise }
];

const showBackgorunds = () => (
    backgroundsImages.map(background => <StyledPartBackground class={background.name} src={background.img} alt={background.name} />)
)

    return (
        <StyledBackground>
        {showBackgorunds()}
        </StyledBackground>
    );
};

export default Background;
