import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import HeadComponent from './common/headComponent';
import Home from './home';
import Auth from './auth/auth';
import ScoreDisplay from './scoreDisplay';
import styles from './root.css';

const link = new HttpLink({ uri: 'http://localhost:3600/graphql' });

const client = new ApolloClient({
	link,
	cache: new InMemoryCache()
});

const Root = () => (
	<ApolloProvider client={client}>
		<BrowserRouter>
			<Fragment>
				<HeadComponent />
				<Route path="/" exact component={Home} />
				<Route path="/auth" component={Auth} />
				<Route path="/scores" component={ScoreDisplay} />
			</Fragment>
		</BrowserRouter>
	</ApolloProvider>
);

export default Root;
