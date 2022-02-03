import React from "react";
import { Title} from "rbx";

import ImgsMatPilates from '../imgs/mat-pilates.jpg';
import ImgPilatesAcrobatico from '../imgs/pilates-acrobatico.jpg';
import ImgPilatesParaGestante from '../imgs/pilates-para-gestante.jpg';
import ImgsPilatesSuspenso from '../imgs/pilates-suspenso.jpg';

export default function Modality(){
    return(
        <section className="section">
            <div className="container has-text-centered">
            <Title>Modalidades</Title>
            <div className="columns is-centered">
            <div className="column">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-2by1">
                                    <img src={ImgsMatPilates} alt="Placeholder"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">Mat Pilates</p>
                                    </div>
                                </div>

                                <div className="content">
                                    É uma formação clássica, no qual é abordado todos os exercícios originais desenvolvidos pelo Joseph Pilates no solo. Esses exercícios são o resultado da construção de ganho de força, flexibilidade e equilíbrio muscular.
                                </div>
                            </div>
                        </div>
                </div>
                <div className="column">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-2by1">
                                    <img src={ImgsPilatesSuspenso} alt="Placeholder"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">Pilates suspenso</p>
                                    </div>
                                </div>

                                <div className="content">
                                É uma modalidade usando como base os exercícios originais do Mat Pilates, mas usando a fita de suspensão, no qual diminui a descarga do peso no solo. Essa é uma modalidade que gera muita instabilidade, por isso treina a força, o equilíbrio.
                                </div>
                            </div>
                        </div>
                </div>
                <div className="column">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-2by1">
                                    <img src={ImgPilatesAcrobatico} alt="Placeholder"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">Pilates Acrobático</p>
                                    </div>
                                </div>

                                <div className="content">
                                É uma modalidade de exercícios realizada nos equipamentos originais desenvolvido por Joseph Pilates, usando como base a suspensão de forma a diminuir a área de apoio gerando assim, maior ganho de força aos alunos.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-2by1">
                                    <img src={ImgPilatesParaGestante} alt="Placeholder"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">Pilates na gestação</p>
                                    </div>
                                </div>

                                <div className="content">
                                Essa é uma formação que vai agregar conhecimento para quem já trabalha com Pilates e quer aumentar o seu público de forma personalizada com base e conhecimento específico sobre todas as alterações que vão acontecer durante a gestação e a pós-gestação
                                </div>
                            </div>
                        </div>
                    </div>
            </div>   
        </div> 
        </section>
                   
    )
}