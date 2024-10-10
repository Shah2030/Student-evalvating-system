import React from 'react';
import {Link} from 'react-router-dom'

const NavBar=()=>{
    return(
        <nav className='nav'>
            <ul className='navbar-list'>
                <li className='navbar-item'>
                    <h2 style={{margin: '0'}}>Student Evalvating System</h2>
                </li>
                <li className='navbar-item'>
                    <Link to="/" className='nav-link'>Home</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/sl" className='nav-link'>Staff Login</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/studl" className='nav-link'>Student Login</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/abt" className='nav-link'>About</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/cont" className='nav-link'>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
export default NavBar;
