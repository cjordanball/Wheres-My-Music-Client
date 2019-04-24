import React from 'react';

const withClassFunc = (WrappedComp, classes) => {
	return () => (
		<div className={classes}>
			<WrappedComp />
		</div>
	);
};

export default withClassFunc;
