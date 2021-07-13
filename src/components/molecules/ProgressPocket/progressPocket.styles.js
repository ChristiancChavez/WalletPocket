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
    margin: 5px;
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
    width: 65px;
    height: 65px;
    border-radius: 8px;
    background: white;
    border:  none;
    box-shadow: 0 0 15px 2px black;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    position: relative;
    margin: 20px 15px;
    &:hover {
        box-shadow: none;
    }
`
export const StyledSpan = styled.div`
position: absolute;
bottom: -30px;
`

export const StyledDivPocket = styled.div`
    display: flex;  
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
`
export const StyledCreatePocket = styled.div`
    width: 65px;
    height: 65px;
    border-radius: 8px;
    background: lightgray;
    border:  none;
    cursor: none;
    position: relative;
    margin: 20px 15px;

`
export const StyledDivContainerCreate = styled.div`
    display: flex;  
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background: white;
    box-shadow: 0 0 15px 2px black;
    border: none;
    border-radius: 6px;
    padding: 10px;
    margin-top: 20px;
    height: 250px;
`

export const StyledCategoryPocketInputs = styled.div`
    display: flex; 
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 0 20px 0 0;
`

export const StyledCategoryPocketButtons = styled.div`
    display: flex;
    flex-flow: column nowrap;
`
