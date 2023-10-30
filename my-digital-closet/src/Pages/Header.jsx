import React from 'react'; 
import { Link } from "react-router-dom"; 

// import './App.css'
export default function Header(){

    return(
        <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/">Account</a>
          </li>
          <li className="nav-item">
            <Link to="/closet" ><a href="/closet">Closet</a></Link>
          </li>
          <li className="nav-item">
            <a href="/favorites">Favorites</a>
          </li>
        </ul>
      </nav>
    );
  }