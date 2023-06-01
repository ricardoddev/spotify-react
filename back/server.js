const express = require('express');
const app = express();
const client = require('./db');

app.use(express.json())


app.get("/", (req, res) =>{
    res.send("Oi tudo certo?")
})


app.get('/usuario', (req, res) => {
    res.status(200).send(usuarios)
})

app.post("/usuario", (req, res) => {
    const {id, email, senha, nome,Data, genero} = req.body;

    const usuario = {
        id,
        email,
        senha,
        nome,
        Data,
        genero
        
    }
    usuarios.push(usuario)
    res.status(201).send("Usuario cadastrado com sucesso! :)");
})

app.get('/usuariologado', (req, res) => {
    const email = req.query.email;
    const usuarioEncontrado = usuarios.find((usuario) => usuario.email === email);
  
    if (usuarioEncontrado) {
      res.status(200).send('Usuário logado',  res.json(usuarioEncontrado) );

      
    } else {
      res.status(404).send('Usuário não encontrado');
    }
  });
  
app.put("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    const {email, senha, nome,Data, genero} = req.body;

    const AttUser = {
        id,
        email,
        senha,
        nome,
        Data,
        genero
    } 

    const UsuarioIndex = usuarios.findIndex(User  => User.id == id)

    usuarios[UsuarioIndex] = AttUser;

    return res.json(AttUser)
})

app.get('/playlists', async (req, res) => {
  await client.connect()
  const plays = await client.db("spotify").collection("playlists").find().toArray()
  res.json(plays)
})

app.get(`/playlists/:id`, (req, res) => {
    const { id } = req.params;
    const PlaylistIndex = playlists.findIndex(Playlist  => Playlist.id == id)
    res.status(200).send(playlists[PlaylistIndex])
})


app.post("/playlists", (req, res) => {
  const { id, titulo, capa, musicas} = req.body;
  const newPlaylist = {
      id,
      titulo,
      capa,
      musicas
  }
  playlists.push(newPlaylist)
  res.status(201).send("Playlist cadastrada com sucesso! xD");
})

app.patch(`/playlists/:idPlaylist`, (req, res) =>{
  const { idPlaylist } = req.params;

  const PlaylistIndex = playlists.find(Playlist  => Playlist.id == idPlaylist)

  const { id, nome, cantor, arq} = req.body;

  const newMusica = {
      id,
      nome,
      cantor,
      arq
  }

  PlaylistIndex.musicas.push(newMusica)

  res.send("Deu certo paizao")
})

app.get('/musicas', (req, res) => {
  const search = req.query.search;

  const musicasEncontradas = songs.filter((musica) =>
    musica.nome.toLowerCase().includes(search.toLowerCase())
  );
    
  if (musicasEncontradas.length > 0) {
    res.status(200).json(musicasEncontradas);
  } else {
    res.status(404).send('Nenhuma música encontrada');
  }
});

app.delete('/playlists/:id', (req, res) => {
  const { id } = req.params;
  const playlistIndex = playlists.findIndex(Playlist  => Playlist.id == id) // se o id da playlist n for encontrado, findIndex retorna -1

  if (playlistIndex !== -1) {
    playlists.splice(playlistIndex, 1);
    res.status(200).send("Playlist deletada");
  } else {
    res.status(404).send("Playlist não encontrada");
  }
})

app.listen(3001, () => {
  console.log('Servidor iniciado na porta 3001');
});