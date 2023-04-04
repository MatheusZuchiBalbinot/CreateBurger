import styles from "./modules/Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_div}>
                <h4> CreateBurger </h4>
                <p> A melhor empresa de delivery quando o assunto é hamburguer </p>
            </div>
        </div>
    )
}