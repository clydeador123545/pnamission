import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import AboutPage from './components/About';
import './App.css'

import Home from './components/Home';
import React, {userState, useState} from 'react';




function App() {

  const [showPage, setShowPage] = useState(true);
  const handleLinkClick = () =>{
    setShowPage(false);
  }
  return (
    <Router>
      <body>
      

      <Header />
      {showPage && <Home/>}
      <Routes>
        <Route path="/home" element={<Home onLinkClick={handleLinkClick}/>}/>
        <Route path="/about" element={<AboutPage onLinkClick={handleLinkClick}/>}/>
        <Route path="/" element={<Home onLinkClick={handleLinkClick}/>} />
      </Routes>
      
      </body>
        
      
      
      
      
      
    </Router>
    
  );
}

export default App;
