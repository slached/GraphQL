import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/Static/Style/Global.css'
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                clients: {
                    merge(existing,incoming){
                        return incoming
                    }
                },
                projects: {
                    merge(existing,incoming){
                        return incoming
                    }
                }
            }
        }
    }
});

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: cache
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
);

