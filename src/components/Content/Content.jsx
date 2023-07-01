import styles from "./Content.module.css";  
import { useNavigate } from "react-router-dom";

import ContentCards from "../ContentCards/ContentCards";

export default function Content() {

    const house_ready_orders_itens = [{
        order_1: {
            name: "La fish",
            bread: "Brioche",
            meat: "Peixe",
            meat_state: "Ao ponto",
            salads: "Tomate e Alface",
            cheese: "Cheddar",
            image: "http://localhost:5173/Imagens/hamburguers/la_fish.png",
            price: 29.99,
            quantity: 1
        },
        order_2: {
            name: "Suíno do Pecado",
            bread: "Pão italiano",
            meat: "Porco",
            meat_state: "Ao ponto",
            salads: "Tomate e Pepino",
            cheese: "Mussarela",
            image: "http://localhost:5173/Imagens/hamburguers/suino_do_pecado.png",           
            price: 30.99,
            quantity: 1
        },
        order_3: {
            name: "Boi Angelical",
            bread: "Pão de azeite",
            meat: "Boi",
            meat_state: "Ao ponto",
            salads: "Alface e Cebola",
            cheese: "Queijo de Cabra",
            image: "http://localhost:5173/Imagens/hamburguers/boi_angelical.png",
            price: 33.99,
            quantity: 1
        },
        order_4: {
            name: "Frango Voador",
            bread: "Pão australiano",
            meat: "Frango",
            meat_state: "Ao ponto",
            salads: "Tomate e Alface",
            cheese: "Emmental",
            image: "http://localhost:5173/Imagens/hamburguers/frango_voador.png",
            price: 27.99,
            quantity: 1
        },
        
    }]

    const navigate = useNavigate();

    function move_to_create() {
        return navigate("/home/createburguer");
    }
    return (
        <div className={styles.content_div}>
            <div className={styles.content_logo}>
                <div className={styles.content_image}>
                    <img src="../../Imagens/hamburguer_background.png"></img>    
                </div>
                <div className={styles.content_items}>
                    <div className={styles.content_introduction}>
                        <h3 className={styles.content_introduction_title}> Uma </h3>
                        <h3 className={styles.content_introduction_title_changed}> Mordida Suculenta </h3>
                        <h3 className={styles.content_introduction_title}> que você não vai esquecer por anos </h3>
                    </div>
                    <div className={styles.characteristics}>
                        <div classname={styles.delivery}>
                            <p className={styles.characteristics_text}> Peça o seu em casa </p>
                            <img className={styles.characteristics_image} src="../../Imagens/entregador.png"></img>
                        </div>
                        <div className={styles.quality}>
                            <p className={styles.characteristics_text}> Criado de maneira artesanal </p>
                            <img className={styles.characteristics_image} src="../../Imagens/hamburger.png"></img>
                        </div>
                        <div className={styles.price}>
                            <p className={styles.characteristics_text}> Feito com amor e carinho </p>
                            <img className={styles.characteristics_image} src="../../Imagens/cozinha.png"></img>
                        </div>
                    </div>
                    <div className={styles.content_button}>
                        <button type="button" className={styles.content_button_button} onClick={move_to_create}>
                        <label for="content_button_button" className={styles.content_button_label}> Monte seu Hambúrguer</label></button>
                    </div>
                </div>
            </div>

            <h3 className={styles.house_orders_title}> Hambúrgueres da Casa: </h3>

            <div className={styles.house_ready_orders}>
                <ContentCards name={house_ready_orders_itens[0].order_1.name} image={house_ready_orders_itens[0].order_1.image} price={house_ready_orders_itens[0].order_1.price} bread={house_ready_orders_itens[0].order_1.bread} meat={house_ready_orders_itens[0].order_1.meat} meat_state={house_ready_orders_itens[0].order_1.meat_state} salads={house_ready_orders_itens[0].order_1.salads} cheese={house_ready_orders_itens[0].order_1.cheese} quantity={house_ready_orders_itens[0].order_1.quantity}/>
                <ContentCards name={house_ready_orders_itens[0].order_2.name} image={house_ready_orders_itens[0].order_2.image} price={house_ready_orders_itens[0].order_2.price} bread={house_ready_orders_itens[0].order_2.bread} meat={house_ready_orders_itens[0].order_2.meat} meat_state={house_ready_orders_itens[0].order_2.meat_state} salads={house_ready_orders_itens[0].order_2.salads} cheese={house_ready_orders_itens[0].order_2.cheese} quantity={house_ready_orders_itens[0].order_2.quantity}/>
                <ContentCards name={house_ready_orders_itens[0].order_3.name} image={house_ready_orders_itens[0].order_3.image} price={house_ready_orders_itens[0].order_3.price} bread={house_ready_orders_itens[0].order_3.bread} meat={house_ready_orders_itens[0].order_3.meat} meat_state={house_ready_orders_itens[0].order_3.meat_state} salads={house_ready_orders_itens[0].order_3.salads} cheese={house_ready_orders_itens[0].order_3.cheese} quantity={house_ready_orders_itens[0].order_3.quantity}/>
                <ContentCards name={house_ready_orders_itens[0].order_4.name} image={house_ready_orders_itens[0].order_4.image} price={house_ready_orders_itens[0].order_4.price} bread={house_ready_orders_itens[0].order_4.bread} meat={house_ready_orders_itens[0].order_4.meat} meat_state={house_ready_orders_itens[0].order_4.meat_state} salads={house_ready_orders_itens[0].order_4.salads} cheese={house_ready_orders_itens[0].order_4.cheese} quantity={house_ready_orders_itens[0].order_4.quantity}/>
            </div>
        </div>
    )
}