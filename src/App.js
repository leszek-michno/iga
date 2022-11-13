import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import './styles/App.css';
import './styles/navBar.css'
import { NaviBar } from './components/Navigation';
import Header from './components/Header';


function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <Header/>
      </header>
      <NaviBar />
          </div>
    </Router>
  );
}

export default App;
