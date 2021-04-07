import styled from "styled-components";

const StyledSvg = styled.svg`
    width: 30px;
    height: 30px;
    fill: black;
    display: inline-block;
    stroke-width: 0;
    stroke: black;
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
