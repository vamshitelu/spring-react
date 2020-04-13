import React from 'react';
import { connect } from 'react-redux';

import {HeaderPage} from '../HeaderPage';
import { NavbarPage } from '../NavbarPage';

class AdminPage extends React.Component{

	render(){
		return(
			<div>
				<HeaderPage />
				<NavbarPage />
				<div>Admin Page!</div>
			</div>
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
