import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Signup from './pages/Signup';
import Login from './pages/Login';
import SelectMovies from './pages/selectmovies';
import TopFiveOrder from './pages/topfiveorder';
import Navbar from './components/Navbar';
import Match from './pages/match';
import './utils/app.css'

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
//updated route to login page 
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
        <div className="flex-column justify-flex-start min-100-vh">
          <Navbar />
          <div className = 'container'>
          <Routes>
             <Route 
                path= "/" 
                element={<Login />}
              />
              <Route 
                path="/signup" 
                element={<Signup />}
              />
              <Route 
              path='/selectMovies' 
              element={<SelectMovies />} 
              />
              <Route 
              path='/topFive' 
              element={<TopFiveOrder />} 
              />
              <Route 
              path='/match'
              element={<Match />}
              />
            <Route 
              path='*' 
              element={<h1 className="display-2">Wrong page!</h1>}
            />
          </Routes>
          </div>
          </div>
        </>
      </Router>
  
    </ApolloProvider>
  );
}

export default App;
