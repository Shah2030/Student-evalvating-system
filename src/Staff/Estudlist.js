import React,{useEffect, useState} from 'react';
import NavBar from './Navigation';
import {Link, useParams} from 'react-router-dom'
import Form from '../Service/EvalvateService';
import Evalvate from '../Service/IEvalavatorService';
function ASD()
{
    const {id,fid,ft}=useParams();
    const [val,setdata2]=useState([]);  
    const [det,setDet]=useState();
    const val1 = val.filter((t) => t.iem==det) 
    const getall=()=>{
        Form.getAllEvalvates()
        .then(res =>{
            setdata2(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{     
        getall();
        Evalvate.getIevalvatorById(id)
        .then(res =>{
            setDet(res.data.ieid)
        })
        .catch(err=>{
            console.log(err)
        })

    },[])

    return(
        <>
            <NavBar/>
            <div className='div1'>
                <table align='center'border={1} cellPadding={25} cellSpacing={10}>
                    <tr>
                        <th colSpan={7}> <h2>Evalvated Student Details </h2></th>
                    </tr>
                    <tr>
                        <td>Student USN</td>
                        <td>Date of Submission</td>
                        <td>Evaluater ID</td>
                        <td>marks</td>
                        <td>Remark</td>
                        <td>View File</td>
                    </tr>
                    {
                        val1.map((re)=>(
                           <tr>
                                <td>{re.usn}</td>
                                <td>{re.dos}</td>
                                <td>{det}</td>
                                <td>{re.marks?re.marks:0}</td>                               
                                <td>{re.remark?re.remark:'no remark added yet'}</td>
                                <td><a download href={require('../Files/'+re.file)} className='btn upd'>Download</a></td>
                           </tr> 
                        ))
                    }
                </table>
            </div>
        </>
    );
}
export default ASD;