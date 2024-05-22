import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Add any additional logout logic here (e.g., clearing tokens, user data)
        navigate('/');
    };

    return (
        <nav id="navbar">
            <div className="logo">
                <img src="/Images/logo.png" alt="Logo" />
            </div>
            <ul>
                <li><a href="#"><img src="/Images/home.png" alt="Home" /></a></li>
                <li><a href="#"><img src="/Images/monitoramento.png" alt="Monitoramento" /></a></li>
                <li><a href="#"><img src="/Images/alertas.png" alt="Alertas" /></a></li>
                <li><a href="#"><img src="/Images/Perfil.png" alt="Perfil" /></a></li>
                <li><a href="#"><img src="/Images/configuracoes.png" alt="Configuracoes" /></a></li>
            </ul>
            <div className="logout" onClick={handleLogout}>
                <img src="/Images/logout.png" alt="Logout" />
            </div>
        </nav>
    );
};

export default Navbar;