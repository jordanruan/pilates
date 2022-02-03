import React from "react";
import { Link } from "react-router-dom";
import "./UserCard.css";


export default function UserCard({user}){


    return(
        <div className="user-card">
                <h1 className="user-card__title">{user.id}</h1>
                <h1 className="user-card__title">{user.nome}</h1>
                <h1 className="user-card__title">{user.cpf}</h1>
                <h1 className="user-card__title">{user.endereco}</h1>
                <h1 className="user-card__title">{user.data_nasc}</h1>
                <h1 className="user-card__title">{user.email}</h1>
                <h1 className="user-card__title">{user.senha}</h1>
                <Link to={`/edit/${user.id}`}>Editar</Link>
                <Link to={`/delete/${user.id}`} >Excluir</Link>
        </div>
    )
}