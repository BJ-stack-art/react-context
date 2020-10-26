import React , {Component , useContext} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext.js';
import {AuthContext} from '../../contexts/AuthContext.js';


const Style = {
	menu: {
		display: 'flex',
	    alignItems: 'center',
	    justifyContent: 'space-between',
	    width: '250px',
	    margin: '10px auto',
	}
}


const Navbar = () => {
	const { isLightTheme , light , dark } = useContext(ThemeContext);
	const { isAuthenticated , toggleAuth } = useContext(AuthContext);
	const theme = isLightTheme ? light : dark;

 	return(
		<header className="navbar" style={{background: theme.ui , color: theme.syntax ,  }} >
			<h1>Context App</h1>
			<div>
				{ isAuthenticated ? 'Logged in' : 'Logged Out' }
			</div>
			<div style={Style.menu} >
				<span>Home</span>
				<span>About</span>
				<span>Contact</span>
			</div>
		</header>
	);
}

export default Navbar;
	