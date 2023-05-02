import { useParams, Link } from "react-router-dom";
import Cabecalho from "./Cabecalho";
import "../style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ButtonBack from "./ButtonBack";

const PlaylistPage = () => {
    const {id} = useParams();
    const [playlist, setPlaylist] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3001/playlists/${id}`)
        .then((res) => {
            setPlaylist(res.data);})
        .catch((err) => console.log(err));
    }, [id]);

    const play = playlist?.musicas?.map((musica) => {
        return (
            <div class="artist-song" key={musica.id}>
                <h2><u>{musica.nome}</u> - {musica.cantor}</h2>
                <audio src={musica.arq} controls></audio>
            </div>
            );
    });

    return(
        <>
            <Cabecalho />
                {playlist && (
                    <div>
                        <div className="single-playlist">
                            <div class="card-playlist">
                                <img src={playlist.capa} alt={playlist.titulo} id='images-size-inside-playlist'/>
                                <h1>{playlist.titulo}</h1>
                            </div>
                            <div class="list-songs">
                                {play}
                            </div>
                            <Link to={`/playlist/${id}/addsong`}><button class="minimalist-buttons">+</button></Link>
                        </div>
                
                        <ButtonBack />
                    </div>
                )}
        </>
    );
}

export default PlaylistPage;