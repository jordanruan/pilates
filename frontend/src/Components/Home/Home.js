import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import 'rbx/index.css';
import './Home.css';
import ImageGallery from 'react-image-gallery';
import Iframe from 'react-iframe';
import {
    Container,
    Message,
    Delete,
    Title,
    Column
} from "rbx";


import { ColumnGroup } from 'rbx/grid/columns/column-group';


const images = [
    {
        original: '/imgs/original/banner1.png',
        thumbnail: '/imgs/thumb/banner1.png',
    },
    {
        original: '/imgs/original/banner2.jpg',
        thumbnail: '/imgs/thumb/banner2.jpg',
    },
    {
        original: '/imgs/original/banner3.png',
        thumbnail: '/imgs/thumb/banner3.png',
    },
    {
        original: '/imgs/original/banner4.jpg',
        thumbnail: '/imgs/thumb/banner4.jpg',
    }
]

export default function Home(){

    return(
        <Container>
            <ColumnGroup>
                <Column>
                    <Container>
                        <ColumnGroup>
                            <Column>
                                <section className="hero">
                                    <ImageGallery className="image-gallery image-gallery-icon" items={images} autoPlay={true}/>
                                </section> 
                            </Column>
                        </ColumnGroup>
                    </Container>

                    <section className="margem-titulo">
                        <div className="container has-text-centered">
                            <Title className="title is-4"> Principais Notícias</Title>
                        </div>
                    </section>
                    
                    <Container>
                        <ColumnGroup>
                            <Column>
                                <Message color="link">
                                    <Message.Header>
                                        <p>Jornada Sul-Americana de Pilates</p>
                                        <Delete as="button" />
                                    </Message.Header>
                                    <Message.Body>
                                        A Jornada Sul-Americana de Pilates é o evento mais charmoso que reúne os maiores nomes nacionais e internacionais do Pilates em três dias de pura imersão no método!
                                        Além de você adquirir um conhecimento incrível e conhecer novas pessoas, você também poderá desfrutar de um hotel em Gramado no Rio Grande do Sul e, ainda, participar da única premiação do Pilates: o Prêmio Contrology, conhecido como o Oscar do Pilates.
                                    </Message.Body>
                                </Message>
                            </Column>
                            <Column>
                                <Message color="link">
                                    <Message.Header>
                                        <p>Encontro Brasileiro de Pilates</p>
                                        <Delete as="button" />
                                    </Message.Header>
                                    <Message.Body>
                                    O Encontro Brasileiro de Pilates é a maior evento de Pilates da América do Sul, realizado todos os anos pela VOLL Pilates Group. É uma oportunidade incrível para você, instrutor adquirir conhecimento com workshops e palestrantes consagrados de diferentes nacionalidades.

                                    No evento você poderá aprimorar seus conhecimentos sobre diversas áreas do método, como Pilates Clássico, Contemporâneo, Pilates para Gestantes, Pilates para Idosos, Treinamento Funcional, Pilates aplicado à Coluna ou às Fáscias, e muito mais!
                                    </Message.Body>
                                </Message>
                            </Column>
                            <Column>
                                <Message color="link">
                                    <Message.Header>
                                        <p>Meeting Floripa</p>
                                        <Delete as="button" />
                                    </Message.Header>
                                    <Message.Body>
                                    O Meeting Floripa é uma mistura de Pilates e Treinamento Funcional em Workshops ministrados por profissionais experts nacionais e internacionais em uma das ilhas mais bonitas do Brasil: Florianópolis!

                                    São três dias de treinamentos completos e essenciais, em que você realiza networking com pessoas de todo o Brasil e, ainda, vivencia uma experiência inacreditável para agregar a sua carreira!
                                    </Message.Body>
                                </Message>
                            </Column>
                        </ColumnGroup>
                    </Container>
                   
                    <section className="margem-titulo">
                        <div className="container has-text-centered">
                            <Title className="title is-4">Onde estamos</Title>
                        </div>
                    </section>

                    <Container>
                        <ColumnGroup>
                            <Column>
                                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.292347932305!2d-38.470137485240954!3d-3.7463676972743887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74639eab37425%3A0x4f0c6d6d3245b42d!2sRua%20Dr.%20Ribamar%20Lobo%20-%20Fortaleza%2C%20CE!5e0!3m2!1spt-BR!2sbr!4v1635984074216!5m2!1spt-BR!2sbr" width="1176" height="600" style="border:0;" allowfullscreen="" loading="lazy"/>
                            </Column>
                        </ColumnGroup>
                    </Container>
                </Column>
            </ColumnGroup>
        </Container>
    )
}