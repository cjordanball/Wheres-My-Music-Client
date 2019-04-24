import React from 'react';

const WithClass = comp => (
	<div className={comp.classes}>
		{comp.children}
	</div>
);

export default WithClass;
