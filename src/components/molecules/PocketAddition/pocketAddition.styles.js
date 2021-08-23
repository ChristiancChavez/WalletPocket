import styled from 'styled-components'

export const StyledContainerAddition = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    position: relative;
`

export  const StyledContainerIcons = styled.div`
    display: flex; 
    flex-flow: column nowrap;
    align-content: space-between;
    justify-items: center;
`

export const StyledQuantityAdded = styled(StyledContainerAddition)`
    position: absolute;
    top: 15px;
    right: 57%;
    background: white;
    box-shadow: 0 0 15px 2px grey;
    padding: 5px 10px;
    border-radius: 4px;
    width: 250px;
`
export const StyledDivMessageReachGoal = styled.div`
    background: rgba(8, 8, 8, 0.7);
    width: 383px;
    height: 95px;
    display: flex; 
    flex-flow: column nowrap; 
    justify-content: flex-start;
    align-items: flex-end;
    z-index: 20;
    top: -70%;
    left: -360px;
    position: absolute;
    border-radius: 8px;
    padding: 2px 35px 2px 30px;
`

