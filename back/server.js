const express = require('express');
const cors = require('cors');
const app = express();
const client = require('./db');
const { ObjectId } = require('mongodb')

app.use(express.json())
app.use(cors())

app.get("/", (req, res) =>{
    res.send("Oi tudo certo?")
})


app.get('/usuario', async (req, res) => {
  await client.connect()
  const users = await client.db("spotify").collection("users").find().toArray()
  res.json(users)
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

app.get('/usuariologado', async (req, res) => {
  const email = req.query.email;

  await client.connect()

  const usuarioEncontrado = await client
  .db('spotify')
  .collection('users')
  .findOne({email : email});

  res.send(usuarioEncontrado)
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

app.get(`/playlists/:id`, async (req, res) => {
  const { id } = req.params;
  const playlistId = new ObjectId(id);
  
  await client.connect();
  const playlist = await client
    .db('spotify')
    .collection('playlists')
    .findOne({ _id: playlistId });

  res.json(playlist)
})


app.post("/playlists", async (req, res) => {
  const { titulo, capa} = req.body;
  const newPlaylist = {
      _id: new ObjectId,
      titulo,
      capa,
      musicas: [],
  }

  await client.connect()
    const playlist = await client
    .db('spotify')
    .collection('playlists')
    .insertOne(newPlaylist);
    
  res.send(newPlaylist)
})

app.patch(`/playlists/:idPlaylist`, async (req, res) =>{
  const { idPlaylist } = req.params;
  const { nome, cantor, arq} = req.body;

  const playlistId = new ObjectId(idPlaylist)
  const playlist = await client.db('spotify').collection('playlists').findOne({_id: playlistId})

  if (playlist) {
    const newMusica = {
      id: new ObjectId,
      nome,
      cantor,
      arq
    }

    playlist.musicas.push(newMusica)

    const result = await client.db('spotify').collection('playlists').updateOne(
      { _id: playlistId },
      { $set: {musicas: playlist.musicas} }
    )

    if (result.modifiedCount > 0) {
      res.send(playlist);
    } else {
      res.send('Nenhuma alteração feita na playlist');
    }
  }

})

app.get('/musicas', async (req, res) => {
  const search = req.query.search;
  
  await client.connect()
    const musicas = await client
    .db('spotify')
    .collection('songs')
    .find({nome: {$regex: search}}).toArray();
    
  res.send(musicas)
});

app.delete('/playlists/:id', async (req, res) => {
  const { id } = req.params;
  const playlistId = new ObjectId(id)

  const deletedPlaylist = await client.db('spotify').collection('playlists').deleteOne({_id: playlistId})

  if (deletedPlaylist.deletedCount > 0) {
    res.status(200).send('Playlist deletada');
  } else {
    res.status(404).send('Playlist não encontrada');
  }
})

app.listen(3001, () => {
  console.log('Servidor iniciado na porta 3001');
});