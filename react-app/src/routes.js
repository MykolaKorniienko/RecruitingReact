import React from 'react';
import { Router, Route, Redirect, IndexRoute } from 'react-router';

import App from './components/App';
import UserList from './components/UserList';
import UserEdit from './components/UserEdit';
import SearchPage from './components/SearchPage';
import SearchList from './components/SearchList';

 
export default (
	<Router>
		<Redirect from="/" to="users" />
		<Route path="/" component={App}>
			<Route path="users">
				<IndexRoute component={UserList} />
				<Route path="add" component={UserEdit} />
				<Route path=":userId" component={UserEdit} />
			</Route>
			<Route path="search" component={SearchPage} />
			<Route path="search-list" component={SearchList} />
		</Route>
	</Router>
);