import React from 'react';
import { connect } from 'react-redux';
import { apiLogin } from '../storage/actionCreators.js';
import { bindActionCreators } from 'redux';

//Styles
import './Login.scss';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				mail: '',
				password: ''
			}
		};

		this.handlerOnChange = this.handlerOnChange.bind(this);
		this.handlerLogin = this.handlerLogin.bind(this);
	}
	handlerOnChange(e) {
		const { value, id } = e.target;
		const { user } = this.state;
		user[id] = value;
		this.setState({ user });
	}
	handlerLogin(e){
		e.preventDefault();
		const body = {
			mail: this.state.user.mail,
			password: this.state.user.password
		};
		this.props.login(body);
	}

	render() {
		const { user: { mail, password } } = this.state;
		return (
			<div className="row main-container login">
				<div className="col d-flex justify-content-center align-items-center">
					<div className="login-form col-xs-11 col-md-4 px-5 py-5">
						<form onSubmit={this.handlerLogin}>
							<div className="input-group mb-4">
								{/*<span className="input-group-addon" id="basic-addon1">@</span>*/}
								<input id='mail' type="text" value={mail} onChange={this.handlerOnChange} name="username" className="form-control" placeholder="username" aria-describedby="basic-addon1" />
							</div>
							<div className="input-group mb-4">
								{/*<span className="input-group-addon" id="basic-addon1">*</span>*/}
								<input id='password' type="password" value={password} onChange={this.handlerOnChange} name="password" className="form-control" placeholder="password" aria-describedby="basic-addon1" />
							</div>
							<button className="py-2" type="submit">LOGIN</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

const { func } = React.PropTypes;

Login.propTypes = {
	login: func.isRequired
};

const mapDispatchToProps = (dispatch) => {
	return{
		login: bindActionCreators(apiLogin, dispatch)
	};
};

export default connect(null, mapDispatchToProps)(Login);