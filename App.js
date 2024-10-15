import React from 'react';
import { User, MessageCircle, MessageCircleHeart, Home } from 'lucide-react';
import './App.css'; // Importando o CSS

const LoadingPage = () => {
  return (
    <div className="loading-page-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <img src="logoaelin.png" className="logo-aelin" alt="Logo" />
        </div>
        <div className="menu-items">
          <button className="menu-button">
            <Home className="icon-menu" />
          </button>
          <button className="menu-button">
            <MessageCircleHeart className="icon-menu" />
          </button>
          <button className="menu-button-active">
            <MessageCircle className="icon-menu-psico" />
          </button>
          <button className="menu-button">
            <User className="user-icon" />
          </button>
        </div>
      </div>

      {/* Main Content - Loading Spinner */}
      <div className="loading-container">
        <div className="loading-content">
          {/* Imagem animada girando */}
          <div className="loading-image">
            <img
              src="abraxos.png"
              alt="Dragão girando"
            />
          </div>
          {/* Texto centralizado */}
          <div className="loading-text">
            Buscando um Psicólogo(a)...
          </div>
          {/* Três pontinhos animados */}
          <div className="loading-dots">
            <span>.</span>
            <span className="delay-1">.</span>
            <span className="delay-2">.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
