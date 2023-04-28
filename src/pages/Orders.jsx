import Header from '../components/Header';
import Footer from '../components/Footer';
import ContentCards from '../components/ContentCards';

import styles from './modules/Orders.module.css';

export default function Orders() {

    function ready_orders() {
        var ready_order = localStorage.getItem("ready_order")
        ready_order = JSON.parse(ready_order)

        if (ready_order != '') {
        return <ContentCards name={ready_order.name} image={ready_order.image} price={ready_order.price} bread={ready_order.bread} meat={ready_order.meat} meat_state={ready_order.meat_state} salads={ready_order.salads_array} cheese={ready_order.cheese}/>
        }
    }

    function recived_orders() {
        var choosed_ingredients_dict = localStorage.getItem("choosed_ingredients")
        choosed_ingredients_dict = JSON.parse(choosed_ingredients_dict)
        const salads_array = []
        choosed_ingredients_dict.salads.map((item) => {salads_array.push(" / "+item)}) 
        return <ContentCards name='Montado' image='../../../Imagens/montado_image.png' price='' bread={choosed_ingredients_dict.bread} meat={choosed_ingredients_dict.meat} meat_state={choosed_ingredients_dict.meat_state} salads={salads_array} cheese={choosed_ingredients_dict.cheese}/>
    }

    return (
        <>
            <Header />
            <h3 className={styles.orders_title}> Pedidos: </h3>
                <div className={styles.orders_main_div}>
                    <div className={styles.cards_div}>
                        {recived_orders()}
                        {ready_orders()}
                    </div>
                </div>
            <Footer />
        </>
    )
    
}