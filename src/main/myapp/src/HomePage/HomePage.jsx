import React  from 'react';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import {HeaderPage} from '../HeaderPage';
import './HomePage.css';
import { NavbarPage } from '../NavbarPage';

class HomePage extends React.Component{
	
	componentDidMount(){
		this.props.getUsers();
	}

	handleDeleteUser(id){
		return (e) => this.props.deleteUser(id)
	}

	render(){
		const { user, users } = this.props;
		return(
			<div>
			<HeaderPage />
			<NavbarPage />
			<div className="col-md-6 col-md-offset-3">
			<h1>Hi, {user.firstName}!</h1>
			<p>Your'e logged in with React!!</p>
			<h3>All register users:</h3>
			{users.loading && <em>Loading users...</em>}
			{users.error && <span className="text-danger">ERROR: {users.error}</span>}
			{users.items && 
				<ul>
					<table border="1px">
						<thead>
							<tr>
								<th>id</th>
								<td>Name</td>
								<td>Delete</td>
							</tr>
						</thead>
						<tbody>
						{users.items.map((user,index) =>
						<tr key={user.id}>
							<td>
						<span>{user.id}</span>
							</td>
							<td>
								<li key={(user.id).toString()}>{user.firstName+' '+user.lastName}</li>
							</td>
							<td>
								<button className="btn btn-link" 
									onClick={this.handleDeleteUser(user.id)}>delete</button>
							</td>
						</tr>
					)}
					</tbody>
					</table>
				</ul>
			}
			</div>
			</div>
		);
	}
}

function mapState(state){
	const { users, authentication} = state;
	const { user } = authentication;
	return {user, users};
}

const actionCreators = {
	getUsers: userActions.getAll,
	deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage};