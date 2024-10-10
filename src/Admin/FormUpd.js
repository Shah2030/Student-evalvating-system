import React,{useState,useEffect} from 'react'
import Form from '../Service/FormService'
import NavBar from './Navigation';
import { useParams } from 'react-router-dom';

function Add()
{
    const {id}= useParams();
    const [title,setTit]=useState("");
    const [deadline,setDed]=useState("");
    const [notice,setNot]=useState("");
    const [inpfor,setInp]=useState("");
    const [marks,setMar]=useState("");
    const [pro, srtpro]=useState([]);
    const obj={
        fid:id,
        title:title,
        deadline:deadline,
        notice:notice,
        inpfor:inpfor,
        marks:marks};
    const handelEve=(e)=>{
        e.preventDefault();
            Form.updateForms(id,obj)
            .then((res)=>{
                console.log(res);
            })
            .catch(err=>{
                alert(err);
            })
        alert("Form Details Updated successfully.,!");   
    }

    function getformById(id){
        Form.getFormById(id)
        .then((res)=>{
            srtpro(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{     
        getformById(id);
    })

    return(
        <>
        <NavBar/>
        <div id="con">
            <h2>Update form</h2>
            <form style={{display:'grid', gridTemplateColumns:'auto auto'}}>
                <div style={{marginLeft:'25%'}}>
                    <table border={2} cellPadding={10} cellSpacing={10}>
                    <tr><td>form Id: </td><td> {pro.fid}</td></tr>
                    <tr><td>Title:</td> <td> {pro.title}</td></tr>
                    <tr><td>Deadline:</td><td> {pro.deadline}</td></tr>
                    <tr><td>notice:</td><td width={400}> {pro.notice}</td></tr>
                    <tr><td>Type:</td><td> {pro.inpfor}</td></tr>
                    <tr><td>Marks:</td><td> {pro.marks}</td></tr>
                    </table>
                </div>
                <div style={{textAlign:'left'}}>
                    <input type="text" disabled value={id}/><br/>
                    <input placeholder="Enter form Title" type='text' name='title' value={title} onChange={(e)=>setTit(e.target.value)} /><br/>
                    <input type='date' name='deadline' value={deadline} onChange={(e)=>setDed(e.target.value)} /><br/>
                    <textarea placeholder="Enter Notice" cols={33} rows={5} name='notice' value={notice} onChange={(e)=>setNot(e.target.value)}></textarea><br/>
                    <input placeholder="Enter Type" type='text' name='inpfor' value={inpfor} onChange={(e)=>setInp(e.target.value)} /><br/>
                    <input placeholder="Enter Marks" type='number' name='marks' value={marks} onChange={(e)=>setMar(e.target.value)} /><br/>
                    <button onClick={handelEve} className='btn add' type='submit'>Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}
export default Add;