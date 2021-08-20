import styled  from 'styled-components';

const defaultPercetage = 0;
const percentageCalc = (props) => {
    if(! props.percentage){
        return defaultPercetage;
    }
    return `${props.percentage}%`;
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
    border-radius: 8%;
    border: 1px solid gray;
    background: white;
    height: 70px;
    width: 70px;
    position: relative;
`
export const StyledSvgBar = styled.svg`
    width: 70px;
    background: #F9C70C;
    border-radius: 10%;
    height: 0;
    transform: rotateX(360deg);
    position: absolute;
    bottom: 0;
    left: 0;
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
