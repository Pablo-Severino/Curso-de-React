import React from 'react';
import { Link } from 'react-router-dom';

import { AreaHeader } from './style';

function Header(props) {
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

                    <div className="avatar">
                        <img src={props.user.avatar} />
                        <label>{props.user.name}</label>
                    </div>
                </nav>
            </div>
        </AreaHeader>
    );
}

export default Header;