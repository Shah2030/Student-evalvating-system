import Form from '../Service/FormService';
import Slideshow from '../Home/Slideshow';
import React,{useEffect, useState} from 'react';
import NavBar from './Navigation';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';

function Home()
{
    const {id}= useParams();
    const [val,setdata2]=useState([]);
    const getall=()=>{
        Form.getAllForms()
        .then(res =>{
            setdata2(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{     
        getall();
    },[])

    return(
        <>
            <NavBar/>
            <main>
                <div className="div">
                    <h1>Advertisement</h1>
                    <Slideshow/>
                </div>
                <div className="div">
                    <h1>Announcements</h1>
                    <table align='center' border={1} cellPadding={10} cellSpacing={10}>
                        <tr>
                            <th>Title</th>
                            <th>Notice</th>
                            <th>Link</th>
                        </tr>
                        {
                            val.map(post=>(
                            <tr>
                                <td>{post.title}</td>
                                <td width={450}>{post.notice}</td>
                                <td><Link title="Click hear to view and fill the form" to={"/fmev/"+id+"/"+post.fid+"/"+post.title} className='link'>Click Hear to Evaluate</Link></td>
                            </tr>    
                            ))
                        }
                    </table>
                </div>
            </main>
        </>
    );
}
export default Home;