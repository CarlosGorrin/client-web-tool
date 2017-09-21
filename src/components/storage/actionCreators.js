import axios from 'axios';
import { API_GET_ROLS, SET_REGISTER_RESPONSE, SET_USERLIST_RESPONSE } from './actions';
import { sessionService } from 'redux-react-session';

export function setApiGetRolsTerm(response) {
	return {type: API_GET_ROLS, response};
}

export function setRegisterResponse(response) {
	return {type: SET_REGISTER_RESPONSE, response};
}

export function setUserListResponse(response){
	return {type: SET_USERLIST_RESPONSE, response};
}

export function apiLogin (body) {
	return function () {
		axios.post('http://localhost:3001/api/user/login', body)
		.then( (response) => {
			sessionService.saveSession(`Bearer ${response.data.data.authorization}`);
			sessionService.saveUser(response.data.data.data);
		})
		.catch(function (error) {
			if (error.response) {
				// The request was made and the server responded with a status code
				// that falls out of the range of 2xx
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
			} else if (error.request) {
				// The request was made but no response was received
				// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
				// http.ClientRequest in node.js
				console.log(error.request);
			} else {
				// Something happened in setting up the request that triggered an Error
				console.log('Error', error.message);
			}
		});
	};
}

export function apiLogout () {
	return function () {
		sessionService.deleteSession();
		sessionService.deleteUser();
	};
}

export function apiRegister (body) {
	return function (dispatch) {
		sessionService.loadSession()
		.then((currentSession) => {
			axios({
				method: 'post',
				url: 'http://localhost:3001/api/user',
				data: body,
				headers: {'Authorization': currentSession}
			})
			.then( (response) => {
				dispatch(setRegisterResponse(response.data.data));
				dispatch(getUsers());
			})
			.catch(function (error) {
				if (error.response) {
					// The request was made and the server responded with a status code
					// that falls out of the range of 2xx
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
					dispatch(setRegisterResponse(error.response.data));
				} else if (error.request) {
					// The request was made but no response was received
					// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
					// http.ClientRequest in node.js
					console.log(error.request);
				} else {
					// Something happened in setting up the request that triggered an Error
					console.log('Error', error.message);
				}
			});
		})
		.catch(err => console.log('missing auth token', err));
	};
}

export function getRols () {
	return function (dispatch) {
		sessionService.loadSession()
		.then((currentSession) => {
			axios({
				method: 'get',
				url: 'http://localhost:3001/api/rol',
				headers: {'Authorization': currentSession}
			})
			.then( (response) => {
				dispatch(setApiGetRolsTerm(response.data.data)); 
			})
			.catch(function (error) {
				if (error.response) {
					// The request was made and the server responded with a status code
					// that falls out of the range of 2xx
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				} else if (error.request) {
					// The request was made but no response was received
					// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
					// http.ClientRequest in node.js
					console.log(error.request);
				} else {
					// Something happened in setting up the request that triggered an Error
					console.log('Error', error.message);
				}
			});
		})
		.catch(err => console.log('missing auth token', err));
	};
}

export function getUsers () {
	return function (dispatch) {
		sessionService.loadSession()
		.then((currentSession) => {
			axios({
				method: 'get',
				url: 'http://localhost:3001/api/user',
				headers: {'Authorization': currentSession}
			})
			.then( (response) => {
				dispatch(setUserListResponse(response.data.data)); 
			})
			.catch(function (error) {
				if (error.response) {
					// The request was made and the server responded with a status code
					// that falls out of the range of 2xx
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				} else if (error.request) {
					// The request was made but no response was received
					// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
					// http.ClientRequest in node.js
					console.log(error.request);
				} else {
					// Something happened in setting up the request that triggered an Error
					console.log('Error', error.message);
				}
			});
		})
		.catch(err => console.log('missing auth token', err));
	};
}

export function deleteUser (id) {
	return function (dispatch) {
		sessionService.loadSession()
		.then((currentSession) => {
			axios({
				method: 'delete',
				url: `http://localhost:3001/api/user/${id}`,
				headers: {'Authorization': currentSession}
			})
			.then( () => {
				dispatch(getUsers());
			})
			.catch(function (error) {
				if (error.response) {
					// The request was made and the server responded with a status code
					// that falls out of the range of 2xx
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				} else if (error.request) {
					// The request was made but no response was received
					// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
					// http.ClientRequest in node.js
					console.log(error.request);
				} else {
					// Something happened in setting up the request that triggered an Error
					console.log('Error', error.message);
				}
			});
		})
		.catch(err => console.log('missing auth token', err));
	};
}