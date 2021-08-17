import styled  from 'styled-components';

export const StyledDivPocketsUser = styled.div`
    display: flex; 
    flex-flow: column nowrap;
    align-items: center;
    border: 1px solid gray;
    background: white;
    padding: 0 0 10px 0;
    width: 95%;
    height: 370px;
    border-radius: 8px;
    position: absolute;
    top: 18%;
    left: 2%;
    padding-top: 25px;
    box-shadow: 0 0 15px 2px grey;
    overflow-y: auto;
`

export const StyledDivButtonShowPockets = styled.div`
    margin: 0 0 10px 0;
    position: absolute;
    bottom: 15px;
    left: 46%;
    background: white;
    border-radius: 8px;
    &:hover {
        background: lightgray;
    }
`
