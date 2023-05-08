import Cabecalho from "./Cabecalho";
import { Button, Form, Label, Col, Input, FormGroup } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const customColor = "#1DB954";
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .get(`http://localhost:3001/users?email=${email}`)
      .then((resultado) => {
        const user = resultado.data[0];
        if (user.senha !== senha) {
          setErrorLogin(true);
        } else {
          setErrorLogin(false);
          localStorage.setItem("UsuarioLogado", JSON.stringify(user));
          navigate("/playlists");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <main
      style={{
        backgroundColor: "#ffff",
      }}
    >
      <Cabecalho />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Form onSubmit={handleSubmit} style={{ backgroundColor: "#ffff" }}>
          <FormGroup row>
            <Label for="Email" sm={4}>
              Email
            </Label>
            <Col sm={12}>
              <Input
                id="Email"
                name="email"
                placeholder="digite seu email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ borderColor: errorLogin ? "red" : "initial" }}
              />
              {errorLogin && (
                <p style={{ color: "red" }}>Email ou senha inválidos.</p>
              )}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="senha" sm={4}>
              Senha
            </Label>
            <Col sm={12}>
              <Input
                id="senhaEx"
                name="senha"
                placeholder="digite sua senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                style={{ borderColor: errorLogin ? "red" : "initial" }}
              />
              {errorLogin && (
                <p style={{ color: "red" }}>Email ou senha inválidos.</p>
              )}
            </Col>
          </FormGroup>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Button
              type="submit"
              style={{
                backgroundColor: customColor,
                color: "#000000",
                borderRadius: "500px",
                width: "100px",
              }}
            >
              Entrar
            </Button>
          </div>
        </Form>
      </div>
    </main>
  );
};

export default Login;
