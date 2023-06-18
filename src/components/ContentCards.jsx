import styles from "./modules/ContentCards.module.css";
import axios from 'axios';
import { useState } from "react";
import {IoMdAdd} from 'react-icons/io';
import {RiSubtractFill} from 'react-icons/ri';
import CardScreen from "./CardScreen";

export default function ContentCards ({id, name, image, price, bread, meat, meat_state, salads, cheese}) {

    const sendOrder = async () => {

        var logged_idLogin = localStorage.getItem("logged_idLogin")

        const ready_order = {
            name: name,
            bread: bread,
            meat: meat,
            meat_state: meat_state,
            salads: salads,
            cheese: cheese,
            price: price,
            image: image,
            idLogin: Number(logged_idLogin)
        };

        console.log(ready_order)

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
            return <button className={styles.order_button} onClick={()=>removeOrder(id)}> <RiSubtractFill /> </button>
        }
        else {
            return <button className={styles.order_button} onClick={sendOrder}> <IoMdAdd /> </button>
        }
    }

    const [screen, setScreen] = useState(false)

    

    return (
        <div className={styles.card} id="card_area" onClick={() => setScreen(true)}>
            {screen && (
                <div className={styles.card_screen}>
                    {console.log(name)}
                    <CardScreen name={name} bread={bread} meat={meat} meat_state={meat_state} salads={salads} cheese={cheese} price={price} image={image}/>
                </div>
            )}
            <div className={styles.name_image_and_price_of_card} id="card_area">
                <img src={image} className={styles.card_image} id="card_area"></img>
                <div className={styles.card_content_items} id="card_area">
                    <h3 className={styles.card_name} id="card_area"> {name} </h3>
                    <h3 className={styles.card_price} id="card_area">R${price} </h3>
                </div>
            </div>
            {/* <div className={styles.ingredients} id="card_area">
                <h3 className={styles.card_title} id="card_area"> Ingredientes: </h3>
                <p className={styles.card_p} id="card_area">Pão: {bread}</p>
                <p className={styles.card_p} id="card_area">Carne: {meat}</p>
                <p className={styles.card_p} id="card_area">Ponto da Carne: {meat_state}</p>
                <p className={styles.card_p} id="card_area"> Saladas: {salads}</p>
                <p className={styles.card_p} id="card_area">Queijo: {cheese}</p>
                <div className={styles.button_div} id="card_area">
                    {card_button()}
                </div>
            </div> */}
        </div>
    )
}