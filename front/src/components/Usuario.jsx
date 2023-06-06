import React, { useState } from "react";
import Cabecalho from "./Cabecalho";
import axios from "axios";
import { Link } from "react-router-dom";

const Usuario = () => {
  const usuarioLogado = JSON.parse(localStorage.getItem("UsuarioLogado"));
  const [usuario, setUsuario] = useState(usuarioLogado);
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:3001/usuarios/${usuario._id}`,
        usuario
      );
      console.log(response.data);
      const updatedUser = response.data;
      localStorage.setItem("UsuarioLogado", JSON.stringify(updatedUser));
      setMensagem("Usuário atualizado com sucesso");
      setErro(false);
    } catch (error) {
      console.error(error);
      setMensagem("Erro ao atualizar o usuário");
      setErro(true);
    }
  };

  return (
    <>
      <Cabecalho />
      <div className="edit-user">
        <h1>Editar Usuário</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={usuario.email}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={usuario.senha}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={usuario.nome}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="data">Data de Nascimento</label>
          <input
            type="date"
            id="data"
            name="Data"
            value={usuario.Data}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="genero">Gênero</label>
          <select
            id="genero"
            name="genero"
            value={usuario.genero}
            onChange={handleChange}
          >
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
          <br />
          <button type="submit">Atualizar</button>
        </form>
        {mensagem && (
          <p style={{ color: erro ? "red" : "green" }}>{mensagem}</p>
        )}
      </div>
    </>
  );
};

export default Usuario;
