import React,{useState,useEffect} from 'react'
import Student from '../Service/StudentService'
import NavBar from './Navigation';
import { useParams } from 'react-router-dom';

function Add()
{
    const {id}= useParams();
    const [usn,setUsn]=useState("");
    const [name,setName]=useState("");
    const [mob,setMob]=useState("");
    const [address,setAdd]=useState("");
    const [dob,setDob]=useState("");
    const [cource,setCource]=useState("");
    const [pro, srtpro]=useState([]);
    const obj={
        sid:id,
        usn:usn,
        name:name,
        mob:mob,
        address:address,
        dob:dob,
        cource:cource};
    const handelEve=(e)=>{
        e.preventDefault();
            Student.updateStudents(id,obj)
            .then((res)=>{
                console.log(res);
            })
            .catch(err=>{
                alert(err);
            })
        alert("Student Details Updated successfully.,!");   
    }

    function getStudentById(id){
        Student.getStudentById(id)
        .then((res)=>{
            srtpro(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{     
        getStudentById(id);
    })

    return(
        <>
        <NavBar/>
        <div id="con">
            <h2>Update Student</h2>
            <form style={{display:'grid', gridTemplateColumns:'auto auto'}}>
                <div style={{width:'30rem', textAlign:'right'}}>
                    <h3 style={{marginBottom:'30px'}}>Student Id: {pro.sid}</h3>
                    <h3 style={{marginBottom:'30px'}}>USN: {pro.usn}</h3>
                    <h3 style={{marginBottom:'30px'}}>Name: {pro.name}</h3>
                    <h3 style={{marginBottom:'30px'}}>Mobile no.: {pro.mob}</h3>
                    <h3 style={{marginBottom:'30px'}}>Address: {pro.address}</h3>
                    <h3 style={{marginBottom:'30px'}}>DOB: {pro.dob}</h3>
                    <h3 style={{marginBottom:'30px'}}>Cource: {pro.cource}</h3>
                </div>
                <div style={{textAlign:'left'}}>
                    <input type="text" disabled value={id}/><br/>
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