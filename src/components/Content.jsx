import styles from "./Content.module.css";
import { GrFormAdd } from "react-icons/gr";

export default function Content() {
    return (
        <div className={styles.content_div}>
            <div className={styles.content_logo}>
                <img className={styles.logo_image}src="https://www.sabornamesa.com.br/media/k2/items/cache/b9ad772005653afce4d4bd46c2efe842_XL.jpg"></img>
            </div>
            <div className={styles.characteristics}>
                    <div classname={styles.delivery}>
                        <p className={styles.characteristics_text}> Peça o seu em casa </p>
                        <img className={styles.characteristics_image} src="https://img.freepik.com/vetores-premium/entregador-montando-a-ilustracao-de-scooter-vermelho_9845-14.jpg?w=2000"></img>
                    </div>
                    <div className={styles.quality}>
                        <p className={styles.characteristics_text}> Criado de maneira artesanal </p>
                        <img className={styles.characteristics_image} src="https://img.freepik.com/vetores-gratis/hamburger_53876-25481.jpg?w=2000"></img>
                    </div>
                    <div className={styles.price}>
                        <p className={styles.characteristics_text}> Feito com amor e carinho </p>
                        <img className={styles.characteristics_image} src="https://img.freepik.com/vetores-premium/ilustracao-vetorial-de-cozinhar-com-amor-estilo-de-arte-de-linha-de-logotipo-de-cozinha-receita-logotipo-de-receita-secreta_771881-23.jpg?w=2000"></img>
                    </div>
            </div>
            <div className={styles.content_button}>
                <button type="button" className="content_button_button">
                <label for="content_button_button"> Monte seu Hambúrguer</label><GrFormAdd /></button>
            </div>
        </div>
    )
}