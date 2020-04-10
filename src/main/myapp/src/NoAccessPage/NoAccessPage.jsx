import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NoAccessPage extends React.Component {

	render(){
		return(
			<div>
				<h2>User Not authorized to access this page!</h2>
				<br/>
				<Link to="/">HomePage</Link>
			</div>
		)
	};
}

function mapState(state){
	return {};
}

const actionCreator = {

}

const connectedNoAccessPage = connect(mapState, actionCreator)(NoAccessPage);
export { connectedNoAccessPage as NoAccessPage};