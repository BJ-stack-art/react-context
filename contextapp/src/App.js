import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/';
import BookList from './components/BookList/';
import ThemeToggle from './components/ThemeToggle.js';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext.js';
import BookContextProvider from './contexts/BookContext.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
