import { createStore,compose, applyMiddleware } from 'redux';
import { sessionService } from 'redux-react-session';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, compose(
	applyMiddleware(thunk)
));

sessionService.initSessionService(store);

export default store;
