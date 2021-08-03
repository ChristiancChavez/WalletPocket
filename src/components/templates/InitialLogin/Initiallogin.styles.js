import styled from 'styled-components';


export const StyledDivInitialLogin = styled.div`
    display: flex; 
    flex-flow: column nowrap;
    align-items: center;
    justify-items: center;
    margin: 0 auto;
    z-index: 5;
    background: white;
    border-radius: 6px;
    border: none;
    box-shadow: 0 0 15px 2px grey;
    margin-top: 20px;
    > button {
        position: absolute;
        top: 200px;
        right: 10px;
        background: whitesmoke;
        border-radius: 4px;
        box-shadow: 0 0 15px 2px grey;
    }
`
export const StyledLoginRules = styled.div`
    background: white;
    padding: 15px;
    display: flex; 
    flex-flow: column nowrap;
    box-shadow: 0 0 15px 2px grey;
    border-radius: 8px;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    z-index: 50;
`
export const StyledUlRules = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 10px 0;
    > li {
        margin: 5px 0;
    }
`
