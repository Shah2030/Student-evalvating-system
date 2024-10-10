import React,{useState} from 'react'
import Student from '../Service/StudentService'
import NavBar from './Navigation';

function Add()
{
    const [sid,setId]=useState("");
    const [usn,setUsn]=useState("");
    const [name,setName]=useState("");
    const [mob,setMob]=useState("");
    const [address,setAdd]=useState("");
    const [dob,setDob]=useState("");
    const [cource,setCource]=useState("");
    const obj={
        sid:sid,
        usn:usn,
        name:name,
        mob:mob,
        address:address,
        dob:dob,
        cource:cource};
    const handelEve=(e)=>{
        e.preventDefault();
            Student.createStudents(obj)
            .then((res)=>{
                console.log(res);
            })
            .catch(err=>{
                alert(err);
            })
        alert("Student added successfully.,!");   
    }

    return(
        <>
        <NavBar/>
        <div id="con">
            <h2>Add Student</h2>
            <form>
                <div>
                    <input placeholder="Enter Student USN" type='text' name='usn' value={usn} onChange={(e)=>setUsn(e.target.value)} /><br/>
                    <input placeholder="Enter Student Name" type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} /><br/>
                    <input placeholder="Enter Student Mobile no." type='number' name='mob' value={mob} onChange={(e)=>setMob(e.target.value)} /><br/>
                    <input placeholder="Enter Address" type='text' name='address' value={address} onChange={(e)=>setAdd(e.target.value)} /><br/>
                    <input type='date' name='dob' value={dob} onChange={(e)=>setDob(e.target.value)} /><br/>
                    <input placeholder="Enter Course" type='text' name='cource' value={cource} onChange={(e)=>setCource(e.target.value)} /><br/>
                    <button onClick={handelEve} className='btn add' type='submit'>Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}
export default Add;