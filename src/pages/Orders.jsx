import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './modules/Orders.module.css';

export default function Orders() {

    function recived_orders() {
        var choosed_ingredients_dict = localStorage.getItem("choosed_ingredients")
        choosed_ingredients_dict = JSON.parse(choosed_ingredients_dict)
        console.log(choosed_ingredients_dict)  
        // console.log(choosed_ingredients_dict[0].bread) 
        return <p>{choosed_ingredients_dict[0]}</p> 
    }

    return (
        <>
            <Header />
                <div className='orders_main_div'>
                <h3 className={styles.orders_title}> Pedidos: </h3>
                {recived_orders()}
                </div>
            <Footer />
        </>
    )
    
}