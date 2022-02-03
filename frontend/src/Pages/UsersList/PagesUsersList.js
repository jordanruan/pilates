import React from "react";
import UsersList from "../../Components/UsersList/UsersList";
import UiContainer from "../../Components/UI/Container/Container";
import Header from "../../Components/Header/Header";
import { Title } from "rbx";




export default function PagesUsersList(){

  return(
    <div>
      <Header/>
      <section className="margem-titulo">
        <div className="container has-text-centered">
            <Title className="title is-4"> Lista de Usuários </Title>
        </div>
      </section>
      <UiContainer>
        <UsersList/>
      </UiContainer>
    </div>
    
  );
}