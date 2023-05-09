import React, { useState } from "react";
import Cabecalho from "./Cabecalho";
import { Link } from 'react-router-dom';

const Usuario = () => {
  const usuarioLogado = JSON.parse(localStorage.getItem("UsuarioLogado"));
  const [usuario, setUsuario] = useState(usuarioLogado);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("UsuarioLogado", JSON.stringify(usuario));
    alert("Usuário atualizado com sucesso!");
  };

  return (
    <>
      <Cabecalho />
      <h1>Editar Usuário</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={usuario.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          name="senha"
          value={usuario.senha}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={usuario.nome}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="data">Data de Nascimento:</label>
        <input
          type="date"
          id="data"
          name="Data"
          value={usuario.Data}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="genero">Gênero:</label>
        <select id="genero" name="genero" value={usuario.genero} onChange={handleChange}>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="outro">Outro</option>
        </select>
        <br />
        <button type="submit">Atualizar</button>
      </form>
    </>
  );
};

export default Usuario;
