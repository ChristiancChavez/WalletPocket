import styled from 'styled-components'

const textSize = props => {
    if(!props.fontSize){
        return '15px'
    }

    let spanText;
    switch(props.fontSize){
        case "user":
            spanText = "18px";
            break;
        case "category":
            spanText = "12px";
            break;
        case "message":
            spanText = "19px";
            break;
        case "title":
            spanText = "20px";
            break;
        case "subtitle":
            spanText = "13px";
            break;
        default:
            spanText = "15px";
    }
    return spanText;

}

const textColor = props => {
    if(!props.color){
        return 'black'
    }

    let spanColor;
    switch(props.color){
        case "message":
            spanColor = "gray";
            break;
        case "subtitle":
            spanColor = "lightgray";
            break;
        default:
            spanColor = "black";
    }
    return spanColor;

}

const textWeight = props => {
    if(!props.weight){
        return 600;
    }

    let spanWeight;
    switch(props.weight){
        case "category":
            spanWeight = 700;
            break;
        case "title":
            spanWeight = 800;
            break;

        default:
            spanWeight = 600;
    }
    return spanWeight;

}

const StyledSpan = styled.span`
    font-size: ${props => textSize(props)};
    color: ${props => textColor(props)};
    font-weight: ${props => textWeight(props)};
`

export default StyledSpan;