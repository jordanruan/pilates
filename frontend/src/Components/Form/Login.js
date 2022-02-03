import React from "react";

import ComponentsHeader from '../../Components/Header/Header';
import ComponentsFooter from '../../Components/Footer/Footer';
import { Button } from "rbx";

import {useFormik} from 'formik';
import * as yup from 'yup';

import "./Login.css";

export default function Login(){

    const formik = useFormik({
        initialValues:{
            user:'',
            password:'',
        },

        validationSchema:yup.object({
            user:yup.string().required("O campo é obrigatório."),
            password:yup.string().required("O campo é obrigatório."),
        }),

        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return(
        <div>
            <ComponentsHeader/>

            <section className="containerLogin">            
                <form onSubmit={formik.handleSubmit}>
                    <div className="form__group">
                        <label htmlFor="user">Usuário</label>
                        <input name="user" type="text" label="Digite seu e-mail" onChange={formik.handleChange} value={formik.values.user}/>
                    </div>
                    {formik.touched.user && formik.errors.user ? (
                        <div className="mensagem">{formik.errors.user}</div>
                    ) : null}
                    <div className="form__group">
                        <label htmlFor="password">Senha</label>
                        <input name="password" type="password" label="Senha" onChange={formik.handleChange} value={formik.values.password}/>
                    </div>
                    {formik.touched.password && formik.errors.password ? (
                        <div className="mensagem">{formik.errors.password}</div>
                    ) : null}
                    <div>
                        <Button color="success" type="submit">Entrar</Button>
                    </div>
                </form>
            </section>

            <ComponentsFooter/>

        </div>
    )
}