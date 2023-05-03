import { useState, useEffect } from "react";
import axios from 'axios'
import styles from './modules/Login.module.css';
import {BsFillPersonFill, BsFillLockFill} from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

function Login() {

    const [login, setLogin] = useState({});

    const [username, setUsername] = useState(['']);
    const [password, setPassword] = useState(['']);

<<<<<<< HEAD
    const CheckLogin = () => {
<<<<<<< Updated upstream
        if(login === 'asd' && password === '123') {
            return window.location.href="/home";
            // localStorage.setItem('validation', 'true')
            // const validation = localStorage.getItem('validation')
            // console.log(validation)
        }
        else {
            return <alert> A senha de acesso está errada </alert>
=======
=======
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

    function trade_page() {
        return navigate("/home");
    }

    // function RegisterPage() {
    //     return navigate("/register");
    // }

    const CheckLogin = () => {
>>>>>>> 8e55acd9e4244861d1c9f512ba7553cc6dc3a31c

        console.log(login)
        for(var i = 0; i < Object.keys(login).length; i++) {
            if(username === login[i].username && password === login[i].password) {
                localStorage.setItem("logged_username", login[i].username)
                return trade_page();
            }
<<<<<<< HEAD
            if(username != login[i].username && password != login[i].password) {
                var form_field = document.getElementById("form_field")
                return form_field.style.border = "3px solid red" 
            }
>>>>>>> Stashed changes
=======
            else {
                var form_field = document.getElementById("form_field")
                return form_field.style.border = "3px solid red" 
            }
>>>>>>> 8e55acd9e4244861d1c9f512ba7553cc6dc3a31c
        }
    }

    return (
        <div className={styles.login_div}>
            <form className={styles.login_form} id="form_field">
                <h3 className={styles.form_title}>Formulário de Login</h3>
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
                        <input type="password" id="password_input" className={styles.user_password_input} placeholder="Digite a sua senha: " onChange={(e) => {setPassword(e.target.value)}}></input>
                    </div>
                </div>
                <div className={styles.buttons_div}>
                    <button type="button" className={styles.button_buttons} onClick={CheckLogin}> Enviar </button>
                    <button type="button" className={styles.button_buttons} > Não possui uma conta? </button>
                </div>
            </form>
            <div className={styles.gif_image}>
                <img src="../../../Imagens/hamburger-animate (2).svg" alt="" />
            </div> 
        </div>
    )
}

export default Login;