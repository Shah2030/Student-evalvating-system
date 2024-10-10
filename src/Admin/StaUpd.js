import React,{useState,useEffect} from 'react'
import Staff2 from '../Service/IEvalavatorService'
import NavBar from './Navigation';
import { useParams } from 'react-router-dom';

function Add()
{
    const [st,setSt]=useState("");
    const {id}= useParams();
    const [eeid,setUsn]=useState("");
    const [name,setName]=useState("");
    const [mob,setMob]=useState("");
    const [address,setAdd]=useState("");
    const [dob,setDob]=useState("");
    const [designation,setDesignation]=useState("");
    const [pass,setPass]=useState("");
    const [pro, srtpro]=useState([]);
    const handelEve=(e)=>{
        e.preventDefault();
        if(st==1)
        {
            const obj={
                iid:id,
                ieid:eeid,
                name:name,
                type:"Internal Staff",
                mob:mob,
                address:address,
                dob:dob,
                designation:designation,
                pass:pass};
            Staff2.updateievalvators(id,obj)
            .then((res)=>{
                console.log(res);
                alert("Internal Staff added successfully.,!");
            })
            .catch(err=>{
                console.log(obj);
                alert(err);
            })
        } 
        else{
            const obj={
                iid:id,
                ieid:eeid,
                name:name,
                mob:mob,
                type:"External Staff",
                address:address,
                dob:dob,
                designation:designation,
                pass:pass};
                Staff2.updateievalvators(id,obj)
            .then((res)=>{
                console.log(res);
                alert("External Staff Updated successfully.,!");
            })
            .catch(err=>{
                console.log(obj);
                alert(err);
            })
        }  
    }

    function getStaffById(id){
        Staff2.getIevalvatorById(id)
        .then((res)=>{
            srtpro(res.data)
        })
        .catch(err=>{
            console.log(err)
        })

    }

    useEffect(()=>{     
        getStaffById(id);
    })

    return(
        <>
        <NavBar/>
        <div id="con">
            <h2>Update Staff</h2>
            <form style={{display:'grid', gridTemplateColumns:'auto auto'}}>
                <div style={{width:'30rem', textAlign:'right'}}>
                    <h3 style={{marginBottom:'30px'}}>Staff Id: {pro.iid}</h3>
                    <h3 style={{marginBottom:'30px'}}>Staff Type: {pro.type}</h3>
                    <h3 style={{marginBottom:'30px'}}>Staff Username: {pro.ieid}</h3>
                    <h3 style={{marginBottom:'30px'}}>Name: {pro.name}</h3>
                    <h3 style={{marginBottom:'30px'}}>Mobile no.: {pro.mob}</h3>
                    <h3 style={{marginBottom:'30px'}}>Address: {pro.address}</h3>
                    <h3 style={{marginBottom:'30px'}}>DOB: {pro.dob}</h3>
                    <h3 style={{marginBottom:'30px'}}>Designation: {pro.designation}</h3>
                </div>
                <div style={{textAlign:'left'}}>
                    <input type="text" disabled value={id} style={{color: '#fff',fontSize: '15px'}} /><br/>
                    <input type='radio' value={1} onChange={(e)=>setSt(e.target.value)} require="true" name="st"/>Internal Staff
                    <input type='radio' value={2} onChange={(e)=>setSt(e.target.value)} require="true" name="st"/>External Staff<br/>
                    <input required placeholder="Enter Staff ID" type='text' name='eeid' value={eeid} onChange={(e)=>setUsn(e.target.value)} /><br/>
                    <input required placeholder="Enter Staff Name" type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} /><br/>
                    <input required placeholder="Enter Staff Mobile no." type='text' name='mob' value={mob} onChange={(e)=>setMob(e.target.value)} /><br/>
                    <input required placeholder="Enter Address" type='text' name='address' value={address} onChange={(e)=>setAdd(e.target.value)} /><br/>
                    <input required type='date' name='dob' value={dob} onChange={(e)=>setDob(e.target.value)} /><br/>
                    <input required placeholder="Enter Designation" type='text' name='designation' value={designation} onChange={(e)=>setDesignation(e.target.value)} /><br/>
                    {/*<input required placeholder="Enter Password" type='password' name='pass' value={pass} onChange={(e)=>setPass(e.target.value)} /><br/>
                    */}<button onClick={handelEve} className='btn add' type='submit'>Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}
export default Add;