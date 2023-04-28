import styles from "./modules/Content.module.css";
import { GrFormAdd } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

import ContentCards from "./ContentCards";

export default function Content() {

    const house_ready_orders_itens = [{
        order_1: {
            name: "La fish",
            bread: "Brioche",
            meat: "Peixe",
            meat_state: "Ao ponto",
            salads: "Tomate e Alface",
            cheese: "Cheddar",
            image: "https://www.receitasdemae.com.br/wp-content/uploads/2017/12/Hamb%C3%BArguer-f%C3%A1cil-de-peixe.jpg",
            price: 29.99,
        },
        order_2: {
            name: "Suíno do Pecado",
            bread: "Pão italiano",
            meat: "Porco",
            meat_state: "Ao ponto",
            salads: "Tomate e Pepino",
            cheese: "Mussarela",
            image: "https://acarnequeomundoprefere.com.br/uploads/media/image/frimesa-receita-hamburguer-suino_smlr.jpg",
            price: 30.99,
        },
        order_3: {
            name: "Boi Angelical",
            bread: "Pão de azeite",
            meat: "Boi",
            meat_state: "Ao ponto",
            salads: "Alface",
            cheese: "Queijo de Cabra",
            image: "https://img.freepik.com/fotos-premium/hamburguer-classico-pao-caseiro-queijo-legumes-costeleta-grelhada-carne-de-porco-carne-de-porco-boi-ou-vitela_88242-15584.jpg?w=2000",
            price: 33.99,
        },
        order_4: {
            name: "Frango Voador",
            bread: "Pão australiano",
            meat: "Frango",
            meat_state: "Ao ponto",
            salads: "Tomate e Alface",
            cheese: "Emmental",
            image: "https://cdn.minhareceita.com.br/2021/01/shutterstock_574607542-scaled.jpg",
            price: 27.99,
        },
        
    }]

    // console.log(house_ready_orders_itens)
    // console.log(house_ready_orders_itens[0].order_1)

    const navigate = useNavigate();

    function move_to_create() {
        return navigate("/home/createburguer");
    }
    return (
        <div className={styles.content_div}>
            <div className={styles.content_logo}>
                <img className={styles.logo_image} src="https://www.sabornamesa.com.br/media/k2/items/cache/b9ad772005653afce4d4bd46c2efe842_XL.jpg"></img>
            </div>

            <h3 className={styles.house_orders_title}> Hambúrgueres da Casa: </h3>

            <div className={styles.house_ready_orders}>
                <ContentCards name={house_ready_orders_itens[0].order_1.name} image={house_ready_orders_itens[0].order_1.image} price={house_ready_orders_itens[0].order_1.price} bread={house_ready_orders_itens[0].order_1.bread} meat={house_ready_orders_itens[0].order_1.meat} meat_state={house_ready_orders_itens[0].order_1.meat_state} salads={house_ready_orders_itens[0].order_1.salads} cheese={house_ready_orders_itens[0].order_1.cheese}/>
                <ContentCards name={house_ready_orders_itens[0].order_2.name} image={house_ready_orders_itens[0].order_2.image} price={house_ready_orders_itens[0].order_2.price} bread={house_ready_orders_itens[0].order_2.bread} meat={house_ready_orders_itens[0].order_2.meat} meat_state={house_ready_orders_itens[0].order_2.meat_state} salads={house_ready_orders_itens[0].order_2.salads} cheese={house_ready_orders_itens[0].order_2.cheese}/>
                <ContentCards name={house_ready_orders_itens[0].order_3.name} image={house_ready_orders_itens[0].order_3.image} price={house_ready_orders_itens[0].order_3.price} bread={house_ready_orders_itens[0].order_3.bread} meat={house_ready_orders_itens[0].order_3.meat} meat_state={house_ready_orders_itens[0].order_3.meat_state} salads={house_ready_orders_itens[0].order_3.salads} cheese={house_ready_orders_itens[0].order_3.cheese}/>
                <ContentCards name={house_ready_orders_itens[0].order_4.name} image={house_ready_orders_itens[0].order_4.image} price={house_ready_orders_itens[0].order_4.price} bread={house_ready_orders_itens[0].order_4.bread} meat={house_ready_orders_itens[0].order_4.meat} meat_state={house_ready_orders_itens[0].order_4.meat_state} salads={house_ready_orders_itens[0].order_4.salads} cheese={house_ready_orders_itens[0].order_4.cheese}/>
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

            <h3 className={styles.ou_title}> Ou: </h3>

            <div className={styles.content_button}>
                <button type="button" className={styles.content_button_button} onClick={move_to_create}>
                <label for="content_button_button"> Monte seu Hambúrguer</label><GrFormAdd /></button>
            </div>
        </div>
    )
}