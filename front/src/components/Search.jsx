import { useState } from "react";
import Cabecalho from "./Cabecalho";
import Icone from "./assets/iconSearch.png"
import axios from "axios";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResult, setSearchResult] = useState([])

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const searchMusic = async () => {
    try {
      const response = await axios.get('/musicas?search=' + searchTerm);
      setSearchResult(response.data);
    } catch (error) {
      console.error('Erro ao buscar músicas:', error);
      setSearchResult([]);
    }
  };

  return (
    <>
      <Cabecalho />
      <div style={{display: 'flex', justifyContent: 'center', height: '88vh', backgroundColor: '#EBF5EE'}}>
        <div id='searchbarDiv'>
          <input type="search" value={searchTerm} onChange={handleSearchInputChange} placeholder="O que você quer ouvir?"/>
          <button onClick={searchMusic}><img src={Icone} alt="Ícone lupa" /></button>
        </div>
        {searchResult.length > 0 ? (
        <ul>
          {searchResult.map((musica) => (
            <li key={musica.id}>{musica.nome}</li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma música encontrada.</p>
      )}
      </div>
    </>
  );
};

export default Search;