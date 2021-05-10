import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import { AreaLogin } from './style';

import { BtnDefaultIcons, BtnDefault } from '../../components/Style';

import FacebookIcon from '@material-ui/icons/Facebook';
import GTranslateIcon from '@material-ui/icons/GTranslate';

export default () => {
    return (
    <BrowserRouter>
        <AreaLogin>
            <h1>Faça login em sua conta</h1>

            <BtnDefaultIcons>
                <FacebookIcon />
                <div className="center">Fazer login com o Facebook</div>
            </BtnDefaultIcons>

            <BtnDefaultIcons>
                <GTranslateIcon />
                <div className="center">Fazer login com o Google</div>
            </BtnDefaultIcons>

            <p>OU</p>

            <form>
                <div className="form--input">
                    <label>E-mail</label>
                    <input type="email" />
                </div>

                <div className="form--input">
                    <label>Senha</label>
                    <input type="password" />
                </div>

                <BtnDefault>Entrar</BtnDefault>

                <div className="footerLogin">
                    Não tem uma conta?
                    <Link to="/register">Registre-se</Link>
                </div>
            </form>
        </AreaLogin>
    </BrowserRouter>
    );
}
