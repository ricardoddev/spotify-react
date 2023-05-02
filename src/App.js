import React from 'react';
import Home from './components/Home';
import Faq from './components/Faq';
import Cadastro from './components/Cadastro';
import PlaylistsList from './components/PlaylistsList';
import PlaylistPage from './components/PlaylistPage';
import AddPlaylist from './components/AddPlaylist';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom'
import AddSongToPlaylist from './components/AddSongtoPlaylist';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/faq' element={<Faq />}/>
        <Route path='/cadastro' element={<Cadastro />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/playlists/' element={<PlaylistsList />}/>
        <Route path='/playlists/:id' element={<PlaylistPage />}/>
        <Route path='/addplaylist' element={<AddPlaylist />}/>
        <Route path='playlist/:id/addsong' element={<AddSongToPlaylist />}/>
      </Routes>
    </div>
  );
}