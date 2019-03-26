import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import HeadComponent from './common/headComponent/headComponent';
import Home from './home/home';
import Auth from './auth/auth';

const link = new HttpLink({ uri: 'http://localhost:3600/graphql' });

const client = new ApolloClient({
	link,
	cache: new InMemoryCache()
});

const Root = () => (
	<ApolloProvider client={client}>
		<BrowserRouter>
			<div>
				<HeadComponent />
				<Route path="/" exact component={Home} />
				<Route path="/auth" component={Auth} />
			</div>
		</BrowserRouter>
	</ApolloProvider>
);

export default Root;
