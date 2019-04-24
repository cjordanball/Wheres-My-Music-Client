import React from 'react';
import PropTypes from 'prop-types';

const Box = (props) => {
	const { breed } = props;

	return (
		<h1>{breed.name}</h1>
	);
};

function lengthChecker(propGroup, key, componentName, type, prop) {
	if (typeof propGroup[key] === 'string') {
		return propGroup[key].length > 8 ? null : new Error(`Item ${key} has failed.`);
	}
	return new Error(`Item ${key} is not a string;`);
}

Box.propTypes = {
	breed: PropTypes.objectOf(lengthChecker)
};

export default Box;
