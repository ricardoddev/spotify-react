import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./assets/logo.png";
import "../style.css";

const Cabecalho = () => {
  const usuarioLogado = JSON.parse(localStorage.getItem("UsuarioLogado"));
  const navigate = useNavigate();

  const Sair = () => {
    localStorage.removeItem("UsuarioLogado");
    navigate(-2);
    //window.location.reload();
  };

  return (
    <header>
      <div>
        <Link to="/">
          <img src={Logo} alt="Logotipo Spotify" />
        </Link>
        <span>
          <Link to="/faq">Dúvidas Frequentes</Link>
          {usuarioLogado ? (
            <>
            <span style={{color : "#1db954", fontWeight: "bold"}}>{usuarioLogado.nome}</span>

            <Link to="/Usuario">Conta</Link>
            <Link onClick={Sair}>Sair</Link>
            </>
          ) : (
            <Link to="/cadastro">Cadastre-se</Link>
          )}
          
        </span>
      </div>
    </header>
  );
};

export default Cabecalho;
