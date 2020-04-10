import React from 'react';
import { connect } from 'react-redux';

class AdminPage extends React.Component{

	render(){
		return(
			<div>Admin Page!</div>
		)
	}
}

function mapState(state){
	return {};
}

const actionCreators = {

}

const connectedAdminPage = connect(mapState, actionCreators)(AdminPage);
export { connectedAdminPage as AdminPage};


