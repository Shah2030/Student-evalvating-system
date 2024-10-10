import React from 'react';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';

const NavBar=()=>{
    const {id}=useParams();
    return(
        <nav className='nav'>
            <ul className='navbar-list'>
                <li className='navbar-item'>
                    <h2 style={{margin: '0'}}>Student Evalvating System</h2>
                </li>
                <li className='navbar-item'>
                    <Link to={"/stadash/"+id} className='nav-link'>Home</Link>
                </li>
                <li className='navbar-item' title="List of students evaluated by You">
                    <Link to={"/esl/"+id} className='nav-link'>EStudent List</Link>
                </li>
                <li className='navbar-item' title="Do you want to logout?">
                    <Link to="/sl" className='nav-link'>logout</Link>
                </li>
            </ul>
        </nav>
    );
}
export default NavBar;
