import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

import { Link } from 'react-router-dom';

import {useFormik} from 'formik';
import * as yup from 'yup';


import 'rbx/index.css';

import ComponentsHeader from '../../Components/Header/Header';
import ComponentsFooter from '../../Components/Footer/Footer';
import UiContainer from '../../Components/UI/Container/Container';

import "./Register.css";
import { Button } from "rbx";


export default function Register(){

    const navigate = useNavigate();

    const formik = useFormik({

        initialValues:{
            name:'',
            cpf:'',
            address:'',
            birthDate:'',
            email:'',
            password:'',
        },

        validationSchema:yup.object({
            name: yup.string().required('Campo obrigatório'),
            cpf: yup.string().required('Campo obrigatório'),
            address: yup.string().required('Campo obrigatório'),
            birthDate: yup.string().required('Campo obrigatório'),
            email: yup.string().required('Campo obrigatório'),
            password: yup.string().required('Campo obrigatório'),
        }),

        onSubmit: values => {
            const method = 'post';

            const url = `http://localhost:5000/user`;
    
            axios[method](url, values)
                .then((response) => {
                navigate('/list');
            });
        },

    });

    return(
        <div>
            <ComponentsHeader/>

            <UiContainer>
                <div>
                    <h1 className="title">Cadastre-se</h1>                    

                        <form onSubmit={formik.handleSubmit}>
                            <div className="form__group">
                                <label htmlFor="name">Nome</label>
                                <input id="name" name="name" type="text" label="Digite seu nome" onChange={formik.handleChange} value={formik.values.name}/>
                            </div>
                            {formik.touched.name && formik.errors.name ? (
                                <div className="mensagem">{formik.errors.name}</div>
                            ) : null}

                            <div className="form__group">
                                <label htmlFor="cpf">CPF</label>
                                <input id="cpf" name="cpf" type="text" label="Digite seu cpf" onChange={formik.handleChange} value={formik.values.cpf}/>
                            </div>
                            {formik.touched.cpf && formik.errors.cpf ? (
                                <div className="mensagem">{formik.errors.cpf}</div>
                            ) : null}


                            <div className="form__group">
                                <label htmlFor="address">Endereço</label>
                                <input id="address" name="address" type="text" label="Digite seu endereço" onChange={formik.handleChange} value={formik.values.address}/>
                            </div>
                            {formik.touched.address && formik.errors.address ? (
                                <div className="mensagem">{formik.errors.address}</div>
                            ) : null}


                            <div className="form__group">
                                <label htmlFor="birthDate">Data de Nascimento</label>
                                <input id="birthDate" name="birthDate" type="text" label="Digite sua data de nascimento" onChange={formik.handleChange} value={formik.values.birthDate}/>
                            </div>
                            {formik.touched.birthDate && formik.errors.birthDate ? (
                                <div className="mensagem">{formik.errors.birthDate}</div>
                            ) : null}


                            <div className="form__group">
                                <label htmlFor="email">E-mail</label>
                                <input id="email" name="email" type="text" label="Digite seu e-mail" onChange={formik.handleChange} value={formik.values.email}/>
                            </div>
                            {formik.touched.email && formik.errors.email ? (
                                <div className="mensagem">{formik.errors.email}</div>
                            ) : null}


                            <div className="form__group">
                                <label htmlFor="password">Senha</label>
                                <input id="password" name="password" type="text" label="Digite sua senha" onChange={formik.handleChange} value={formik.values.password}/>
                            </div>
                            {formik.touched.password && formik.errors.password ? (
                                <div className="mensagem">{formik.errors.password}</div>
                            ) : null}


                            <div className="form-button">
                                <div>
                                    <Button color="success" type="submit">Salvar</Button>
                                </div>
                                <div>
                                    <Link to="/list" className="btn">Listar Usuários</Link>
                                </div>
                            </div>
                        </form>                            
                </div>
            </UiContainer>

            <ComponentsFooter/>
        </div>
    )
}