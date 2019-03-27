import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import fetchScores from '../../queries/fetchScores';
import ScoreTileComponent from '../common/scoreTile';
import styles from './scoreDisplay.css';


const ScoreDisplay = (props) => {
	const { data: { scores } } = props;
	let scoreList;
	if (scores) {
		scoreList = scores.map(val => (
			<ScoreTileComponent
				name={val.name}
				composer={val.composer}
				linkURL={val.linkURL}
				key={val.name}
			/>
		));
	}
	return scores ? (
		<div className={styles.container}>
			{scoreList}
		</div>
	) : '';
};

ScoreDisplay.propTypes = {
	// props: PropTypes.isRequired,
	// data: PropTypes.object.isRequired
	// scores: PropTypes.isRequired,
};

export default graphql(fetchScores)(ScoreDisplay);
