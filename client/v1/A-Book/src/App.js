import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './app/reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';


import './styles/styles.css'


import Layout from './app/Layouts/Layout';
import Main from './app/pages/Main';
import Users from './app/pages/Users';
import User from './app/pages/User';
import UsersF from './app/pages/UsersF';
import UserF from './app/pages/UserF'; 

import PageNotFound from './app/pages/PageNotFound';


const store = createStore (
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);


ReactDOM.render(

	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Main}/>
			<Route path="users" component={Users}>
				<Route path=":userId" component={User} />
			</Route >
			<Route path="usersF" component={UsersF}>
				<Route path=":userFId" component={UserF} />
			</Route >
			<Route path="*" component={PageNotFound}/>
		</Route>
	</Router>
	,
	document.getElementById('root'));

