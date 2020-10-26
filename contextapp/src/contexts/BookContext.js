import React , { createContext , useState  } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
	 const [books , setBooks] = useState([
		{ title: 'almost home' , id: 1 },
		{ title: 'almost gosple' , id: 2 },
		{ title: 'almost wild darkness' , id: 3 },
	])
	return (
		<BookContextProvider value={{books}}>
			{props.children}
		</BookContextProvider>
	)
}

export default BookContextProvider;