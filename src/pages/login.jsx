import { useState } from "react";
import styles from './login.module.css';
import {Link} from "react-router-dom";
import Home from "./Home";

function Login() {

    const [login, setLogin] = useState(['']);
    const [password, setPassword] = useState(['']);

    const CheckLogin = () => {
        if(login === 'asd' && password === '123') {
            return window.location.href="/home";
        }
        else {
            return <alert> A senha de acesso está errada </alert>
        }
    }

    return (
        <div className={styles.login_div}>
            <form className={styles.login_form}>
                <h3 className={styles.form_title}>Formulário de Login</h3>
                <div className={styles.user_div}>
                    <label htmlFor="user_input" style={{margin: 'auto 0'}}> Usuário: </label>
                    <input type="text" className={styles.user_password_input} placeholder="Digite o seu usuário: " onChange={(e) => {setLogin(e.target.value)}}></input>
                </div>
                <div className={styles.password_div}>
                    
                    <label htmlFor="user_input" style={{margin: 'auto 0'}}> Password: </label>
                    <input type="password" className={styles.user_password_input} placeholder="Digite a sua senha: " onChange={(e) => {setPassword(e.target.value)}}></input>
                </div>
                <div className={styles.buttons_div}>
                    <button type="button" className={styles.button_send} onClick={CheckLogin}> Enviar </button>
                    <button type="button" className={styles.button_forgot_password}> Não possui uma conta? </button>
                </div>
            </form>
        </div>
    )
}

export default Login;