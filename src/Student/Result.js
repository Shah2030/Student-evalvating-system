import Form from '../Service/FormService';
import React,{useEffect, useState} from 'react';
import NavBar from './Navigation';
//import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';

function Home()
{
   // const {id}= useParams();
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
                <div className='div1'>
                    <h1>Results</h1>
                    <h2>No reasults were announced yet, Once reasults are announced it will be added in the Announcent Section..!</h2>
                    {/*
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
                                <td><Link title="Click hear to view and fill the form" to={"/form/"+id+"/"+post.fid+"/"+post.title} className='link'>Click Hear</Link></td>
                            </tr>    
                            ))
                        }
                    </table>
                    */}
                </div>
        </>
    );
}
export default Home;