import styled from 'styled-components'

export const StyledDivPocketContainer = styled.div`
    display: flex; 
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: 20px 15px;
    position: relative;
`

export const StyledDivPockets = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    margin: 20px;
    width: 400px;
    height: 270px;
`

export const StyledDivCreatePocket = styled.div`
    position: absolute;
    top: 18%;
    left: 0;
    width: 100%;
`
