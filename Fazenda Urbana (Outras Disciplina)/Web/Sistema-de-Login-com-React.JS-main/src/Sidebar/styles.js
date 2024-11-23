import styled from "styled-components"; 

// Sidebar
export const Sidebar = styled.div`
  width: 250px;
  background-color: #1D3331; /* Cor de fundo do sidebar */
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-right: 1px solid #ccc;
  color: #FFFFFF; /* Cor do texto do sidebar */
  font-size: 18px; /* Aumenta o tamanho da fonte */
`;

// Itens do menu
export const MenuItem = styled.div`
  cursor: pointer;
  padding: 15px 20px;
  background-color: #1D3331;
  border-radius: 5px;
  transition: background-color 0.3s;
  color: #FFFFFF; /* Cor das letras para maior contraste */
  font-size: 20px; /* Aumenta o tamanho da fonte dos itens do menu */
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); /* Sombra leve nas letras */
  
  /* Adiciona um separador entre os itens */
  &:not(:last-child) {
    border-bottom: 3px solid #000000; /* Separador preto mais grosso */
  }

  &:hover {
    background-color: #d0d0d0; /* Cor mais clara no hover para contraste */
    color: #1D3331; /* Cor do texto ao passar o mouse */
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7); /* Aumenta a sombra no hover */
  }
`;

// Outros estilos do Home
export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  background-color: #1D3331;
  border-bottom: none; /* Remove a linha de separação abaixo do Header */
`;

export const ButtonContainer = styled.div`
  button {
    padding: 12px 120px;
    font-size: 18px;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;





