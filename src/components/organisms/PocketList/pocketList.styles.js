import styled from 'styled-components';

export const StyledContainerPocket = styled.div`
    display: flex;
    width: 80%;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    position: relative;
    box-shadow: 0 0 15px 2px grey;
    border-radius: 8px;
    margin: 15px auto;
    padding: 5px 10px;
    background: white;
    :hover {
        transform: scale(1.1, 1.1);
    }
`

export const StyledContainerMessage = styled.div`
    position: absolute;
    top: 60px;
    left: 20%;
    z-index: 10;
`


export const StyledDivMessageReachGoal = styled.div`
    background: rgba(10, 10, 10, 0.9);
    width: 435px;
    height: 95px;
    display: flex; 
    flex-flow: column nowrap; 
    justify-content: center;
    align-items: center;
    z-index: 20;
    top: 6%;
    left: 2%;
    position: absolute;
    border-radius: 8px;
`