import styled from "styled-components";

const sizeSvg = (props) => {
    if(!props.size) return '30px';
    return `${props.size}px`
};

const iconColor = (props) => {
    if(!props.color) return 'black';
    return props.color
};



const StyledSvg = styled.svg`
    width: ${(props) => sizeSvg(props)};
    height: ${(props) => sizeSvg(props)};
    fill: ${(props) => iconColor(props)};
    display: inline-block;
    ${(props) => {
        if(props.position) {
            return `
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);`
        }
    }}
`

export default StyledSvg;
