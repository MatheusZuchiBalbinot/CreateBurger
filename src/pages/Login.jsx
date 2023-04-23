import { useState } from "react";
import styles from './modules/Login.module.css';
import {BsFillPersonFill, BsFillLockFill} from 'react-icons/bs'

function Login() {

    const [login, setLogin] = useState(['']);
    const [password, setPassword] = useState(['']);

    const CheckLogin = () => {
        if(login === 'asd' && password === '123') {
            return window.location.href="/home";
            // localStorage.setItem('validation', 'true')
            // const validation = localStorage.getItem('validation')
            // console.log(validation)
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
                    <label htmlFor="user_input" className={styles.titles_style}> Usuário: </label>
                    <div className={styles.input_with_icon}>
                        <BsFillPersonFill />
                        <input type="text" className={styles.user_password_input} placeholder="Digite o seu usuário: " onChange={(e) => {setLogin(e.target.value)}}></input>
                    </div>
                </div>
                <div className={styles.password_div}>
                    <label htmlFor="user_input" className={styles.titles_style}> Password: </label>
                    <div className={styles.input_with_icon}>
                        <BsFillLockFill />
                        <input type="password" className={styles.user_password_input} placeholder="Digite a sua senha: " onChange={(e) => {setPassword(e.target.value)}}></input>
                    </div>
                </div>
                <div className={styles.buttons_div}>
                    <button type="button" className={styles.button_buttons} onClick={CheckLogin}> Enviar </button>
                    <button type="button" className={styles.button_buttons}> Não possui uma conta? </button>
                </div>
            </form>
            <div className={styles.gif_image}>
                <img src="../../../Imagens/hamburger-animate (2).svg" alt="" />
            </div> 
        </div>
    )
}

export default Login;