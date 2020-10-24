import React , {Component} from 'react';

import {ThemeContext} from '../../contexts/ThemeContext.js';

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
	static contextType = ThemeContext;

	render() {
		const {isLightTheme , light , dark}  = this.context;
		const theme = isLightTheme ? light : dark;
		return(
			<header className="navbar" style={{background: theme.ui , color: theme.syntax ,  }} >
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
	