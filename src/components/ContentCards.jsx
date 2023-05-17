import styles from "./modules/ContentCards.module.css";
import axios from 'axios';
import {IoMdAdd} from 'react-icons/io';
import {RiSubtractFill} from 'react-icons/ri';

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

    const OpentheBurguerScreen = () => {
        // return (
        //     <div className={styles.card} id={id}>
        //         <img src={image} className={styles.card_image}></img>
        //         <div className={styles.ingredients}>
        //             <h3 className={styles.card_title}>{name} </h3>
        //             <p className={styles.card_p}>Pão: {bread}</p>
        //             <p className={styles.card_p}>Carne: {meat}</p>
        //             <p className={styles.card_p}>Ponto da Carne: {meat_state}</p>
        //             <p className={styles.card_p}>Saladas: {salads}</p>
        //             <p className={styles.card_p}>Queijo: {cheese}</p>
        //             <h3 className={styles.card_price}>Preço: R${price} </h3>
        //             <div className={styles.button_div}>
        //                 {card_button()}
        //             </div>
        //         </div>
        // </div>
        // )
    }

    const card_button = () => {
        const actual_location = window.location.href
        if (actual_location == "http://localhost:5173/home/pedido") {
            return <button className={styles.order_button} onClick={()=>removeOrder(id)}> <RiSubtractFill /> </button>
        }
        else {
            return <button className={styles.order_button} onClick={sendOrder}> <IoMdAdd /> </button>
        }
    }

    return (
        <div className={styles.card} id={id} onClick={OpentheBurguerScreen()}>
                <img src={image} className={styles.card_image}></img>
                <div className={styles.card_content_items}>
                    <h3 className={styles.card_name}> {name} </h3>
                    <h3 className={styles.card_price}>R${price} </h3>
                    <div className={styles.button_div}>
                        {card_button()}
                    </div>
                </div>
        </div>
    )
}