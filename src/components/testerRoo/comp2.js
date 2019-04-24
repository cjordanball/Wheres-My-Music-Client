import React, { Fragment as Frag } from 'react';
import Comp3 from './comp3';

const Comp2 = (props) => {
	const { message } = props;
	return (
		<Frag>
			<h1>
				{message}
			</h1>
			<Comp3 message="And this is level three." />
		</Frag>
	);
};

export default Comp2;
