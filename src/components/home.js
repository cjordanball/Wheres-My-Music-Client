import React from 'react';
import { graphql } from 'react-apollo';
import fetchScores from '../queries/fetchScores';


const Home = (props) => {
	const { data: { scores } } = props;
	console.log(scores);
	return scores ? (
		<div>
			<h3>Where&apos;s My Music?</h3>
			<h4>{scores[0].name}</h4>
		</div>
	) : '';
};

export default graphql(fetchScores)(Home);
