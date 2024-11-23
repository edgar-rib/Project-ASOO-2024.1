import React from "react";
import { useNavigate } from "react-router-dom";
import * as  S from "./styles"; // Estilos do Sidebar

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <S.Sidebar>
      <S.MenuItem onClick={() => navigate("../../pages/Home")}>home</S.MenuItem>
      <S.MenuItem onClick={() => navigate("../../pages/Colheita")}>Colheita</S.MenuItem>
      <S.MenuItem onClick={() => navigate("../../pages/cultura")}>Cultura</S.MenuItem>
      <S.MenuItem onClick={() => navigate("../../pages/fornecedores")}>fornecedores</S.MenuItem>
      <S.MenuItem onClick={() => navigate("../../pages/insumos")}>Insumos</S.MenuItem>
      <S.MenuItem onClick={() => navigate("../../pages/pedidos")}>Pedidos</S.MenuItem>
      <S.MenuItem onClick={() => navigate("../../pages/plantios")}>Plantios</S.MenuItem>
      <S.MenuItem onClick={() => navigate("../../pages/relatorios")}>Relatorios</S.MenuItem>
      <S.MenuItem onClick={() => navigate("../../pages/usuarios")}>Usuarios</S.MenuItem>
    </S.Sidebar>
  );
};

export default Sidebar;
