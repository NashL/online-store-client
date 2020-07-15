import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { CookiesProvider } from 'react-cookie';


import './App.scss'
import Users from './components/Users';

const client = new ApolloClient({
  uri: 'http://localhost:8080/query'
  // uri: 'https://gonline-store.rj.r.appspot.com'
  // uri: 'https://48p1r2roz4.sse.codesandbox.io',
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <CookiesProvider>
      <Users />
      <App/>
    </CookiesProvider>
  </ApolloProvider>,
  document.getElementById('root')
);