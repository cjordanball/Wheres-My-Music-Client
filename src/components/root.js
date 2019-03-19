import React from 'react';
// import {
// 	Router,
// 	Route, hashHistory
// } from 'react-router';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import Home from './home';

const link = new HttpLink({ uri: 'http://localhost:3600/graphql' });

const client = new ApolloClient({
	link,
	cache: new InMemoryCache()
});

const Root = () => (
	<ApolloProvider client={client}>
		<Home />
	</ApolloProvider>
);

export default Root;
