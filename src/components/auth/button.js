import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
	const { children } = props;
	return (
		<button>{children}</button>
	);
};

Button.propTypes = {
	children: PropTypes.oneOf(['Bulldog', 'Cairn'])
};

Button.defaultProps = {
	children: 'Cairn'
};

export default Button;
