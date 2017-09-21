import React from 'react';

const Navigation = () => (
	<nav className="navigation col bg-primary">
		<li><i className="fa fa-navicon" aria-hidden="true"></i></li>
		<li><i className="fa fa-code" aria-hidden="true"></i><span>dev</span></li>
		<li><i className="fa fa-folder-open-o" aria-hidden="true"></i><span>content</span></li>
		<li><i className="fa fa-check" aria-hidden="true"></i><span>qa</span></li>
		<li><i className="fa fa-terminal" aria-hidden="true"></i><span>sysops</span></li>
	</nav>
);

export default Navigation;