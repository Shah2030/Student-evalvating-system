import React,{useEffect, useState} from 'react';
import NavBar from './Navigation';
import {Link} from 'react-router-dom'
import Form from '../Service/FormService';
function ASD()
{
    const [val,setdata2]=useState([]);  
    const [id,setid]=useState("");    
    const getall=()=>{
        Form.getAllForms()
        .then(res =>{
            setdata2(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    function del(id,e)
    {
        Form.deleteForms(id)
        .then(res =>{
            alert("Form with ID: "+id+" Successfully deleted");
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
                        <th colSpan={7}> <h2>Form Details</h2></th>
                    </tr>
                    <tr>
                        <th colSpan={7}>
                            <form onSubmit={del(id)}>
                                <Link to={"/frmadd"} className='btn add' style={{marginRight: '15%'}}>Add Form</Link>
                                 OR Select to delete
                                 <select name="id" value={id} onChange={(e)=>setid(e.target.value)}>
                                    <option>Select Form Title</option>
                                    {
                                        val.map(post=>(
                                        <option value={post.fid}>{post.title}</option>    
                                        ))
                                    }
                                </select> 
                            </form>   
                        </th>
                    </tr>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Ddeal line</td>
                        <td>notice</td>
                        <td>type</td>
                        <td>marks</td>
                        <td>Action</td>
                    </tr>
                    {
                        val.map((re)=>(
                           <tr>
                                <td>{re.fid}</td>
                                <td>{re.title}</td>
                                <td>{re.deadline}</td>
                                <td width={400}>{re.notice}</td>
                                <td>{re.inpfor}</td>
                                <td>{re.marks}</td>
                                <td>
                                    <Link to={"/frmup/"+re.fid} className='btn upd'>Update</Link>
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