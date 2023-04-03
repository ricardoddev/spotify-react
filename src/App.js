import React from 'react';
import Home from './components/Home';
import Faq from './components/Faq';
import Cadastro from './components/Cadastro';
import PlaylistsList from './components/PlaylistsList';
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/faq' element={<Faq />}/>
        <Route path='/cadastro' element={<Cadastro />}/>
        <Route path='/playlists/' element={<PlaylistsList />}/>
      </Routes>
    </div>
  );
}