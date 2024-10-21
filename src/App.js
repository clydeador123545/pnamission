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
      

      <Header/>
      <Home/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/" element={<Home />} />
      </Routes>
      
      </body>
        
      
      
      
      
      
    </Router>
    
  );
}

export default App;
