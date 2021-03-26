import styled  from 'styled-components';

const withoutBorder = 'none';

const border = props => {
    if(!props.border) {
        return withoutBorder;
    }
    return props.border;
}
const borderHover = props => {
    if(!props.borderHover) {
        return withoutBorder;
    }
    return props.borderHover;
}

const StyledButonIcon = styled.button`
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    width: 50px;
    height: 50px;
    padding: 5px;
    border: ${props => border(props)};
    border-radius: 5px;
    &:hover {
        border: ${props => borderHover(props)};
    }
`

export default StyledButonIcon;
