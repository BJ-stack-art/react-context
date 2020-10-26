import React , { useContext } from 'react';
import {ThemeContext} from '../contexts/ThemeContext.js';

const ThemeToggle = () => {
	const { toggleTheme } = useContext(ThemeContext);
	return(
		<button onClick={toggleTheme} >Toggle the Theme</button>
	)
}

export default ThemeToggle;
	