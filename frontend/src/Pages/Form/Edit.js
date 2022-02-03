import React from "react";
import { useParams } from "react-router";
import FormEdit from '../../Components/Form/Edit';

export default function Edit(){

    const {id} = useParams();

    return(
        <FormEdit id={Number.parseInt(id, 10)}/>
    )
}