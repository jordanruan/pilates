import React from "react";
import { Navbar, Button } from "rbx";
import Logo from '../imgs/logo.png';
import 'rbx/index.css';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Header(){

    const navigate = useNavigate();

    const handleClickRegister = () =>{
        navigate('/form-register');
    }

    const handleClick = () =>{
        navigate('/form-login');
    }

    return(
        <div>
            <section className="hero is-bold is-link">
                <div className="hero-body">
                            <div className="container has-text-centered">
                                <h1 className="title">
                                    Saúde A+
                                </h1>
                                <p className="subtitle">
                                    Studio de Pilates.
                                </p>
                            </div>
                        </div>
            </section>
            <section className = "hero margem-header">
                <div className="hero-head">
                    <Navbar>
                        <Navbar.Brand>
                            <Navbar.Item href="#">
                            <img
                                src={Logo}
                                alt=""
                                role="presentation"
                                width="162"
                                height="162"
                            />
                            </Navbar.Item>
                            <Navbar.Burger />
                        </Navbar.Brand>
                        <Navbar.Menu>
                            <Navbar.Segment align="start">
                                <Navbar.Item><Link to="/">Inicio</Link></Navbar.Item>
                                <Navbar.Item><Link to="/modality">Modalidades</Link></Navbar.Item>
                                <Navbar.Item><Link to="/schedule">Horários</Link></Navbar.Item>
                                <Navbar.Item><Link to="/class-schedule">Agende Sua Aula</Link></Navbar.Item>             
                            </Navbar.Segment>

                            <Navbar.Segment align="end">
                            <Navbar.Item>
                                <Button.Group>
                                <Button color="success" onClick={handleClickRegister}>
                                    <strong>Cadastre-se</strong>
                                </Button>
                                <Button color="light" onClick={handleClick}>Entrar</Button>
                                </Button.Group>
                            </Navbar.Item>
                            </Navbar.Segment>
                        </Navbar.Menu>
                    </Navbar>
                </div>
            </section>
        </div>
    )
}