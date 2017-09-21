// Main App file; Here is were you should call all your components and styles

// React
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/storage/store.js';

//Routes
import Routes from './components/Routes/Routes.js';

//jquery
import 'jquery';

//Tether
import 'tether';

//Bootstrap
import 'bootstrap';

// Global Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './common/css/app.scss';

const App = React.createClass({
	render () {
		return (
			<Provider store={store}>
				<Routes />
			</Provider>
		);
	}
});

render(<App />, document.getElementById('app'));