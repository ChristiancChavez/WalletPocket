import styled from 'styled-components';
import background from './Helpers/Images/backgorund.png';

export const StyledAppContainer = styled.div`
    width: 650px;
    height: 500px;
    padding: 50px 0;
    border: 8px solid black;
    box-shadow: 0 0 15px 2px grey;
    border-radius: 12px;
    margin: 30px auto;
    text-align: center;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: 650px 650px;
`

export const StyledDivTitle = styled.div`
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translate(-50%, 50%);
    width: 100%;
`
