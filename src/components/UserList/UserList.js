import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers, getRols, deleteUser } from '../storage/actionCreators.js';

//Styles
import './UserList.scss';

class UserList extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			rols: {}
		};

		this.customReducer = this.customReducer.bind(this);
		this.handlerDelete = this.handlerDelete.bind(this);
	}
	customReducer (rol) {
		const newRol = {};
		if (this.state.rols[rol._id] == undefined) {
			Object.assign(newRol, this.state.rols, {[rol._id] : rol.label});

			this.setState({rols: newRol});
		}

	}
	handlerDelete(e){
		this.props.deleteUser(e.target.id);
	}
	componentWillMount() {
		if (this.props.userListResponse.length == 0) {
			this.props.getUsersList();
			this.props.getRols();
		}
	}
	componentWillReceiveProps(nextProps) {
		nextProps.apiRols.map((rol) => {
			this.customReducer(rol);
		});
	}
	render () {
		const { userListResponse } = this.props;
		let list;
		if (userListResponse.length > 0 ) {
			list = (
				userListResponse.map((user) => {
					if (user.rol) {
						return (
							<tr key={user._id}>
								<td>{user.name}</td>
								<td>{user.lastName}</td>
								<td>{user.mail ? user.mail : user.mails[0]}</td>
								<td>{this.state.rols[user.rol] ? this.state.rols[user.rol] : this.props.getRols()}</td>
								<td><i onClick={this.handlerDelete} title="Delete" id={user._id} className="delete fa fa-eraser" aria-hidden="true"></i></td>
							</tr>
						);
					}else{
						return (
							<tr key={user._id}>
								<td>{user.name}</td>
								<td>{user.lastName}</td>
								<td>{user.mail ? user.mail : user.mails[0]}</td>
								<td>Rol is not defined</td>
								<td><i onClick={this.handlerDelete} title="Delete" id={user._id} className="delete fa fa-eraser" aria-hidden="true"></i></td>
							</tr>
						);
					}
				})
			);
		}
		return (
			<table className="table  table-bordered table-hover user-list">
				<thead className="table-inverse">
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Rol</th>
						<th>Options</th>
					</tr>
				</thead>
				<tbody>
					{list}
				</tbody>
			</table>
		);
	}

}

const mapDispatchToProps = (dispatch) => {
	return{
		getUsersList: bindActionCreators(getUsers, dispatch),
		getRols: bindActionCreators(getRols, dispatch),
		deleteUser: bindActionCreators(deleteUser, dispatch)
	};
};

const mapStateToProps = ({mainReducer}) => {
	return{
		userListResponse: mainReducer.userListResponse,
		apiRols: mainReducer.apiRols
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);