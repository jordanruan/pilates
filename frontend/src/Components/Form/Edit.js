import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


import 'rbx/index.css';

import ComponentsHeader from '../../Components/Header/Header';
import ComponentsFooter from '../../Components/Footer/Footer';
import UiContainer from '../../Components/UI/Container/Container';

import "./Register.css";
import { Button } from "rbx";

const initialValue = {
    nome:'',
    cpf:'',
    endereco:'',
    data_nasc:'',
    email:'',
    senha:'',
}

export default function Edit({id}){

    

    const [values, setValues] = useState(initialValue);
    const navigate = useNavigate();

    useEffect(() => {
        if(id){
            axios.get(`http://localhost:5000/user/${id}`)
                .then((response) =>{
                    setValues(response.data[0]);
                })
        }
    }, []);

    console.log(values);

    function onChange(ev) {
        const { name, value } = ev.target;
    
        setValues({ ...values, [name]: value });
    }
    
    function onSubmit(ev) {
        ev.preventDefault();

        const method = 'put';

        const url = `http://localhost:5000/user/${id}`;
    
        axios[method](url, values)
            .then((response) => {
            navigate('/list');
        });
    }

    return(
        <div>
            <ComponentsHeader/>

            <UiContainer>
                <div>
                    <h1 className="title">Editar</h1>                    

                        <form onSubmit={onSubmit}>
                            <div className="form__group">
                                <label htmlFor="nome">Nome</label>
                                <input id="nome" name="nome" type="text" label="Digite seu nome" onChange={onChange} value={values.nome}/>
                            </div>

                            <div className="form__group">
                                <label htmlFor="cpf">CPF</label>
                                <input id="cpf" name="cpf" type="text" label="Digite seu cpf" onChange={onChange} value={values.cpf}/>
                            </div>

                            <div className="form__group">
                                <label htmlFor="endereco">Endereço</label>
                                <input id="endereco" name="endereco" type="text" label="Digite seu endereço" onChange={onChange} value={values.endereco}/>
                            </div>

                            <div className="form__group">
                                <label htmlFor="data_nasc">Data de Nascimento</label>
                                <input id="data_nasc" name="data_nasc" type="text" label="Digite sua data de nascimento" onChange={onChange} value={values.data_nasc}/>
                            </div>

                            <div className="form__group">
                                <label htmlFor="email">E-mail</label>
                                <input id="email" name="email" type="text" label="Digite seu e-mail" onChange={onChange} value={values.email}/>
                            </div>

                            <div className="form__group">
                                <label htmlFor="senha">Senha</label>
                                <input id="senha" name="senha" type="text" label="Digite sua senha" onChange={onChange} value={values.senha}/>
                            </div>

                            <div className="form-button">
                                <div>
                                    <Button color="success" type="submit">Editar</Button>
                                </div>
                            </div>
                        </form>                            
                </div>
            </UiContainer>

            <ComponentsFooter/>
        </div>
    )
}