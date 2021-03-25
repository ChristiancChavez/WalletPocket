import styled from 'styled-components';

const fonSizeDefault = "16px";
const fonWeightDefault = 600;
const fontSize = props => {
    if(!props.fontSize) {
        return fonSizeDefault;
    }
    return props.fontSize
}

const fontWeight = props => {
    if(!props.weight) {
        return fonWeightDefault;
    }
    return props.weight
}

const StyledQuantity = styled.span`
    background: transparent;
    color: #25265E;
    font-size: ${props => fontSize(props)};
    font-weight: ${props => fontWeight(props)};
`

export default StyledQuantity;
