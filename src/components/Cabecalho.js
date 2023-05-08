import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/logo.png";
import "../style.css";

const Cabecalho = () => {
  const t = JSON.parse(localStorage.getItem("UsuarioLogado"));

  return (
    <header>
      <div>
        <Link to="/">
          <img src={Logo} alt="Logotipo Spotify" />
        </Link>
        <span>
          <Link to="/faq">Dúvidas Frequentes</Link>
          {teste(t)}
        </span>
      </div>
    </header>
  );
};
function teste(UsuarioLogado) {
  if (UsuarioLogado.nome === null) {
    return (
      <div>
        <Link to="/cadastro">Cadastre-se</Link>
      </div>
    );
  } else {
    return <h1>{UsuarioLogado["nome"]}</h1>;
  }
}
export default Cabecalho;
