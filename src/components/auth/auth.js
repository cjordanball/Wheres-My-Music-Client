import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import LogIn from './login';
import SignUp from './signup';
import CallToAction from './callToAction';

const AuthComponent = (props) => {
	const { match: { url } } = props;
	return (
		<div>
			<h1>Welcome to the Auth Page!</h1>
			<h3>What do you want to do?</h3>
			<Link to="/auth/login">Log In</Link>
			<Link to="/auth/signup">Sign Up</Link>

			<Switch>
				<Route path={`${url}/signup`} component={SignUp} />
				<Route path={`${url}/login`} component={LogIn} />
				<Route path={url} exact component={CallToAction} />
			</Switch>
		</div>
	);
};

export default AuthComponent;
