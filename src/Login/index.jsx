import { useState } from 'react';
//import login from './../assets/login.png';
import './styles.css';

export const Login = () =>{
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    return(
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">
                        <span className="login-form-title">Bem Vindo!</span>
                        <br/><br/>
                        <span className="login-form-title">
                            {/* <img src={login} /> */}
                        </span>
                        
                        <div className="wrap-input">
                            <input
                                className={email !== "" ? "has-val input" : "input"}
                                type="email"
                                value={email} 
                                onChange={e=> setEmail(e.target.value)}
                                autocomplete="off"
                            />
                            <span className="focus-input" data-placeholder="Email"></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                className={senha !== "" ? "has-val input" : "input"}
                                type="password"
                                value={senha}
                                onChange={e=> setSenha(e.target.value)}
                                autocomplete="off"
                            />
                            <span className="focus-input" data-placeholder="Password"></span>
                        </div>

                        <div className="container-login-form-btn">
                            <button className="login-form-btn">Login</button>
                        </div>

                        <div className="text-center">
                            <span className="txt1">Não possui conta?</span>

                            <p>Criar conta.</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}