import styles from "./modules/ContentCards.module.css"

export default function ContentCards ({name, image, price, bread, meat, meat_state, salads, cheese}) {


    return (
        <div className={styles.card}>
            <div class="card">
                <img src={image} className={styles.card_image}></img>
                <h3 className={styles.card_title}>{name} </h3>
                <div className={styles.ingredients}>
                    <p className={styles.card_p}>Pão: {bread}</p>
                    <p className={styles.card_p}>Carne: {meat}</p>
                    <p className={styles.card_p}>Ponto da Carne: {meat_state}</p>
                    <p className={styles.card_p}>Saladas: {salads}</p>
                    <p className={styles.card_p}>Queijo: {cheese}</p>
                </div>
                <h3 className={styles.card_price}>Preço: R${price}</h3>
            </div>
        </div>
    )
}