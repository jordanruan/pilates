import React from "react";
import{
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

import PagesHome from './Home/Home';
import PagesModality from './Modality/Modality';
import PagesClassSchedule from './ClassSchedule/ClassSchedule';
import PagesSchedule from './Schedule/Schedule';
import PagesFormLogin from './Form/Login';
import FormRegister from '../Components/Form/Register';
import PagesUserList from './UsersList/PagesUsersList';
import PagesFormDelete from "./Form/Delete";
import PagesFormEdit from './Form/Edit';


export default function Root(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<PagesHome/>}/>
                <Route path="/class-schedule" element={<PagesClassSchedule/>}/>
                <Route path="/modality" element={<PagesModality/>}/>
                <Route path="/schedule" element={<PagesSchedule/>}/>
                <Route path="/form-login" element={<PagesFormLogin/>}/>
                <Route path="/form-register" element={<FormRegister/>}/>
                <Route path="/edit/:id" element={<PagesFormEdit/>}/>
                <Route path="/delete/:id" element={<PagesFormDelete/>}/>
                <Route path="/list" element={<PagesUserList/>}/>
            </Routes>
        </Router>
    )
}