import React from 'react'; 
// import './App.css'
export default function Header(){

    return(
        <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/">Account</a>
          </li>
          <li className="nav-item">
            <a href="/closet">Closet</a>
          </li>
          <li className="nav-item">
            <a href="/favorites">Favorites</a>
          </li>
        </ul>
      </nav>
    );
  }