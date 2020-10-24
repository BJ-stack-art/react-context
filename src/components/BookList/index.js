import React , {Component} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext.js';

class BookList extends Component {
	static contextType = ThemeContext;

	render() {
		const {isLightTheme , light , dark} = this.context;
		const theme = isLightTheme ? light : dark;
		return(
			<React.Fragment>
				<div className="book-list"  style={{background: theme.bg , color: theme.syntax}}>
				<ul>
					<li style={{background: theme.ui}} >the way kings</li>
					<li style={{background: theme.ui}} >the name of the wind</li>
					<li style={{background: theme.ui}} >the final empire</li>
				</ul>
				</div>
			</React.Fragment>
		);
	}
}

export default BookList;
	