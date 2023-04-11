import Cabecalho from "./Cabecalho";
import { Button, Form, Label, Col, Input, FormGroup } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Cadastro = () => {
  const customColor = "#1DB954";
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const[nome, setNome] = useState("");

  const [userArray, setUserArray] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = { email, senha, nome};
    setUserArray([...userArray, newUser]);
    setEmail('');
    setSenha('');
    setNome('');
    console.log(userArray);
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
        <a href="#" style={{ color: "#1DB954" }}>
          Já possuo conta
        </a>
      </div>
        </Form>
      </div>
     
    </main>
  );
};

export default Cadastro;
