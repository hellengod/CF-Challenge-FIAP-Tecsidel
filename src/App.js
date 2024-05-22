import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';

const Login = () => {
  const navigate = useNavigate();

  const handleLoginClick = (event) => {
    event.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="App">
      <div className="login-container">
        <div className="login-left">
          <div className="logo-container">
            <img src="/Images/logo1.png" alt="EcoVIAS Logo" className="logo1" />
          </div>
          <div className="login-form">
            <h2>Login</h2>
            <p>Acesso ao sistema de monitoramento</p>
            <form>
              <div className="input-group">
                <input type="text" id="usuario" name="usuario" placeholder="Usuário ou E-mail Corporativo" />
              </div>
              <div className="input-group">
                <input type="password" id="senha" name="senha" placeholder="Senha" />
              </div>
              <div className="checkbox-wrapper-14">
                <input type="checkbox" id="termos" name="termos" className="switch" />
                <label htmlFor="termos" className="checkbox-label">Eu concordo com Termos e Condições de Privacidade.</label>
              </div>
              <button className="login-button" onClick={handleLoginClick}>
                <img src="./Images/login-icon.png" alt="Login Icon" className="login-button-image" />
                <span className="login-button-text">Login</span>
              </button>
            </form>
          </div>
        </div>
        <div className="login-right">
          <img src="./Images/background.png" alt="Background" className="background-image" />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;