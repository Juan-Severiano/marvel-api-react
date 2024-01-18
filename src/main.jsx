import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './styles/globalStyles.scss'

import Router from './components/Router';
import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
