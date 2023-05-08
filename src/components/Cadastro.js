import Cabecalho from "./Cabecalho";
import { Button, Form, Label, Col, Input, FormGroup } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Cadastro = () => {
  const customColor = "#1DB954";
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const[nome, setNome] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [error, setError] = useState(false)

  function validacao() {
    if (!email || !confirmEmail || !senha || !nome) {
      return false;
    }
    return true;
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    if (email !== confirmEmail) {
      setError(true)
    } else if (validacao()) {
      const newUser = { email, senha, nome};
  
      axios.post('http://localhost:3001/users', newUser).then( (res) => {
        setEmail('');
        setConfirmEmail("");
        setSenha('');
        setNome('');
        setError(false)
      })
    }
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
            <Label for="Email" sm={3}>
              Email
            </Label>
            <Col sm={8}>
              <Input
                id="Email"
                name="email"
                placeholder="digite seu email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="confirmEmail" sm={3}>
              Confirme o Email
            </Label>
            <Col sm={8}>
              <Input
                id="confirmEmail"
                name="confirmEmail"
                placeholder="digite novamente seu email"
                type="email"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
                style={{ borderColor: error ? "red" : "initial" }}
              />
              {error && (
                <p style={{ color: "red" }}>Campos de email diferentes</p>
                )}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="senha" sm={3}>
              Senha
            </Label>
            <Col sm={8}>
              <Input
                id="senhaEx"
                name="senha"
                placeholder="digite sua senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="nome" sm={3}>
              Nome de Usuário
            </Label>
            <Col sm={8}>
              <Input
                type="text"
                id="nome"
                name="nome"
                placeholder="Digite seu nome de Usuário"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="DataEx" sm={3}>
              Data de nascimento
            </Label>
            <Col sm={8}>
              <Input
                id="data"
                name="data"
                placeholder="date placeholder"
                type="date"
              />
            </Col>
          </FormGroup>
          <legend className="col-form-label col-sm-5">Qual seu gênero?</legend>
          <Col sm={8}>
            <FormGroup check>
              <Input name="M" type="radio" /> <Label check>Masculino</Label>
            </FormGroup>
            <FormGroup check>
              <Input name="F" type="radio" /> <Label check>Feminino</Label>
            </FormGroup>
            <FormGroup check>
              <Input name="O" type="radio" /> <Label check>Outro</Label>
            </FormGroup>
          </Col>
          <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Button
          type="submit"
          style={{
            backgroundColor: customColor,
            color: "#000000",
            marginRight: "10px",
          }}
        >
          Inscrever-se
        </Button>
        <Link to= "/login" >
        <a href="#" style={{ color: "#1DB954" }}>
          Já possuo conta
        </a>
        </Link>
      </div>
        </Form>
      </div>
     
    </main>
  );
};

export default Cadastro;
