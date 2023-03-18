import Cabecalho from "./Cabecalho"
import Avatar from "./assets/avatar.png"
import "../style.css"

const Home = () =>{
    return (
        <main>
            <Cabecalho />
            <div class="container" id="container1">
                <img src={Avatar} alt="Avatar de pessoa ouvindo música"/>
                <div>
                    <h1>O seu aplicativo de música favorito</h1>
                    <ul>
                        <li>Ouça música em qualquer lugar</li>
                        <li>Crie playlists com suas músicas favoritas</li>
                        <li>Sem anúncios</li>
                    </ul>
                </div>
            </div>
            <div class="container" id="entrar">
                <h1>Acesse o aplicativo aqui:</h1>
                <button>ENTRAR</button>
            </div>
        </main>
    );
}

export default Home