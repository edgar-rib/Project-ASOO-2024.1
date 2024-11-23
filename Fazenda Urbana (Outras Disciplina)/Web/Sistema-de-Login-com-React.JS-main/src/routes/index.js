import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import cultura from "../pages/cultura";
import fornecedores from "../pages/fornecedores";
import insumos from "../pages/insumos";
import pedidos from "../pages/pedidos";
import plantios from "../pages/plantios";
import relatorios from "../pages/relatorios";
import usuarios from "../pages/usuarios";
import colheita from "../pages/Colheita";
const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
        <Route exact path="/colheita" element={<Private Item={colheita} />} />
          <Route exact path="/cultura" element={<Private Item={cultura} />} />
          <Route exact path="/fornecedores" element={<Private Item={fornecedores} />} />
          <Route exact path="/insumos" element={<Private Item={insumos} />} />
          <Route exact path="/pedidos" element={<Private Item={pedidos} />} />
          <Route exact path="/relatorios" element={<Private Item={relatorios} />} />
          <Route exact path="/usuarios" element={<Private Item={usuarios} />} />
          <Route exact path="/plantios" element={<Private Item={plantios} />} />
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
