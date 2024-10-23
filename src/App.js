import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import AboutPage from './components/About';
import './App.css'

import Home from './components/Home';
import ContactUs from './components/ContactUs';
import React, { useEffect, useState} from 'react';




function App() {

  
  return (
    
    <Router>
      <div>
          

          <Header/>
          
          <Routes>
            <Route path="/pnamission/home" element={<Home />}/>
            <Route path="https://clydeador123545.github.io/pnamission/about" element={<AboutPage />}/>
            <Route path="/pnamission" element={<Home/>}/>
            <Route path="/pnamission/contact" element={<ContactUs/>} />
          </Routes>
            
        </div>
    </Router>
    

    
      
        
      
      
      
      
      
    
    
  );
}

export default App;

