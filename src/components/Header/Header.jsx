import {Link, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import styles from "./Header.module.css";

import {AiOutlineShoppingCart} from 'react-icons/ai';
import {CgProfile} from 'react-icons/Cg';

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Header() {

    const navigate = useNavigate()

    var loggedUsername = localStorage.getItem("logged_username")

    const {isLogged} = useContext(CartContext)

    const actualpage = window.location.href

    useEffect(() => {
        checkActualPage()
        // Independente de onde esteja vai voltar para a página inicial, que é o Login
        if(isLogged == false) {
            return navigate(-1)
        }
    },[actualpage] )

    const checkActualPage = () => {
            
        if(actualpage == 'http://localhost:5173/home') {
            document.getElementById("mainPage").style.borderBottom = '2px solid rgb(96, 243, 96)'
        }
        else if (actualpage == 'http://localhost:5173/home/CreateBurguer') {
            document.getElementById("mountYours").style.borderBottom = '2px solid rgb(96, 243, 96)'
        }
        else if (actualpage == 'http://localhost:5173/home/createburguer/carrinho') {
            document.getElementById("cart").style.borderBottom = '2px solid rgb(96, 243, 96)'
        }
        else if (actualpage == 'http://localhost:5173/home/createburguer/carrinho') {
            document.getElementById("cart").style.borderBottom = '2px solid rgb(96, 243, 96)'
        }
        else if (actualpage == 'http://localhost:5173/home/createburguer/pedido')
            document.getElementById("yourOrders").style.borderBottom = '2px solid rgb(96, 243, 96)'
    }

    const removeLogin = () => {
        localStorage.removeItem("logged_username")
    }

        return (
            <div className={styles.header}>
                <div className={styles.header_logo}>
                    <img className={styles.logo_image} src="http://localhost:5173/Imagens/hamburguer_logo.png"></img>
                    <Link to={"/home"} className={styles.label_logo_image} id="mainPage"> CreateBurguer </Link>
                </div>
                <div className={styles.header_icons}>
                    <Link to={"/home/CreateBurguer"} className={styles.header_navs} id="mountYours"> Monte o seu </Link>
                    <div className={styles.cartDiv}>
                        <AiOutlineShoppingCart />
                        <Link to={"/home/createburguer/carrinho"} className={styles.header_navs} id="cart">  Carrinho </Link>
                    </div>
                    <Link to={"/home/createburguer/pedido"} className={styles.header_navs} id="yourOrders"> Seus pedidos </Link>
                    <div className={styles.profile}>
                        <CgProfile />
                        <p className={styles.header_navs_p}> {loggedUsername} </p>
                        {/* <Link to={"/"} className={styles.header_navs_link}> </Link> */}
                    </div>
                    
                </div>
            </div>
        )
}