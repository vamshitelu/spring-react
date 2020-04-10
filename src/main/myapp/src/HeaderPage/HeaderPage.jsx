import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './HeaderPage.css';

class HeaderPage extends React.Component {

	render(){
		let user = JSON.parse(localStorage.getItem('user'));
		return(
			<div className="header">
				<div className="headerText">
					Hi, {user.firstName+' '+user.lastName},			
					<Link className="logoutText" to="/login">Logout</Link>
				</div>
			</div>
		)
	}
}

function mapState(state){
	return {}
}

const actionCreators = {
}

const connectedHeaderPage = connect(mapState, actionCreators)(HeaderPage);
export { connectedHeaderPage as HeaderPage};