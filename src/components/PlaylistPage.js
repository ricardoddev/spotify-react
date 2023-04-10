import { useParams } from "react-router-dom";
import Cabecalho from "./Cabecalho";
import Playlists from "../playlists.mock";
import "../style.css";

const PlaylistPage = () => {
    const {id} = useParams()

    const playlist = Playlists.find( p => p.id == id)

    const play = playlist.musicas.map((musica) => {
        return (
            <div class="artist-song">
                <h2><u>{musica.nome}</u> - {musica.cantor}</h2>
                <audio src={musica.arq} controls></audio>
            </div>
            )
    })
    
    return(
        <>
            <Cabecalho />
            <div class="single-playlist">
                {play}
            </div>
        </>
    );
}

export default PlaylistPage;