import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { AreaLogin } from './style';

import { BtnDefaultIcons, BtnDefault } from '../../components/Style';

import FacebookIcon from '@material-ui/icons/Facebook';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default () => {
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/registrar">
            <AreaLogin>
                <h1 className="organize">
                    <Link to="/"><ArrowBackIosIcon /></Link>
                    Crie sua conta
                </h1>

                <p>Cria sua conta, é grátis!</p>

                <form>
                    <div className="form--input">
                        <label>Nome</label>
                        <input type="text" />
                    </div>

                    <div className="form--input">
                        <label>E-mail</label>
                        <input type="email" />
                    </div>

                    <div className="form--input">
                        <label>Senha</label>
                        <input type="password" />
                    </div>

                    <BtnDefault>Começe agora!</BtnDefault>

                    <div className="footerLogin">
                        Não tem uma conta?
                        <Link to="/">Faça login</Link>
                    </div>
                </form>
            </AreaLogin>
            </Route>
            <Route exact path="*">
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
                            <Link to="/registrar">Registre-se</Link>
                        </div>
                    </form>
                </AreaLogin>
            </Route>
        </Switch>
    </BrowserRouter>
    );
}
