import ImageComponent from './Home'
import About from './About'
import Contact from './Contact'
import StudLogin from './studlogin'
import StaffLogin from './stafflogin'
import AdminLogin from '../Admin/login'
import ADashbord from '../Admin/Dashbord'
import ASD from '../Admin/Staffdet'
import StudDet from '../Admin/Studdet'

import StaffAdd from '../Admin/StaffAdd'
import StaffUpdate from '../Admin/StaUpd'
import StaDash from '../Staff/Dashbord'
import ESL from '../Staff/Estudlist'
import EvalStud from '../Staff/EvalStud'

import FormDet from '../Admin/Form'
import FormAdd from '../Admin/FormAdd'
import FormUpdate from '../Admin/FormUpd'
import Evalvate from '../Staff/Evalvate'

import StudAdd from '../Admin/StudAdd'
import StudUpdate from '../Admin/StudUpd'
import StudDash from '../Student/Dashbord'
import StudForm from '../Student/FillForm'
import Result from '../Student/Result'

import {BrowserRouter, Route, Routes} from 'react-router-dom'; 
import '../Navigate.css';
import '../App.css';
import Foot from './Foot'
function Main() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<ImageComponent/>}></Route>
          <Route path="/abt" element={<About/>}></Route>
          <Route path="/cont" element={<Contact/>}></Route>

          <Route path="/studl" element={<StudLogin/>}></Route>
          <Route path="/stuAdd/" element={<StudAdd/>}></Route>
          <Route path="/supd/:id" element={<StudUpdate/>}></Route>
          <Route path="/studd" element={<StudDet/>}></Route>
          <Route path="/sDash/:id" element={<StudDash/>}></Route>
          <Route path="/result/:id" element={<Result/>}></Route>
          <Route path="/form/:id/:fid/:ft" element={<StudForm/>}></Route>

          <Route path="/sl" element={<StaffLogin/>}></Route>
          <Route path="/staAdd/" element={<StaffAdd/>}></Route>
          <Route path="/stupd/:id" element={<StaffUpdate/>}></Route>
          <Route path="/sd/" element={<ASD/>}></Route>
          <Route path="/esl/:id" element={<ESL/>}></Route>
          <Route path="/stadash/:id" element={<StaDash/>}></Route>
          <Route path="/fmev/:id/:fid/:ft" element={<Evalvate/>}></Route>
          <Route path="/evupd/:det/:fid/:fname/:usn/:file/:dos/:iem/:id" element={<EvalStud/>}></Route>

          <Route path="/frmadd/" element={<FormAdd/>}></Route>
          <Route path="/frmup/:id" element={<FormUpdate/>}></Route>
          <Route path="/frm" element={<FormDet/>}></Route>

          <Route path="/admin" element={<AdminLogin/>}></Route>
          <Route path="/amain/:id" element={<ADashbord/>}></Route>

        </Routes>
        <Foot/>
      </div>
    </BrowserRouter>
  );
}

export default Main;
