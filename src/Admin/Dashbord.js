import Form from '../Service/FormService';
import Slideshow from '../Home/Slideshow';
import React,{useEffect, useState} from 'react';
import NavBar from './Navigation';
function Home()
{
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
                        </tr>
                        {
                            val.map(post=>(
                            <tr>
                                <td>{post.title}</td>
                                <td width={500}>{post.notice}</td>
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