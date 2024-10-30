
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import AboutPage from './components/About';
import './App.css'

import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer'

function App() {

  
  return (
    
    <Router basename='/pnamission'>
      <div>
          

        <Header/>
        <Footer/>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<ContactUs/>} />
        </Routes>
            
      </div>
    </Router>
  );
}

export default App;

