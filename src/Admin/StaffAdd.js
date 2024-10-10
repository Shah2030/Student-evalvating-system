import React,{useState} from 'react'
import Staff2 from '../Service/IEvalavatorService'
import NavBar from './Navigation';

function Add()
{
    const [st,setSt]=useState("");
    const [eid,setId]=useState("");
    const [eeid,setUsn]=useState("");
    const [name,setName]=useState("");
    const [mob,setMob]=useState("");
    const [address,setAdd]=useState("");
    const [dob,setDob]=useState("");
    const [designation,setDesignation]=useState("");
    const [pass,setPass]=useState("");
    const handelEve=(e)=>{
        e.preventDefault();
        if(st==1)
        {
            const obj={
                iid:eid,
                ieid:eeid,
                name:name,
                type:"Internal Staff",
                mob:mob,
                address:address,
                dob:dob,
                designation:designation,
                pass:pass};
            Staff2.creatIievalvators(obj)
            .then((res)=>{
                console.log(res);
                alert("Internal Staff added successfully.,!");
            })
            .catch(err=>{
                console.log(obj);
                alert(err);
            })
        } 
        else if(st==2){
            const obj={
                iid:eid,
                ieid:eeid,
                name:name,
                type:"External Staff",
                mob:mob,
                address:address,
                dob:dob,
                designation:designation,
                pass:pass};
            Staff2.creatIievalvators(obj)
            .then((res)=>{
                console.log(res);
                alert("External Staff added successfully.,!");
            })
            .catch(err=>{
                console.log(obj);
                alert(err);
            })
        }
        else
            alert("Select The type of staff");  
    }

    return(
        <>
        <NavBar/>
        <div id="con">
            <h2>Add Staff</h2>
            <form>
                <div>
                    <input type='radio' value={1} onChange={(e)=>setSt(e.target.value)} require="true" name="st"/>Internal Staff &nbsp; &nbsp; &nbsp; &nbsp;
                    <input type='radio' value={2} onChange={(e)=>setSt(e.target.value)} require="true" name="st"/>External Staff<br/>
                    <input required placeholder="Enter Staff ID" type='text' name='eeid' value={eeid} onChange={(e)=>setUsn(e.target.value)} /><br/>
                    <input required placeholder="Enter Staff Name" type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} /><br/>
                    <input required placeholder="Enter Staff Mobile no." type='text' name='mob' value={mob} onChange={(e)=>setMob(e.target.value)} /><br/>
                    <input required placeholder="Enter Address" type='text' name='address' value={address} onChange={(e)=>setAdd(e.target.value)} /><br/>
                    <input required type='date' name='dob' value={dob} onChange={(e)=>setDob(e.target.value)} /><br/>
                    <input required placeholder="Enter Designation" type='text' name='designation' value={designation} onChange={(e)=>setDesignation(e.target.value)} /><br/>
                    <input required placeholder="Enter Password" type='password' name='pass' value={pass} onChange={(e)=>setPass(e.target.value)} /><br/>
                    <button onClick={handelEve} className='btn add' type='submit'>Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}
export default Add;