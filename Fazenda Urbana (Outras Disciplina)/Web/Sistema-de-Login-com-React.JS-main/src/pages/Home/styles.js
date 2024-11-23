
// styles.js
import styled from "styled-components";

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
  background-color: #f9f9f9;
  border-bottom: 1px solid #ccc;
`;

export const ButtonContainer = styled.div`
  button {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;


