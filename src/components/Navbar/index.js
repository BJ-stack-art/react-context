import React , {Component} from 'react';

const Style = {
	menu: {
		display: 'flex',
	    alignItems: 'center',
	    justifyContent: 'space-between',
	    width: '250px',
	    margin: '10px auto',
	}
}

class Navbar extends Component {
	render() {
		return(
			<header>
				<h1>Context App</h1>
				<div style={Style.menu} >
					<span>Home</span>
					<span>About</span>
					<span>Contact</span>
				</div>
			</header>
		);
	}
}

export default Navbar;
	