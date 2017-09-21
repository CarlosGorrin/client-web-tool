import React from 'react';
import {BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Compornents
import StyleGuide from '../StyleGuide/StyleGuide.js';
import Login from '../Login/Login.js';
import Landing from '../Landing/Landing.js';


const Routes = ({ authenticated, checked }) => (
	<BrowserRouter>
		{ checked &&
			<div className='app'>
				<Route exact path='/style-guide' component={StyleGuide} />
				<Route exact path='/login' component={() => {
					return authenticated ? (<Redirect to="/" />) : (<Login />);
				}} />
				<Route exact path='/' component={() => {
					return authenticated ? (<Landing />) : (<Redirect to="/login"/>);
				}} />
			</div>
		}
	</BrowserRouter>
);

const { bool } = React.PropTypes;

Routes.propTypes = {
  authenticated: bool.isRequired,
  checked: bool.isRequired
};

const mapStateToProps = ({ session }) => ({
  checked: session.checked,
  authenticated: session.authenticated
});

export default connect(mapStateToProps)(Routes);
