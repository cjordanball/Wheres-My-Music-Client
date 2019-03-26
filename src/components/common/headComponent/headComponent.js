import React, { useState } from 'react';
import { Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import styling from './headComponent.css';

const HeadComponent = (props) => {
	const [atHome, setAtHome] = useState(false);

	const goHome = () => {
		console.log('Howdy!');
		setAtHome(!atHome);
		props.history.push('/');
	};

	return atHome ? (
		<div className={styling.component}>
			<span>Where&apos;s My Music?</span>
		</div>
	) : (
		<div className={styling.component}>
			<span>Where&apos;s My Music?</span>
			<Router>
				<span onClick={goHome}>Return Home</span>
			</Router>
		</div>
	);
};

HeadComponent.propTypes = {
};

export default HeadComponent;
