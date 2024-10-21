import './styles/header.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';


const Header = () => {

    return(
    
        <header>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>

            <div className="navbar-container">
                <div className="navBar"></div>
                <div className="navBar"></div>
                <div className="navBar"></div>
            </div>
        </header>

            
    );
}

export default Header;