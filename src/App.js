import React from 'react';
import Home from './components/Home';
import Faq from './components/Faq';
import { Routes, Route } from 'react-router-dom'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/faq' element={<Faq />}/>
      </Routes>
    </div>
  );
}