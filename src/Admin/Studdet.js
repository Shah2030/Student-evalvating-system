import React,{useEffect, useState} from 'react';
import NavBar from './Navigation';
import {Link} from 'react-router-dom'
import Student from '../Service/StudentService';
function ASD()
{
    const [val,setdata2]=useState([]);  
    const [id,setid]=useState("");    
    const getall=()=>{
        Student.getAllStudents()
        .then(res =>{
            setdata2(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    function del(id,e)
    {
        Student.deleteStudents(id)
        .then(res =>{
            alert("Student with ID: "+id+" Successfully deleted");
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
                        <th colSpan={7}> <h2>Student Details</h2></th>
                    </tr>
                    <tr>
                        <th colSpan={7}>
                            <form onSubmit={del(id)}>
                                <Link to={"/stuAdd"} className='btn add' style={{marginRight: '40%'}}>Add Student</Link>
                                 OR Select to delete
                                 <select name="id" value={id} onChange={(e)=>setid(e.target.value)}>
                                    <option>Select Student id</option>
                                    {
                                        val.map(post=>(
                                        <option value={post.sid}>{post.usn}</option>    
                                        ))
                                    }
                                </select> 
                            </form>   
                        </th>
                    </tr>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Contact</td>
                        <td>Address</td>
                        <td>DOB</td>
                        <td>Cource</td>
                        <td>Action</td>
                    </tr>
                    {
                        val.map((re)=>(
                           <tr>
                                <td>{re.usn}</td>
                                <td>{re.name}</td>
                                <td>{re.mob}</td>
                                <td>{re.address}</td>
                                <td>{re.dob}</td>
                                <td>{re.cource}</td>
                                <td>
                                    <Link to={"/supd/"+re.sid} className='btn upd'>Update</Link>
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