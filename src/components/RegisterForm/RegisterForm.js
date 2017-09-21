import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { apiRegister, getRols } from '../storage/actionCreators.js';

//Styles
import './RegisterForm.scss';


class RegisterForm extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			user:{
				name: '',
				lastName: '',
				mail: '',
				password: '',
				rol: 'default'
			}
		};
		this.handlerOnChange = this.handlerOnChange.bind(this);
		this.handlerRegister = this.handlerRegister.bind(this);
	}
	handlerOnChange(e) {
		const { value, id } = e.target;
		const { user } = this.state;
		user[id] = value;
		this.setState({ user });
	}
	handlerRegister(e){
		e.preventDefault();
		const body = {
			name: this.state.user.name,
			lastName: this.state.user.lastName,
			mail: this.state.user.mail,
			password: this.state.user.password,
			rol: this.state.user.rol
		};
		this.props.register(body);
		const def = {
			name: '',
			lastName: '',
			mail: '',
			password: '',
			rol: 'default'
		};
		this.setState({user: def});
	}
	componentDidMount() {
		if (this.props.apiRols.length == 0) {
			this.props.getRols();
		}
	}
	render (){
		const { user: { name, lastName, mail, password, rol } } = this.state;
		const { apiRols, registerResponse } = this.props;

		let rols;
		if (apiRols.length > 0) {
			rols = (
				apiRols.map((rol) => {
					return (
						<option key={rol._id} value={rol._id}>{rol.label}</option>
					);
				})
			);
		}

		let success;
		if (registerResponse._id) {
			success = (
				<div className="alert alert-success" role="alert">
					<strong>Well done!</strong> {`User ${registerResponse.name} ${registerResponse.lastName} added.`}
				</div>
			);
		}else if (registerResponse.message){
			success = (
				<div className="alert alert-danger" role="alert">
					<strong>Warning!</strong> {`${registerResponse.message}.`}
				</div>
			);
		}else{
			success = (
				<div className="alert alert-success no-display" role="alert">
					placeholder to animate
				</div>
			);
		}
		return (
			<form onSubmit={this.handlerRegister} className="register-form">
				<div className="input-group mb-4">
					<input id='name' type="text" value={name} onChange={this.handlerOnChange} name="name" className="form-control" placeholder="Name" aria-describedby="basic-addon1" />
				</div>
				<div className='input-group mb-4'>
					<input type='text' value={lastName} onChange={this.handlerOnChange} className='form-control' id='lastName' placeholder="Last Name" />
				</div>
				<div className='input-group mb-4'>
					<input type='text' value={mail} onChange={this.handlerOnChange} className='form-control' id='mail' placeholder='Example@test.com' />
				</div>
				<div className='input-group mb-4'>
					<select id="rol" onChange={this.handlerOnChange} value={rol} className="custom-select">
						<option value="default">Select your main rol</option>
						{rols}
					</select>
				</div>
				<div className='input-group mb-4'>
					<input type='password' value={password} onChange={this.handlerOnChange} placeholder="********" className='form-control' id='password' />
				</div>
				<div className='form-group'>
					<button type="submit" className="btn btn-primary">Add User</button>
				</div>
				{success}
			</form>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		register: bindActionCreators(apiRegister, dispatch),
		getRols: bindActionCreators(getRols, dispatch)
	};
};

const mapStateToProps = ({mainReducer}) => {
	return {
		apiRols: mainReducer.apiRols,
		registerResponse: mainReducer.registerResponse
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);