import React from "react";
import { useParams } from "react-router";
import Delete from '../../Components/Delete/Delete';

export default function Edit(){

    const {id} = useParams();

    return(
        <Delete id={Number.parseInt(id, 10)}/>
    )
}