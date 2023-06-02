import { Link } from 'react-router-dom';
import Cabecalho from "./Cabecalho";
import "../style.css";
import axios from 'axios';
import { useEffect, useState } from 'react';


const PlaylistsList = () => {
    const [playlists, setPlaylists] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/playlists')
        .then((res) => setPlaylists(res.data))
    }, [])

    const result = playlists.map((playlist) => {
        return (
            <div>
                <Link to={"/playlists/"+playlist._id}>
                    <button><img src={playlist.capa} alt="Capa da playlist" id="images-size"/></button>
                </Link>
                
                <h2>{playlist.titulo}</h2>
            </div>
        )
    })
    return(
        <>
            <Cabecalho />
            <div style={{backgroundColor: "#696969", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}} >
                <Link to='/musicas'><button id="button-back" style={{margin: "50px 0 30px"}}>Buscar Música</button></Link>
                <Link to='/apagarplaylist'><button id="button-back" style={{margin: "50px 0 30px"}}>Deletar playlist</button></Link>
            </div>
            <div class="playlists">
                {result}
                <Link to="/addplaylist"><button class="minimalist-buttons">+</button></Link>
            </div>
        </>
    );
}

export default PlaylistsList;