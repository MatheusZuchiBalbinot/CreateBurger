import styles from "./modules/ContentCards.module.css"
import axios from 'axios'

export default function ContentCards ({name, image, price, bread, meat, meat_state, salads, cheese}) {

    const sendOrder = async () => {

        const ready_order = {
            name: name,
            bread: bread,
            meat: meat,
            meat_state: meat_state,
            salads: salads,
            cheese: cheese,
            price: price,
            image: image
        };
<<<<<<< HEAD

        // localStorage.setItem("ready_order", JSON.stringify(ready_order))

=======
        localStorage.setItem("ready_order", JSON.stringify(ready_order))
>>>>>>> 8e55acd9e4244861d1c9f512ba7553cc6dc3a31c
        try {
            await axios.post("http://localhost:8800/options", ready_order)
        }catch(error) {
            console.log(error)
        }

    }

    return (
        <div className={styles.card} id={name}>
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
                <button className={styles.order_button} onClick={sendOrder}> Adicionar ao Pedido </button>
        </div>
    )
}