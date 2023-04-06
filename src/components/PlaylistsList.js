import { Link } from 'react-router-dom';
import Cabecalho from "./Cabecalho";
import Playlists from "../playlists.mock";
import "../style.css";

const PlaylistsList = () => {
    const result = Playlists.map((playlist) => {
        return (
            <div id="centralizar">
                <Link to={"/playlists/"+playlist.id}>
                    <button><img src={playlist.capa} alt="Capa da playlist"  id="images-size"/></button>
                </Link>
                
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