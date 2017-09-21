import React from 'react';

const StyleGuide = () => (
	<div className="container styleguide">
		<ul className="nav nav-tabs" role="tablist">
			<li className="nav-item">
				<a className="nav-link active" data-toggle="tab" href="#plain" role="tab">Plain elements</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" data-toggle="tab" href="#common" role="tab">Commons</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" data-toggle="tab" href="#media" role="tab">Media blocks</a>
			</li>
			<li className="nav-item">
				<a className="nav-link disabled" href="#">Disabled</a>
			</li>
		</ul>
		<div className="tab-content">
			<div className="tab-pane active" id="plain" role="tabpanel">
				<h1>Sample h1 tag</h1>
				<h2>Sample h2 tag</h2>
				<h3>Sample h3 tag</h3>
				<h4>Sample h4 tag</h4>
				<h5>Sample h5 tag</h5>
				<p>
					Sample paragraph with a <span>span</span> inside, also a <a href="#">link</a> and a <strong>strong</strong> and a <em>em</em> and a <small>small</small>
				</p>
				<pre>Here is a pre!</pre>
				<ul>
					Unordered list
					<li>Unordered list item</li>
					<li>Unordered list item</li>
					<li>Unordered list item</li>
				</ul>
				<ol>
					Ordered list
					<li>Ordered list item</li>
					<li>Ordered list item</li>
					<li>Ordered list item</li>
				</ol>
				<hr />
				<form>
					Form sample
					<fieldset>
						<small>fieldset start</small>
						<br />
						<label>Label</label>
						<input type="text" defaultValue="Text input" />
						<br />
						<label>Label</label>
						<input type="number" defaultValue="" placeholder="Number input" />
						<br />
						<label>Label</label>
						<select placeholder="Select">
							<option defaultValue="1">Option 1</option>
							<option defaultValue="2">Option 2</option>
							<option defaultValue="3">Option 3</option>
							<option defaultValue="4">Option 4</option>
						</select>
						<br />
						<small>fieldset end</small>
					</fieldset>
					<fieldset>
						<br />
						<label>Label</label>
						<input type="file" />
						<br />
						<label>Label</label>
						<input type="checkbox" />
						<input type="checkbox" />
						<input type="checkbox" />
						<br />
						<label>Label</label>
						<input type="radio" />
						<label>Label</label>
						<input type="radio" />
						<br />
						<input type="submit" name="" defaultValue="Submit" />
						<button>Button</button>
					</fieldset>
				</form>
			</div>

			<div className="tab-pane" id="common" role="tabpanel">
				<div className="container">
					<h3 className="title-with-link">Alerts
						<a className="pull-right more-info" href="https://v4-alpha.getbootstrap.com/components/alerts/">more info</a>
					</h3>
					<div className="alert alert-success" role="alert">
						<strong>Well done!</strong> You successfully read this important alert message.
					</div>
					<div className="alert alert-info" role="alert">
						<strong>Heads up!</strong> This alert needs your attention, but it's not super important.
					</div>
					<div className="alert alert-warning" role="alert">
						<strong>Warning!</strong> Better check yourself, you're not looking too good.
					</div>
					<div className="alert alert-danger" role="alert">
						<strong>Oh snap!</strong> Change a few things up and try submitting again.
					</div>
					<hr />
					<h3 className="title-with-link">Navigation
						<a className="pull-right more-info" href="https://v4-alpha.getbootstrap.com/components/navs/">more info</a>
					</h3>
					<nav className="nav">
						<a className="nav-link active" href="#">Active</a>
						<a className="nav-link" href="#">Link</a>
						<a className="nav-link" href="#">Link</a>
						<a className="nav-link disabled" href="#">Disabled</a>
					</nav>
					<hr />
					<h3 className="title-with-link">Pills
						<a className="pull-right more-info" href="https://v4-alpha.getbootstrap.com/components/navs/">more info</a>
					</h3>
					<ul className="nav nav-pills">
						<li className="nav-item">
							<a className="nav-link active" href="#">Active</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Link</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Link</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#">Disabled</a>
						</li>
					</ul>
					<hr />
					<h3 className="title-with-link">Badges & Badge Pills
						<a className="pull-right more-info" href="https://v4-alpha.getbootstrap.com/components/badge/">more info</a>
					</h3>
					<span className="badge badge-default">Default</span>
					<span className="badge badge-primary">Primary</span>
					<span className="badge badge-success">Success</span>
					<span className="badge badge-info">Info</span>
					<span className="badge badge-warning">Warning</span>
					<span className="badge badge-danger">Danger</span>
					<br />
					<span className="badge badge-pill badge-default">Default</span>
					<span className="badge badge-pill badge-primary">Primary</span>
					<span className="badge badge-pill badge-success">Success</span>
					<span className="badge badge-pill badge-info">Info</span>
					<span className="badge badge-pill badge-warning">Warning</span>
					<span className="badge badge-pill badge-danger">Danger</span>
					<hr />
					<h3 className="title-with-link">Buttons & Outline buttons
						<a className="pull-right more-info" href="https://v4-alpha.getbootstrap.com/components/buttons/">more info</a>
					</h3>
					<button type="button" className="btn btn-primary">Primary</button>
					<button type="button" className="btn btn-secondary">Secondary</button>
					<button type="button" className="btn btn-success">Success</button>
					<button type="button" className="btn btn-info">Info</button>
					<button type="button" className="btn btn-warning">Warning</button>
					<button type="button" className="btn btn-danger">Danger</button>
					<button type="button" className="btn btn-link">Link</button>
					<br />
					<button type="button" className="btn btn-outline-primary">Primary</button>
					<button type="button" className="btn btn-outline-secondary">Secondary</button>
					<button type="button" className="btn btn-outline-success">Success</button>
					<button type="button" className="btn btn-outline-info">Info</button>
					<button type="button" className="btn btn-outline-warning">Warning</button>
					<button type="button" className="btn btn-outline-danger">Danger</button>
					<hr />
					<h3 className="title-with-link">Button Groups
						<a className="pull-right more-info" href="https://v4-alpha.getbootstrap.com/components/button-group/">more info</a>
					</h3>
					<div className="btn-group" role="group" aria-label="Basic example">
						<button type="button" className="btn btn-secondary">Left</button>
						<button type="button" className="btn btn-secondary">Middle</button>
						<button type="button" className="btn btn-secondary">Right</button>
					</div>
					<br />
					<div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
						<div className="btn-group mr-2" role="group" aria-label="First group">
							<button type="button" className="btn btn-secondary">1</button>
							<button type="button" className="btn btn-secondary">2</button>
							<button type="button" className="btn btn-secondary">3</button>
							<button type="button" className="btn btn-secondary">4</button>
						</div>
					</div>
					<hr />
					<h3 className="title-with-link">Cards
						<a className="pull-right more-info" href="https://v4-alpha.getbootstrap.com/components/card/">more info</a>
					</h3>
					<div className="card">
						<img className="card-img-top" src="src/public/src/img/wukong.png" alt="Card image cap" />
						<div className="card-block">
							<h4 className="card-title">Wukong is a lol PC ripped from a chinese legend</h4>
							<p className="card-text">Click the link below to see more details on how to implement cards with bootstrap 4.</p>
							<a href="https://v4-alpha.getbootstrap.com/components/card/" className="btn btn-primary">more details</a>
						</div>
					</div>
				</div>
				<h3 className="title-with-link">Accordion
					<a className="pull-right more-info" href="https://v4-alpha.getbootstrap.com/components/collapse/">more info</a>
				</h3>
				<div id="accordion" role="tablist" aria-multiselectable="true">
					<div className="card">
						<div className="card-header" role="tab" id="headingOne">
							<h5 className="mb-0">
								<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
								Collapsible Group Item #1
								</a>
							</h5>
						</div>
						<div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
							<div className="card-block">
								Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-header" role="tab" id="headingTwo">
							<h5 className="mb-0">
								<a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
									Collapsible Group Item #2
								</a>
							</h5>
						</div>
						<div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
							<div className="card-block">
								Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-header" role="tab" id="headingThree">
							<h5 className="mb-0">
								<a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
									Collapsible Group Item #3
								</a>
							</h5>
						</div>
						<div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
							<div className="card-block">
								Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
							</div>
						</div>
					</div>
				</div>
				<hr />
				<h3 className="title-with-link">Dropdown
					<a className="pull-right more-info" href="https://v4-alpha.getbootstrap.com/components/dropdowns/">more info</a>
				</h3>
				<div className="row">
					<div className="col">
						<div className="dropdown">
							<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Dropdown button
							</button>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<a className="dropdown-item" href="#">Action</a>
								<a className="dropdown-item" href="#">Another action</a>
								<a className="dropdown-item" href="#">Something else here</a>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="dropdown show">
							<a className="btn btn-secondary dropdown-toggle" href="https://example.com" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Dropdown link
							</a>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
								<a className="dropdown-item" href="#">Action</a>
								<a className="dropdown-item" href="#">Another action</a>
								<a className="dropdown-item" href="#">Something else here</a>
							</div>
						</div>
					</div>
				</div>
				<hr />
				<h3 className="title-with-link">Modal
					<a className="pull-right more-info" href="https://v4-alpha.getbootstrap.com/components/modal/">more info</a>
				</h3>
				{/* Button trigger modal*/}
				<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
					Launch demo modal
				</button>
				{/* Modal */}
				<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
							...
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
								<button type="button" className="btn btn-primary">Save changes</button>
							</div>
						</div>
					</div>
				</div>
				<hr />
				<h3 className="title-with-link">Navbar
					<a className="pull-right more-info" href="https://v4-alpha.getbootstrap.com/components/navbar/">more info</a>
				</h3>
				<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
					<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<a className="navbar-brand" href="#">Navbar</a>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Link</a>
							</li>
							<li className="nav-item">
								<a className="nav-link disabled" href="#">Disabled</a>
							</li>
						</ul>
						<form className="form-inline my-2 my-lg-0">
							<input className="form-control mr-sm-2" type="text" placeholder="Search" />
							<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
						</form>
					</div>
				</nav>
			</div>

			<div className="tab-pane" id="media" role="tabpanel">...</div>
		</div>
	</div>
);


export default StyleGuide;