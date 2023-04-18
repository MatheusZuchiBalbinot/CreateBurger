import styles from "./modules/Content.module.css";
import { GrFormAdd } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

import ContentCards from "./ContentCards";

export default function Content() {

    const house_ready_orders_itens = [{
        um: {
            bread: "Brioche",
            meat: "Peixe",
            meat_state: "Ao ponto",
            salads: "Tomate e Alface",
            cheese: "Cheddar",
            image: "https://www.receitasdemae.com.br/wp-content/uploads/2017/12/Hamb%C3%BArguer-f%C3%A1cil-de-peixe.jpg"
        },
        dois: {
            bread: "Pão italiano",
            meat: "Porco",
            meat_state: "Ao ponto",
            salads: "Tomate e Pepino",
            cheese: "Mussarela",
            image: "https://acarnequeomundoprefere.com.br/uploads/media/image/frimesa-receita-hamburguer-suino_smlr.jpg"
        },
        três: {
            bread: "Pão de azeite",
            meat: "Boi",
            meat_state: "Ao ponto para mal",
            salads: "Alface",
            cheese: "Queijo de Cabra",
            image: "https://www.pingodoce.pt/wp-content/uploads/2015/05/pd_4660.jpg"
        },
        quatro: {
            bread: "Pão autraliano",
            meat: "Frango",
            meat_state: "Ao ponto",
            salads: "Tomate, Alface e Cebola",
            cheese: "Emmental",
            image: "https://www.sabornamesa.com.br/media/k2/items/cache/b0ccfdc71ad7b1e5260a567a30b9ecab_XL.jpg"
        },
        
    }]

    console.log(house_ready_orders_itens)

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
                <ContentCards />
                <ContentCards />
                <ContentCards />
                <ContentCards />
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
                <button type="button" className={styles.content_button_button} onClick={move_to_create}>
                <label for="content_button_button"> Monte seu Hambúrguer</label><GrFormAdd /></button>
            </div>
        </div>
    )
}