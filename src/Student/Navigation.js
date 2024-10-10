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
                    <Link to={"/sDash/"+id} className='nav-link'>Home</Link>
                </li>
                <li className='navbar-item'>
                    <Link to={"/result/"+id} className='nav-link'>Results</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/studl" className='nav-link'>logout</Link>
                </li>
            </ul>
        </nav>
    );
}
export default NavBar;
