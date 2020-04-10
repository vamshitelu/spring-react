import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

import './RegisterPage.css';

class RegisterPage extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			user: {
				firstName: '',
				lastName: '',
				userName: '',
				password: '',
				mobile: '',
				email:''
			},
			submitted: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){

		const { name, value } = event.target;
		const { user } = this.state;

		this.setState({
			user: {
				...user, [name]: value
			}
		});
	}

	handleSubmit(event){
		event.preventDefault();

		this.setState({submitted: true});
		const { user } = this.state;
		if(user.firstName && user.lastName 
			&& user.userName && user.password
			&& user.email && user.mobile){
			this.props.register(user);
		}
	}

	render(){
		// const { registering } = this.props; // eslint-disable-next-line
		const { user, submitted } = this.state;
		return(
			<div>
			<div className="header"></div>
			<div className="col-md-3 col-md-offset-8">
				<form name="form" onSubmit={this.handleSubmit} className="margintop">
					<div className={'form-group' + (submitted && !user.firstName ? 'has-error' : '')}>
						<label htmlFor="firstName">FirstName</label>
						<input type="text" className="form-control" name="firstName"
							value={user.firstName} onChange={this.handleChange} />
						{submitted && !user.firstName &&
							<div className="help-block">FirstName is required</div>
						}
					</div>
					<div className={'form-group' + (submitted && !user.lastName ? 'has-error' : '')}>
						<label htmlFor="lastName">LastName</label>
						<input type="text" className="form-control" name="lastName"
							value={user.lastName} onChange={this.handleChange} />
						{submitted && !user.lastName &&
							<div className="help-block">LastName is required</div>
						}
					</div>
					<div className={'form-group' + (submitted && !user.userName ? 'has-error' : '')}>
						<label htmlFor="userName">UserName</label>
						<input type="text" className="form-control" name="userName"
							value={user.userName} onChange={this.handleChange} />
						{submitted && !user.userName &&
							<div className="help-block">UserName is required</div>
						}
					</div>
					<div className={'form-group' + (submitted && !user.password ? 'has-error' : '')}>
						<label htmlFor="password">Password</label>
						<input type="password" className="form-control" name="password"
							value={user.password} onChange={this.handleChange} />
						{submitted && !user.password &&
							<div className="help-block">Password is required</div>
						}
					</div>
					<div className={'form-group' + (submitted && !user.mobile ? 'has-error' : '')}>
						<label htmlFor="mobile">Mobile</label>
						<input type="text" className="form-control" name="mobile"
							value={user.mobile} onChange={this.handleChange} />
						{submitted && !user.mobile &&
							<div className="help-block">Mobile is required</div>
						}
					</div>
					<div className={'form-group' + (submitted && !user.email ? 'has-error' : '')}>
						<label htmlFor="email">Email</label>
						<input type="text" className="form-control" name="email"
							value={user.email} onChange={this.handleChange} />
						{submitted && !user.email &&
							<div className="help-block">Email is required</div>
						}
					</div>
				
					<div className="form-group">
						<Link to="/login" className="btn btn-link marginleft">Cancel</Link>
						<button className="btn btn-primary floatRight">Register</button>
					</div>
				</form>
			</div>
			</div>
		); 
	}
}

function mapState(state){
	// const { registering } = state.registration;
	return {};
}

const actionCreators = {
	register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };