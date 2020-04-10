import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({component: Component, ...rest}) =>(
	
	<Route {...rest} render={props => {
		const currentUser = JSON.parse(localStorage.getItem('user'));

		if(currentUser === null){
			return <Redirect to={{pathname: '/login', state: {from: props.location} }}/>
		}else{
			const userRole = currentUser.authorities[0].authority;
			if('admin' === userRole){
				return <Component {...props} />
			}else{
				return <Redirect to={{pathname: '/noaccess' }}/>
			}
		} 
		
	}} />
)