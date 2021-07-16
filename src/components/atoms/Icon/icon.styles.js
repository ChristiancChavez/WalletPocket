import styled from "styled-components";

const sizeSvg = (props) => {
    if(!props.size) return '30px';
    return `${props.size}px`
};

const marginTop = (props) => {
    if(!props.marginTop) return 0;
    return `${props.marginTop}px`
};

const iconColor = (props) => {
    if(!props.color) return 'black';
    return props.color
};

export const StyledDiv = styled.div`
    display: flex;
    margin-top: ${(props) => marginTop(props)};
    justify-content: center;
    flex-flow: row;
    align-items: center;
`

export const StyledSvg = styled.svg`
    width: ${(props) => sizeSvg(props)};
    height: ${(props) => sizeSvg(props)};
    fill: ${(props) => iconColor(props)};
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
