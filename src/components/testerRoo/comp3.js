import React, { Fragment as Frag } from 'react';
import Comp4 from './comp4';

const Comp3 = (props) => {
	const { message } = props;
	return (
		<Frag>
			<h1>
				{message}
			</h1>
			<Comp4 message="And this is level four." />
		</Frag>
	);
};

export default Comp3;
