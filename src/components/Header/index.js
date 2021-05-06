import React from 'react';

import { AreaHeader } from './style';

function Header() {
    return (
        <AreaHeader>
            <div className="container">
                <div className="logo">
                    <img src="../../../logo.png" />
                </div>

                <nav>
                    <ul>
                        <li>Configurações</li>
                        <li>Sair</li>
                    </ul>
                </nav>
            </div>
        </AreaHeader>
    );
}

export default Header;