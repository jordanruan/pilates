import React from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';


export default function Delete({id}){

    const navigate = useNavigate();
    axios.delete(`http://localhost:5000/user/${id}`).then((response) => {
        navigate('/list');
    })

    return(
        <>
        </>
    )
}