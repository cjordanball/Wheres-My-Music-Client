import React from 'react';
import { NavLink } from 'react-router-dom';
import styling from './headComponent.css';

const HeadComponent = () => (
	<div className={styling.container}>
		<div className={styling.title}>
			<div className={styling.headline}>Where&apos;s My Music?</div>
		</div>
		<div className={styling.links}>
			<nav>
				<div className={styling.link}>
					<NavLink to="/" exact activeClassName={styling.active}>Home</NavLink>
				</div>
				<div className={styling.link}>
					<NavLink to="/auth" exact activeClassName={styling.active}>Sign In</NavLink>
				</div>
				<div className={styling.link}>
					<NavLink to="/scores" exact activeClassName={styling.active}>View Music</NavLink>
				</div>
			</nav>
		</div>
	</div>
);

export default HeadComponent;
