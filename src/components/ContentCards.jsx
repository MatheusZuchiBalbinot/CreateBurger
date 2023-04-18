import styles from "./modules/ContentCards.module.css"

export default function ContentCards ({name, image, ingredients, price}) {


    return (
        <div className={styles.card}>
            <h3>Nome: </h3>
            <div class="card">
                <img src="https://www.receitasdemae.com.br/wp-content/uploads/2017/12/Hamb%C3%BArguer-f%C3%A1cil-de-peixe.jpg" className={styles.card_image}></img>
                <div className="ingredients">
                    <p className={styles.card_p}>Pão: </p>
                    <p className={styles.card_p}>Carne: </p>
                    <p className={styles.card_p}>Ponto da Carne: </p>
                    <p className={styles.card_p}>Saladas: </p>
                    <p className={styles.card_p}>Queijo: </p>
                </div>
                <h3 className={styles.card_price}>Preço: </h3>
            </div>
        </div>
    )
}