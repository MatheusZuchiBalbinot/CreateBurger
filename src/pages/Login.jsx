import { useState, useEffect } from "react";
import axios from 'axios'
import styles from './modules/Login.module.css';
import {BsFillPersonFill, BsFillLockFill} from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

function Login() {

    const [login, setLogin] = useState({});

    const [username, setUsername] = useState(['']);
    const [password, setPassword] = useState(['']);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchPassword = async () => {
            try {
                const fetch_login = await axios.get("http://localhost:8800/login")
                setLogin(fetch_login.data)
            } 
            catch (err) {
                console.log(err) 
            }
        }
        fetchPassword()
    }, [])

    const actual_location = window.location.href

    function trade_page() {
        return navigate("/home");
    }

    function actual_page_CreateAccount_or_Login() {
        if (actual_location == "http://localhost:5173/") {
            return <button type="button" className={styles.button_buttons} onClick={redirect_to_register}> Não possui uma conta? </button>
        }
        else {
            return <button type="button" className={styles.button_buttons} onClick={redirect_to_login}> Ir para Login </button>
        }
    }

    function  actual_page_buttons() {
        if (actual_location == "http://localhost:5173/") {
            return <input type="password" id="password_input" className={styles.user_password_input} placeholder="Digite a sua senha: " onChange={(e) => {setPassword(e.target.value)}}></input>
        }
        else {
            return 
        }
    }

    function redirect_to_register() {
        return navigate("/register");
    }

    function redirect_to_login() {
        return navigate("/");
    }

    function actual_title() {
        if (actual_location == "http://localhost:5173/") {
            return <h3 className={styles.form_title}>Formulário de Login</h3>
        }
        else {
            return <h3 className={styles.form_title}>Formulário de Cadastro</h3>
        }
    }

    const CheckLogin = () => {
        for(var i = 0; i < Object.keys(login).length; i++) {
            if(username === login[i].username && password === login[i].password) {
                localStorage.setItem("logged_username", login[i].username)
                return trade_page();
            }
            if(username != login[i].username && password != login[i].password) {
                var form_field = document.getElementById("form_field")
                return form_field.style.border = "3px solid red" 
            }
        }
    }

    return (
        <div className={styles.login_div}>
            <form className={styles.login_form} id="form_field">
                {actual_title()}
                <div className={styles.user_div}>
                    <label htmlFor="user_input" className={styles.titles_style}> Usuário: </label>
                    <div className={styles.input_with_icon}>
                        <BsFillPersonFill />
                        <input type="text" id="username_input" className={styles.user_password_input} placeholder="Digite o seu usuário: " onChange={(e) => {setUsername(e.target.value)}}></input>
                    </div>
                </div>
                <div className={styles.password_div}>
                    <label htmlFor="user_input" className={styles.titles_style}> Password: </label>
                    <div className={styles.input_with_icon}>
                        <BsFillLockFill />
                        {actual_page_buttons()}
                    </div>
                </div>
                <div className={styles.buttons_div}>
                    <button type="button" className={styles.button_buttons} onClick={CheckLogin}> Enviar </button>
                    {actual_page_CreateAccount_or_Login()}
                </div>
            </form>
            <div className={styles.gif_image}>
                <img src="../../../Imagens/hamburger-animate (2).svg" alt="" />
            </div> 
        </div>
    )
}

export default Login;