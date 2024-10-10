import Slideshow from './Slideshow';
import NavBar from './Navigation';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StaffService1 from '../Service/IEvalavatorService';

function StaffLogin()
{
    const [formData, setFormData] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
        StaffService1.getAllIevalvators()
        .then(res =>{
            const data=res.data
            data.map((r)=>{
                if(r.ieid==formData.username && r.pass==formData.password)
                    navigate('/stadash/'+r.iid);
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
                        <h1>Staff Login</h1>
                        <form onSubmit={handleSubmit}> 
                            <input value={formData.username} name='username' onChange={handleChange} required  type="text" placeholder="Enter Staff ID"/><br/>
                            <input value={formData.password} name='password' onChange={handleChange} required  type="password" placeholder="Enter Password" /><br/>
                            <button type="submit" className='upd btn'> Login</button>
                        </form>
                </div>
            </main>
        </>
    );
}
export default StaffLogin;