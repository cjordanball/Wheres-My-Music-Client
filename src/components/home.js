import React from 'react';
import { graphql } from 'react-apollo';
import fetchScores from '../queries/fetchScores';
import LandingPage from './landingPage';


const Home = (props) => {
	const { data: { scores } } = props;
	console.log(scores);
	return scores ? (
		<div>
			<h3>Where&apos;s My Music?</h3>
			<LandingPage />
		</div>
	) : '';
};

export default graphql(fetchScores)(Home);
