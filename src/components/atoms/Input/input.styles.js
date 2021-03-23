import styled from 'styled-components'

const defaultSize = '15px';
const inputSize = props => {
    if(!props.size) {
        return defaultSize;
    } 
    return props.size
}

const textColor = props => {
    if(!props.variantStyle) return 'black';
    let textColor;
    switch(props.variantStyle){
        case "initial":
            textColor = "white";
            break;
        case "pocket":
            textColor = "black";
            break;
        case "addition":
            textColor = "lightgray";
            break;
        default:
            textColor = "black";
    }
    return textColor;
}

const StyledInput = styled.input`
    background: transparent;
    border: none;
    padding: 5px 15px 5px 3px ;
    color: ${props => textColor(props)};
    border-bottom: 1px solid lightgray;
    outline: none;
    width: ${props => inputSize(props)};
`
export default StyledInput;
