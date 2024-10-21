import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import AboutPage from './components/About';
import './App.css'

import Home from './components/Home';
import React, { useEffect, useState} from 'react';




function App() {

  
  return (
    

    <body>
          

      <Header/>
      
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/pnamission" element={<Home/>}/>
      </Routes>
        
    </body>

    
      
        
      
      
      
      
      
    
    
  );
}

export default function AppWrapped() {
  return (
    <Router>
      <App />
    </Router>
  );
};


