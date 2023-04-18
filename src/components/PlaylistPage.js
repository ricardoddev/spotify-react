import { useParams, Link } from "react-router-dom";
import Cabecalho from "./Cabecalho";
import "../style.css";
import { useState, useEffect } from "react";
import axios from "axios";
//import Playlists from "../playlist.mock";

const PlaylistPage = () => {
    const {id} = useParams()
    const [playlists, setPlaylists] = useState([])
    const [musicas, setMusicas] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/playlist/${id}`)
        .then((res) => setMusicas(res.data))
    }, [id])

    const playlist = playlists.find(p => p.id == id)

    const play = playlist ? playlist.musicas.map((musica) => {
        return (
            <div class="artist-song">
                <h2><u>{musica.nome}</u> - {musica.cantor}</h2>
                <audio src={musica.arq} controls></audio>
            </div>
            )
    }) : null;

    return(
        <>
            <Cabecalho />
            <div class="single-playlist">
                {play}
                <Link to='/playlists'><button>Voltar</button></Link>
            </div>
        </>
    );
}

export default PlaylistPage;