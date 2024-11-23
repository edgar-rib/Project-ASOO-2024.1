import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Sidebar from "../../Sidebar/index";
import useAuth from "../../hooks/useAuth";
import * as C from "../../Sidebar/styles"; 

const Colheita = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
    {/* Sidebar */}
    <Sidebar />

    {/* Conteúdo Principal */}
    <C.Content>
      <C.Header>
        <C.ButtonContainer>
          <Button Text="Sair" onClick={() => [signout(), navigate("/")]} />
        </C.ButtonContainer>
      </C.Header>
      <C.MainContent>
        Bem-vindo à Home!
      </C.MainContent>
    </C.Content>
  </C.Container>
);
};


export default Colheita
