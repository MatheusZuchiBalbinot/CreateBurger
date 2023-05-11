import styles from "./modules/ContentCards.module.css"
import axios from 'axios'

export default function ContentCards ({id, name, image, price, bread, meat, meat_state, salads, cheese}) {

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

        try {
            await axios.post("http://localhost:8800/options", ready_order)
        }catch(error) {
            console.log(error)
        }

    }

    const removeOrder = async (id) => {
        try {
            await axios.delete("http://localhost:8800/orders/" + id)
            window.location.reload()
        }catch(error) {
            console.log(error)
        }
    }

    const card_button = () => {
        const actual_location = window.location.href
        if (actual_location == "http://localhost:5173/home/pedido") {
            return <button className={styles.order_button} onClick={()=>removeOrder(id)}> Remover Pedido </button>
        }
        else {
            return <button className={styles.order_button} onClick={sendOrder}> Adicionar ao Pedido </button>
        }
    }

    return (
        <div className={styles.card} id={id}>
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
                {card_button()}
        </div>
    )
}