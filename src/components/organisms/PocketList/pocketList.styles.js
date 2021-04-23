import styled from 'styled-components';

export const StyledContainerPocket = styled.div`
    display: flex;
    width: 85%;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    position: relative;
    box-shadow: 0 0 15px 2px grey;
    border-radius: 8px;
    margin: 15px auto;
    padding: 5px 10px;
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