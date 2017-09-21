import { API_GET_ROLS, SET_REGISTER_RESPONSE, SET_USERLIST_RESPONSE } from './actions';
import { sessionReducer } from 'redux-react-session';
import { combineReducers } from 'redux';

const DEFAULT_STATE = {
	apiRols: [],
	registerResponse: {},
	userListResponse: []
};

//Reducers:
const apiGetRolsResponse = (state, action) => {
	const newState = {};
	Object.assign(newState, state, {apiRols: action.response});

	return newState;
};

const apiRegisterResponse = (state, action) => {
	const newState = {};
	Object.assign(newState, state, {registerResponse: action.response});

	return newState;
};

const apiUserListResponse = (state, action) => {
	const newState = {};
	Object.assign(newState, state, {userListResponse: action.response});

	return newState;
};

const mainReducer = (state = DEFAULT_STATE, action) => {

	switch (action.type) {
		case API_GET_ROLS:
			return apiGetRolsResponse(state, action);
		case SET_REGISTER_RESPONSE:
			return apiRegisterResponse(state, action);
		case SET_USERLIST_RESPONSE:
			return apiUserListResponse(state, action);
		default:
			return state;   
	}
};

const rootReducer = combineReducers({
  mainReducer,
  session: sessionReducer
});

export default rootReducer;