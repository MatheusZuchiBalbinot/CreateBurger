import styles from "./modules/Header.module.css";
import {Link} from "react-router-dom";
import CreateBurguer from "../pages/CreateBurguer";

export default function Header() {
        return (
            <div className={styles.header}>
                <div className={styles.header_logo}>
                    <img className={styles.logo_image} src="https://img.freepik.com/vetores-premium/arte-vetorial-de-hamburguer_650710-2.jpg"></img>
                    <label className={styles.label_logo_image} for="logo_image">CreateBurguer</label>
                </div>
                <div className={styles.header_icons}>
                    <Link to={"/home/CreateBurguer"} className={styles.header_navs}> Monte o seu </Link>
                    <Link to={"/home/pedido"} className={styles.header_navs}> Seus pedidos </Link>
                    <p className={styles.header_navs_p}> Bem vindo: XXXXXXX </p>
                </div>
            </div>
        )
}