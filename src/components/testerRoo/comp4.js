import React, { Fragment as Frag, useEffect, useContext } from 'react';
import TestContext from '../../context/testContext';

const Comp4 = (props) => {
	const { message } = props;
	const testMyContext = useContext(TestContext);

	useEffect(() => {
		console.log('UE: ', testMyContext);
	});

	return (
		<Frag>
			<h1>
				{message}
			</h1>
			<h3>
				{`He is ${testMyContext.age}.`}
			</h3>
		</Frag>
	);
};

export default Comp4;
