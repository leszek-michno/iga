import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import './styles/NavBar.scss';
import { NaviBar } from './components/Navigation';
import Header from './components/Header';

const App =()=> {
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
