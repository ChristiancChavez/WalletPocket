import  styled from 'styled-components';


const StyledSvg = styled.svg`
    width: 30px;
    height: 30px;
    fill: gray;
    display: inline-block;
    stroke-width: 0;
    stroke: black;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &:hover {
        fill: #F9C70C;
    }
`

export default StyledSvg;
