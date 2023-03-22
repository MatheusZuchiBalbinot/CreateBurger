import styles from "./Header.module.css";

export default function Header() {
        return (
            <div className={styles.header}>
                <div className={styles.header_logo}>
                    <img className={styles.logo_image} src="https://img.freepik.com/vetores-premium/arte-vetorial-de-hamburguer_650710-2.jpg"></img>
                    <label className={styles.label_logo_image} for="logo_image">CreateBurguer</label>
                </div>
                <div className={styles.header_icons}>
                    <p> Pedidos </p>
                    <p> Monte o seu</p>
                    <p> Bem vindo: xxx</p>
                </div>
            </div>
        )
}