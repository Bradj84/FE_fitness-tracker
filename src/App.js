import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { NavBar, Header } from './components';

function App() {
  const [token, setToken] = useState('');
  return (
    <div>
    <Header/>
    <NavBar token={token} setToken={setToken}/>
    </div>
  );
}

export default App;