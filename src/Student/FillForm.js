import React,{useState,useEffect} from 'react'
import Form from '../Service/FormService'
import Evalvate from '../Service/EvalvateService'
import NavBar from './Navigation';
import Student from '../Service/StudentService'
import { useParams } from 'react-router-dom';

function Add()
{
    const {id,fid,ft}=useParams();
    const [pro,setpro]=useState([]);
    const [usn,setUsn]=useState("");
    const [file,setFile]=useState([]);
    const [dos,setDos]=useState("");
    const today = new Date().toISOString().split('T')[0];
    const obj={
        fid:fid,
        fname:ft,
        usn:usn,
        file:file.name,
        dos:today,
        iem:'',
        eem:'',
        marks:'',
        remark:''
    };

    const handelEve=(e)=>{
        //e.preventDefault();
            Evalvate.createEvalvates(obj)
            .then((res)=>{
                alert("Form Submited successfully.,!");
            })
            .catch(err=>{
                alert("You have allready Subimeted the form.,!");
            })
           
    }

    function getFormById(fid){
        Form.getFormById(fid)
        .then((res)=>{
            setpro(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }
      
    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
    };
      
    const handleUploadClick = (e) => {
        e.preventDefault();
      if (!file) {
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (e) => {
        const url = e.target.result;
        const a = document.createElement('a');
        a.href = url;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      };
      try {
        reader.readAsDataURL(file);
        handelEve();  
      } catch (error) {
        alert("No file selected");
      }
    };
  

    useEffect(()=>{     
        getFormById(fid);
        Student.getStudentById(id)
        .then(res=>{
            setUsn(res.data.usn);
        })
        .catch(err=>{
            console.log(err);
        })
    })

    return(
        <>
        <NavBar/>
        <div id="con">
            <div style={{width: '50rem', marginLeft: '25%'}}>
                <h1>{ft} Form</h1>
                <h3>Notice: {pro.notice} That is by <b style={{color: 'red'}}>{pro.deadline}</b> </h3>
            </div>
            <form>
                <input type='text' name='usn' value={usn} onChange={(e)=>setUsn(e.target.value)} placeholder='Enter USN' /><br/>
                <input type='date' value={today} disabled onChange={(e)=>setDos(e.target.value)} /><br/>
                <input type="file" className='fil btn' required="required" onChange={handleFileChange} /><br/>
                {
                    today==pro.deadline ? 
                    <button onClick={handleUploadClick} disabled title="This form will not accept after deadline" className='btn' type='submit'>Submit</button> :
                    <button onClick={handleUploadClick} enabled="true" className='btn add' type='submit'>Submit</button>
                }
            </form>
        </div>
        </>
    )
}
export default Add;