import Slideshow from '../Home/Slideshow';
import NavBar from '../Home/Navigation';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StaffLogin()
{
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(formData.username=="Stud@Admin" && formData.password=="Admin@123")
            navigate('/amain/1');
        else
            setError('Invalid username or password');    
    };
    
    return(
        <>
            <NavBar/>
            <main>
                <div className="div">
                    <h1>Advertisement</h1>
                    <Slideshow/>
                </div>
                <div className="div">
                        <h1>Admin Login</h1>
                        <form onSubmit={handleSubmit}> 
                            <input value={formData.username} name='username' onChange={handleChange} required  type="text" placeholder="Enter Username"/><br/>
                            <input value={formData.password} name='password' onChange={handleChange} required  type="password" placeholder="Enter Password" /><br/>
                            <button type="submit"> Login</button>
                        </form>
                </div>
            </main>
        </>
    );
}
export default StaffLogin;