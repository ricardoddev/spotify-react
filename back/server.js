const express = require("express");
const cors = require("cors");
const app = express();
const client = require("./db");
const { ObjectId } = require("mongodb");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Oi tudo certo?");
});

app.get("/usuario", async (req, res) => {
  await client.connect();
  const users = await client.db("spotify").collection("users").find().toArray();
  res.json(users);
});

app.post("/usuario", async (req, res) => {
  const { email, senha, nome, Data, genero } = req.body;

  const new_usuario = {
    _id: new ObjectId(),
    email,
    senha,
    nome,
    Data,
    genero,
  };
  await client.connect();
  const usuario = await client
    .db("spotify")
    .collection("users")
    .insertOne(new_usuario);

  res.status(201).send("Usuario cadastrado com sucesso! :)");
});

app.get("/usuariologado", async (req, res) => {
  const email = req.query.email;

  await client.connect();

  const usuarioEncontrado = await client
    .db("spotify")
    .collection("users")
    .findOne({ email: email });

  res.send(usuarioEncontrado);
});

app.put("/usuarios/:id", async (req, res) => {
  const { id } = req.params;
  const { email, senha, nome, Data, genero } = req.body;

  try {
    await client.connect();
    const user_id = new ObjectId(id);
    const collection = client.db("spotify").collection("users");

    const resultado = await collection.updateOne(
      { _id: user_id },
      { $set: { email, senha, nome, Data, genero } }
    );

    if (resultado.modifiedCount === 0) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const AttUser = await collection.findOne({ _id: user_id });
    return res.json(AttUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao atualizar o usuário" });
  } finally {
    await client.close();
  }
});

app.get("/playlists", async (req, res) => {
  await client.connect();
  const plays = await client
    .db("spotify")
    .collection("playlists")
    .find()
    .toArray();
  res.json(plays);
});

app.get(`/playlists/:id`, async (req, res) => {
  const { id } = req.params;
  const playlistId = new ObjectId(id);

  await client.connect();
  const playlist = await client
    .db("spotify")
    .collection("playlists")
    .findOne({ _id: playlistId });

  res.json(playlist);
});

app.post("/playlists", async (req, res) => {
  const { titulo, capa } = req.body;
  const newPlaylist = {
    _id: new ObjectId(),
    titulo,
    capa,
    musicas: [],
  };

  await client.connect();
  const playlist = await client
    .db("spotify")
    .collection("playlists")
    .insertOne(newPlaylist);

  res.send(newPlaylist);
});

app.patch(`/playlists/:idPlaylist`, async (req, res) => {
  const { idPlaylist } = req.params;
  const { nome, cantor, arq } = req.body;

  const playlistId = new ObjectId(idPlaylist);
  const playlist = await client
    .db("spotify")
    .collection("playlists")
    .findOne({ _id: playlistId });

  if (playlist) {
    const newMusica = {
      id: new ObjectId(),
      nome,
      cantor,
      arq,
    };

    playlist.musicas.push(newMusica);

    const result = await client
      .db("spotify")
      .collection("playlists")
      .updateOne({ _id: playlistId }, { $set: { musicas: playlist.musicas } });

    if (result.modifiedCount > 0) {
      res.send(playlist);
    } else {
      res.send("Nenhuma alteração feita na playlist");
    }
  }
});

app.get("/musicas", async (req, res) => {
  const search = req.query.search;
  const regex = new RegExp(search, "i");

  await client.connect();
  const musicas = await client
    .db("spotify")
    .collection("songs")
    .find({ nome: { $regex: regex } })
    .toArray();

  res.send(musicas);
});

app.delete("/playlists/:id", async (req, res) => {
  const { id } = req.params;
  const playlistId = new ObjectId(id);

  const deletedPlaylist = await client
    .db("spotify")
    .collection("playlists")
    .deleteOne({ _id: playlistId });

  if (deletedPlaylist.deletedCount > 0) {
    res.status(200).send("Playlist deletada");
  } else {
    res.status(404).send("Playlist não encontrada");
  }
});

app.listen(3001, () => {
  console.log("Servidor iniciado na porta 3001");
});
