import './styles/header.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import React, { useState, useEffect, useRef } from 'react';

const Header = () => {

    const [open, setOpen] = useState(false);

    const [v,setV] = useState({visibility:"hidden"});
    let menuRef = useRef();
    useEffect(() => {
        let handler = (e) =>{
            if(!menuRef.current.contains(e.target)){
                setV({visibility:"visible"});
                setOpen(false);
            }
            
        }

        document.addEventListener("mousedown", handler);
    })
   
    
    

    return(
    
        <header>
            <ul className="button-holder">
                <li className="home"><Link to='/home'>Home</Link></li>
                <li className="about"><Link to='/about'>About us</Link></li>
                <li className="contact"><Link to='/contact'>Contact us</Link></li>
            </ul>

            <div className="navbar-container"
                onClick={() => (setOpen(!open))}
                ref={menuRef}
                
            >
                <div className="navBar"></div>
                <div className="navBar"></div>
                <div className="navBar"></div>
                <div className={`buttons-container ${open? 'active': 'inactive'}`}
                    style={{
                        visibility:v.visibility,
                    }}
                    
                >
                    <div className="triangle"></div>
                    <div className="home"><Link to='/home'>Home</Link></div>
                    <div className="about"><Link to='/about'>About us</Link></div>
                    <div className="contact"><Link to='contact'>Contact us</Link></div>
                </div>
            </div>
        </header>

            
    );
}

export default Header;