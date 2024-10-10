import React from 'react';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';

const NavBar=()=>{
    const { id } = useParams();
    return(
        <nav className='nav'>
            <ul className='navbar-list'>
                <li className='navbar-item'>
                    <h2 style={{margin: '0'}}>Student Evalvating System</h2>
                </li>
                <li className='navbar-item'>
                    <Link to={"/amain/"+{id}} className='nav-link'>Dashbord</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/sd" className='nav-link'>Staff Details</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/studd" className='nav-link'>Student details</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/frm" className='nav-link'>Form</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/admin" className='nav-link'>Logout</Link>
                </li>
            </ul>
        </nav>
    );
}
export default NavBar;
