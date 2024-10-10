import React,{useState} from 'react'
import Form from '../Service/FormService'
import NavBar from './Navigation';

function Add()
{
    const [id,setId]= useState();
    const [title,setTit]=useState("");
    const [deadline,setDed]=useState("");
    const [notice,setNot]=useState("");
    const [inpfor,setInp]=useState("");
    const [marks,setMar]=useState("");
    
    const obj={
        fid:id,
        title:title,
        deadline:deadline,
        notice:notice,
        inpfor:inpfor,
        marks:marks};
    
    const handelEve=(e)=>{
        e.preventDefault();
            Form.createForms(obj)
            .then((res)=>{
                console.log(res);
            })
            .catch(err=>{
                alert(err);
            })
        alert("Form added successfully.,!");   
    }

    return(
        <>
        <NavBar/>
        <div id="con">
            <h2>Add Form</h2>
            <form>
                <div>
                <input type="text" placeholder='Enter Form id' name="id" value={id} onChange={(e)=>setId(e.target.value)}/><br/>
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