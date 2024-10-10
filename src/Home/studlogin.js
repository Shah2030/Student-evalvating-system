import Slideshow from './Slideshow';
import NavBar from './Navigation';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentService from '../Service/StudentService';

function StudLogin()
{
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
        StudentService.getAllStudents()
        .then(res =>{
            const data=res.data
            data.map((r)=>{
                if(r.usn==formData.username && r.dob==formData.password)
                    navigate('/sDash/'+r.sid );
                else
                    console.log('Invalid username or password');    
            })
        })
        .catch(err=>{
            console.log(err)
        })
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
                        <h1>Student Login</h1>
                        <form onSubmit={handleSubmit}> 
                            <input value={formData.username} name='username' onChange={handleChange} required  type="text" placeholder="Enter Student USN"/><br/>
                            <input value={formData.password} name='password' onChange={handleChange} required  type="date"/><br/>
                            <button type="submit" onSubmit={handleSubmit} className='btn upd'> Login</button>
                        </form>
                </div>
            </main>
        </>
    );
}
export default StudLogin;