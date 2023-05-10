import React from 'react';

import Cabecalho from "./Cabecalho";
import "../style.css"


const Faq = () =>{
    return (
        <main id="faq">
            <Cabecalho />       
            <h2>FAQ Spotify</h2>
            <h1>Como podemos te ajudar?</h1> 
            <ul id="duvidas">
                <li id="duvida1">Como realizar o cadastro?</li>
                <p id="resposta1">Você pode realizar o login através do botão "ENTRAR", caso já tenha uma conta, ou pode criar uma em "Cadastre-se".</p>

                <li id="duvida2">É possível criar playlists no aplicativo?</li>
                <p id="resposta2">Sim, é possível criar várias playlists com suas músicas favoritas!</p>

                <li id="duvida3">Posso ouvir músicas sem internet?</li>
                <p id="resposta3">Nossa plataforma está hospedada online, portanto será necessário usar internet para usá-la.</p>

                <li id="duvida5">Onde posso trocar minha senha?</li>
                <p id="resposta5">Ao clicar em "ENTRAR", você deve clicar em "Esqueci minha senha?" e prosseguir com as orientações.</p>

                <li id="duvida4">Não lembro de minhas informações de login, como proceder?</li>
                <p id="resposta4">Você pode utilizar o recurso "Esqueci minha senha" para recuperar suas informações através do email.</p>

                <li id="duvida6">Consigo realizar o cadastro por minha conta do Facebook?</li>    
                <p id="resposta6">Sim! Será possível vincular sua conta a alguma conta do Gmail, assim como do Facebook.</p>
            </ul>
        </main>        
    )
}

export default Faq