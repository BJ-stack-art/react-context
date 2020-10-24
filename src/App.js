import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/';
import BookList from './components/BookList/';

import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <ThemeContextProvider>
        <Navbar />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
