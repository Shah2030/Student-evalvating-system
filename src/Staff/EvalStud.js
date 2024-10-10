import React,{useState,useEffect} from 'react'
import Evalvate from '../Service/EvalvateService'
import Form from '../Service/FormService'
import NavBar from './Navigation';
import { useParams } from 'react-router-dom';

function Add()
{
    const {fid,fname,usn,file,dos,det,iem}= useParams();
    const [marks,setMarks]=useState("");
    const [remark,setAdd]=useState("");
    const [markv,setMarkv]=useState("");
    const obj={
        id:det,
        fid:fid,
        fname:fname,
        usn:usn,
        file:file,
        dos:dos,
        iem:iem,
        marks:marks,
        remark:remark};
        
    const handelEve=(e)=>{
        alert(fname)
        e.preventDefault();
        if(marks>markv || marks<0)
            alert("Invalid marks Entered");
        else
            Evalvate.updateEvalvates(det,obj)
            .then((res)=>{
                console.log(res);
                alert("Marks Updated successfully.,!");
            })
            .catch(err=>{
                alert(err);
            })
           
    }
    useEffect(()=>{
        Form.getFormById(fid)
        .then(res=>{
            setMarkv(res.data.marks)
        })
        .catch(err=>{
            alert("Invallid Form");
        })
    })

    return(
        <>
        <NavBar/>
        <div className="div1">
            <h2>Update Student</h2>
            <form >
                    <label>Student USN: </label>
                    <input type='text' name='usn' value={usn} disabled/><br/>
                    <label>Evaluater ID: </label>
                    <input type='text' name='name' value={iem} disabled/><br/>
                    <label>Component Marks: </label>
                    <input placeholder="Enter Marks." style={{width:'12rem'}} type='number' name='marks' value={marks} onChange={(e)=>setMarks(e.target.value)} /><br/>
                    <label>Remark: </label>
                    <input placeholder="Enter Remark" type='text' name='remark' value={remark} onChange={(e)=>setAdd(e.target.value)} /><br/>
                    <button onClick={handelEve} className='btn add' type='submit'>Submit</button>
            </form>
        </div>
        </>
    )
}
export default Add;