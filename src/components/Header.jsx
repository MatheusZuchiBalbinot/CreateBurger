import styles from "./modules/Header.module.css";
import {Link, useNavigate} from "react-router-dom";
import CreateBurguer from "../pages/CreateBurguer";
import { useState} from "react";

import {CgProfile} from 'react-icons/Cg';
import {FiLogOut} from 'react-icons/Fi';

export default function Header() {

    const navigate = useNavigate()

    var loggedUsername = localStorage.getItem("logged_username")

    if (loggedUsername == null || loggedUsername == undefined) {
        return navigate("/");
    }

    const removeLogin = () => {
        localStorage.removeItem("logged_username")
    }

        return (
            <div className={styles.header}>
                <div className={styles.header_logo}>
                    <img className={styles.logo_image} src="http://localhost:5173/Imagens/hamburguer_logo.png"></img>
                    <Link to={"/home"} className={styles.label_logo_image}> CreateBurguer </Link>
                </div>
                <div className={styles.header_icons}>
                    <Link to={"/home/CreateBurguer"} className={styles.header_navs}> Monte o seu </Link>
                    <Link to={"/home/pedido"} className={styles.header_navs}> Seus pedidos </Link>
                    <div className={styles.profile}>
                        <CgProfile />
                        <p className={styles.header_navs_p}> {loggedUsername} </p>
                        <Link to={"/"} className={styles.header_navs_link}> </Link>
                    </div>
                    
                </div>
            </div>
        )
}