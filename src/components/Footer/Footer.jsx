import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_div}>
                <h4 className={styles.footer_title}> CreateBurger </h4>
                <p className={styles.footer_p}> A melhor empresa de delivery quando o assunto é hamburguer </p>
            </div>
        </div>
    )
}