import { useState } from "react";
import Cabecalho from "./Cabecalho";
import Icone from "./assets/iconSearch.png"
import axios from "axios";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [musicas, setMusicas] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:3001/musicas', {
        params: {
          search: searchTerm
        }
      });
  
      setMusicas(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <>
      <Cabecalho />
      {/* Resto do conteúdo */}
      <div style={{ display: 'flex', flexDirection:"column", height: '88vh', backgroundColor: '#EBF5EE' }}>
        <div id='searchbarDiv'>
          <input
            type="search"
            placeholder="O que você quer ouvir?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>
            <img src={Icone} alt="Ícone lupa" />
          </button>
        </div>
        <div style={{display: "flex", flexDirection: 'column'}}>
          {musicas.map((musica) => (
          <div key={musica._id} style={{}}>
            <h2><u>{musica.nome}</u> - {musica.cantor}</h2>
            <audio src={musica.arq} controls></audio>
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default Search;