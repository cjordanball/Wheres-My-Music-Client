import React from 'react';
import PropTypes from 'prop-types';
import styles from './scoreTile.css';

const ScoreLinkComponent = (props) => {
	const { name, composer, linkURL } = props;
	return (
		<a target="_self" href={linkURL}>
			<div className={styles.link}>
				<h3>{name}</h3>
				<h4>{`By: ${composer}`}</h4>
			</div>
		</a>
	);
};

ScoreLinkComponent.propTypes = {
	name: PropTypes.string.isRequired,
	composer: PropTypes.string.isRequired,
	linkURL: PropTypes.string.isRequired
};

export default ScoreLinkComponent;
