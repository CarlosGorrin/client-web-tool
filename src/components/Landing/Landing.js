import React from 'react';
import { connect } from 'react-redux';
import { apiLogout } from '../storage/actionCreators.js';

//Components
import Navigation from '../Navigation/Navigation.js';
import RegisterForm from '../RegisterForm/RegisterForm.js';
import UserList from '../UserList/UserList.js';

//styles
import './Landing.scss';

const Landing = ({ user, dispatch }) => (
	<div className="row main-container landing">
		<Navigation />
		<div className="col main">
			<header className="clearfix">
				<div className="float-right">
					<p className="user m-0">
						{`${user.name} ${user.lastName}`} 
						<a className="ml-3" href="#"><i onClick={() => dispatch(apiLogout())}  className="fa fa-sign-out fa-2x" aria-hidden="true"></i></a>
					</p>
				</div>
			</header>
			<UserList />
			<button type="button" className="btn btn-primary mr-2" data-toggle="modal" data-target="#register-form">
				Add User
			</button>
			<div className="modal fade" id="register-form" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Register Form</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<RegisterForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

const { object } = React.PropTypes;

Landing.propTypes = {
	user: object
};

const mapStateToProps = (state) => {
	return {
		user: state.session.user
	};
};

export default connect(mapStateToProps)(Landing);