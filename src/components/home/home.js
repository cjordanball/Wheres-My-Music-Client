import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import fetchScores from '../../queries/fetchScores';
import LandingPage from '../landingPage';
import ScoreLinkComponent from '../common/scoreLink';
import styles from './home.css';


const Home = (props) => {
	const { data: { scores } } = props;
	let scoreList;
	if (scores) {
		scoreList = scores.map(val => (
			<ScoreLinkComponent
				name={val.name}
				composer={val.composer}
				linkURL={val.linkURL}
				key={val.name}
			/>
		));
	}
	return scores ? (
		<div className={styles.container}>

			<LandingPage />
			<div className={styles.scoreHolder}>
				{scoreList}
			</div>
		</div>
	) : '';
};

Home.propTypes = {
	// props: PropTypes.isRequired,
	data: PropTypes.object.isRequired
	// scores: PropTypes.isRequired,
};

export default graphql(fetchScores)(Home);
