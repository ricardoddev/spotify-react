import Cabecalho from "./Cabecalho";
import Playlists from "../playlists.mock";
import "../style.css";

const PlaylistsList = () => {
    const result = Playlists.map((playlist) => {
        return (
            <div>
                <button><img src={playlist.capa} alt="Capa da playlist" /></button>
                <h2>{playlist.titulo}</h2>
            </div>
        )
    })
    return(
        <>
            <Cabecalho />
            <div class="playlists">
                {result}
            </div>
        </>
    );
}

export default PlaylistsList;