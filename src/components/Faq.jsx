import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../style.css";
import Cabecalho from "./Cabecalho";

const InfoBox = ({ pergunta, resposta }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="info-box">
      <button onClick={toggle}>
        <FontAwesomeIcon
          icon={isOpen ? faMinus : faPlus}
          className={isOpen ? "rotate" : ""}
        />
      </button>
      <div>
        <h3>{pergunta}</h3>
        {isOpen && <p>{resposta}</p>}
      </div>
    </div>
  );
};

const Faq2 = () => {
  const perguntas = [
    {
      pergunta: "Como realizar o cadastro?",
      resposta:
        'Realize o login através do botão "ENTRAR", caso já tenha uma conta, ou crie uma em "Cadastre-se".',
    },
    {
      pergunta: "É possível criar playlists no aplicativo?",
      resposta:
        "Sim, é possível criar várias playlists com suas músicas favoritas!",
    },
    {
      pergunta: "Posso ouvir músicas sem internet?",
      resposta:
        "Nossa plataforma está hospedada online, portanto será necessário usar internet para usá-la.",
    },
    {
      pergunta: "Onde posso trocar minha senha?",
      resposta:
        'Ao clicar em "ENTRAR", você deve clicar em "Esqueci minha senha?" e prosseguir com as orientações.',
    },
    {
      pergunta: "Não lembro de minhas informações de login, como proceder?",
      resposta:
        'Você pode utilizar o recurso "Esqueci minha senha" para recuperar suas informações através do email.',
    },
    {
      pergunta: "Consigo realizar o cadastro por minha conta do Facebook?",
      resposta:
        "Sim! Será possível vincular sua conta a alguma conta do Gmail, assim como do Facebook.",
    },
  ];

  return (
    <>
      <Cabecalho/>
      <div className="faq">
        <h2>Dúvidas frequentes</h2>
        <div className="info-box-container">
          {perguntas.map((pergunta, index) => (
            <InfoBox
              key={index}
              pergunta={pergunta.pergunta}
              resposta={pergunta.resposta}
            />
          ))}
        </div>
      </div>
      <div id="preencher-bg"></div>
    </>
  );
};

export default Faq2;
