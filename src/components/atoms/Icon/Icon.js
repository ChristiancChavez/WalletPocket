import React from 'react';
// Dependencies
import PropTypes from 'prop-types';
// Components
import StyledSvg from './icon.styles';

const Icon = ({ name, onClick = () => {} }) => (
    <StyledSvg
        onClick={onClick}
    >
        <use xlinkHref={`#icon-${name}`} />
    </StyledSvg>
);

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func
};

export default Icon;
