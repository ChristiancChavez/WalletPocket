import styled from 'styled-components'

const defaultSize = 15;
const buttonSize = props => {
 if(!props.variantStyle) return `${defaultSize}px`; 
}

const StyledInput = styled.input`
    background: transparent;
    border: none;
    padding: 5px 15px 5px 3px ;
    color: black;
    border-bottom: 1px solid lightgray;
    outline: none;
    width: ${props => props => buttonSize(props)};
    height: ${props => props => buttonSize(props)};
`
export default StyledInput;
