import React from 'react';
import { graphql } from 'react-apollo';
import fetchScores from '../queries/fetchScores';


const Home = (props) => {
	console.log(props);
	return (
		<div>
			<h3>Where&apos;s My Music?</h3>
		</div>
	);
};

export default graphql(fetchScores)(Home);
