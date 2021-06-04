import styled  from 'styled-components';

export const StyledDivPocketsUser = styled.div`
    display: flex; 
    flex-flow: column nowrap;
    align-items: center;
    border: 1px solid gray;
    background: white;
    padding: 0 0 10px 0;
    width: 100%;
    border-radius: 8px;
    position: absolute;
    top: 100%;
    padding-top: 25px;
`

export const StyledDivButtonShowPockets = styled.div`
    margin: 0 0 10px 0;
    position: absolute;
    top: -13%;
    background: white;
    border-radius: 8px;
    &:hover {
        background: lightgray;
    }
`
