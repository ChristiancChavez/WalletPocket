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
    background: rgba(80, 80, 80, 0.6);
    position: absolute;
    width: 100px;
    height: 50px;
    display: flex; 
    flex-flow: column nowrap; 
    justify-content: center;
    align-items: center;
    z-index: 20;
    top: 0;
    left: 0;
`
