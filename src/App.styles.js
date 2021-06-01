import styled from 'styled-components';
import background from './Helpers/Images/backgorund.png';

export const StyledAppContainer = styled.div`
    width: 400px;
    height: 500px;
    padding: 0;
    border: 8px solid black;
    box-shadow: 0 0 15px 2px grey;
    border-radius: 12px;
    margin: 30px auto;
    text-align: center;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: 500px 570px;
`
