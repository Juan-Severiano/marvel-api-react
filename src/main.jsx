import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './templates/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Characters />} path='/characters' />
        <Route element={<Home />} path='/' />
        <Route element={<Home />} path='/' />
        <Route element={<Home />} path='/' />
        <Route element={<Home />} path='/' />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
