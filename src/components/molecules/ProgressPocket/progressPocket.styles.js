import styled  from 'styled-components';

const percentageCalc = (props) => {
    if(! props.percentage){
        return 430
    }
    return `calc( 430 - ( 430 * ${props.percentage} ) / 100)`
}

export const StyledDivBar = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: column;
    align-items: center;
    position: relative;
`

export const StyledContainerSvg = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-items: center;
`
export const StyledSvgBar = styled.svg`
    width: 70px;
`
export const StyledCircleProgress = styled.circle`
    width: 100%;
    height: 100%;
    stroke: #F9C70C;
    stroke-width:15;
    stroke-linecap: round;
    fill: none;
    stroke-dasharray: 430;
    stroke-dashoffset: ${(props) => percentageCalc(props)};

`

export const StyledCircleRail = styled.circle`
    width: 100%;
    height: 100%;
    stroke: lightgray;
    stroke-width:15;
    stroke-linecap: round;
    fill: none;
`
export const StyledCategoryPocket = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 8px;
    background: transparent;
    border:  1px solid lightgray;
    box-shadow: 0 0 15px 2px gray;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    &:hover {
        box-shadow: none;
    }
`
export const StyledSpan = styled.div`
position: absolute;
bottom: -27px;
`
