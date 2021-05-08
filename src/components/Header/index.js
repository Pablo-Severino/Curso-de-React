import React from 'react';
import { Link } from 'react-router-dom';

import { AreaHeader } from './style';

function Header() {
    return (
        <AreaHeader>
            <div className="container">
                <div className="logo">
                    <img src="../../../logo/logo.svg" />
                </div>

                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/config">Configurações</Link></li>
                        <li><Link to="/logout">Sair</Link></li>
                    </ul>
                </nav>
            </div>
        </AreaHeader>
    );
}

export default Header;