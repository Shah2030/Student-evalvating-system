import React,{useEffect, useState} from 'react';
import NavBar from './Navigation';
import {Link} from 'react-router-dom'
import StaffService1 from '../Service/IEvalavatorService';
function ASD()
{
    const [val,setdata]=useState([]);
    const [id,setid]=useState(""); 
    var v;
    const getall=()=>{
        StaffService1.getAllIevalvators()
        .then(res =>{
            setdata(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    function del(id,e)
    {
        StaffService1.deleteievalvators(id)
        .then(res =>{
            alert("Product with ID: "+id+" Successfully deleted");
            window.location.reload(true);
          
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
                <table align='center'border={1} cellPadding={25} cellSpacing={10}>
                    <tr>
                        <th colSpan={8}> <h2>Staff Details</h2></th>
                    </tr>
                    <tr>
                        <th colSpan={8}>
                            <form onSubmit={del(id)}>
                                 <Link to={"/staAdd"} className='btn add' style={{marginRight: '40%'}}>Add Staff</Link>
                                 OR Select to remove
                                 <select name="id" value={id} onChange={(e)=>setid(e.target.value)}>
                                    <option>Select Staff id</option>
                                    {
                                        val.map(post=>(
                                        <option value={post.eeid? post.eid : post.iid}>{post.eeid? post.eeid : post.ieid}</option>    
                                        ))
                                    }
                                </select> 
                            </form>   
                        </th>
                    </tr>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Address</th>
                        <th>Type</th>
                        <th>DOB</th>
                        <th>Designation</th>
                        <th>Action</th>
                    </tr>
                    {
                        val.map((re)=>(
                           <tr>
                                <td>{re.eeid? re.eeid : re.ieid}</td>
                                <td>{re.name}</td>
                                <td>{re.mob}</td>
                                <td>{re.address}</td>
                                <td>{re.type}</td>
                                <td>{re.dob}</td>
                                <td>{re.designation}</td>
                                <td>
                                     <p style={{display:'none'}}>{v=re.eid? re.eid : re.iid}</p>
                                     <Link to={"/stupd/"+v} className='btn upd'>Update</Link>
                                </td>
                           </tr> 
                        ))
                    }
                </table>
            </div>
        </>
    );
}
export default ASD;