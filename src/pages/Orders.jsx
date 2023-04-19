import Header from '../components/Header';
import Footer from '../components/Footer';
import ContentCards from '../components/ContentCards';

import styles from './modules/Orders.module.css';

export default function Orders() {

    function recived_orders() {
        var choosed_ingredients_dict = localStorage.getItem("choosed_ingredients")
        choosed_ingredients_dict = JSON.parse(choosed_ingredients_dict)
        console.log(choosed_ingredients_dict)  
        // console.log(choosed_ingredients_dict[0].bread) 
        // name, image, price, bread, meat, meat_state, salads, cheese

        const salads_array = []
        choosed_ingredients_dict[0].salads.map((item) => {salads_array.push(" / "+item)}) 

        return <ContentCards name='Montado' image='../montado_image.png' price='' bread={choosed_ingredients_dict[0].bread} meat={choosed_ingredients_dict[0].meat} meat_state={choosed_ingredients_dict[0].meat_state} salads={salads_array} cheese={choosed_ingredients_dict[0].cheese}/>
    }

    return (
        <>
            <Header />
            <h3 className={styles.orders_title}> Pedidos: </h3>
                <div className={styles.orders_main_div}>
                    <div className={styles.cards_div}>
                        {recived_orders()}
                    </div>
                </div>
            <Footer />
        </>
    )
    
}