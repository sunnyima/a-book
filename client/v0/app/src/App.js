import React from 'react';
import { Route, Router,Redirect } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Layout from './layouts/Layout';
import PageNotFound from './pages/PageNotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

const customHistory = createBrowserHistory();

function App() {
  return (
    <Router history={customHistory}>
		  <Route path="/" component={Layout}/>		
		  <Redirect from='*' to='/' />
	  </Router>    
  );
}

export default App;
