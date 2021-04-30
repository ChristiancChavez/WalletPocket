import styled from 'styled-components';

export const StyledBackground = styled.div`
    width: 100%;
    height: 100%;
`
export const StyledPartBackground = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;

    ${(props) => {
        switch(props.class) {
            case 'orange':
                return `
                    top: 0;
                    right: 0;
                    z-index: 2;
                    width: 90%;
                `
            case 'purple':
                return `
                    top: 0;
                    right: 0;
                    z-index: 3;
                    width: 50%;
                `
            case 'turquoise':
                return`
                    left: 0;
                    z-index: 0;
                    top: 0;
                `
            case 'blue':
                return `
                    bottom: 0;
                    left: 0;
                    z-index: 4;
                    height: 60%;
                ` 
            default: 
            return `
                left: 0;
                z-index: 1;
                top: -73px;
            `
        }
    }}
`
