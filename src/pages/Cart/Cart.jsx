import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ContentCards from '../../components/ContentCards/ContentCards';
import styles from './Cart.module.css'

export default function Cart() {

    const cart_orders = JSON.parse(localStorage.getItem('order_to_cart'))
    console.log(cart_orders)

    function cardItems() {
        var orders_array = []
        for(var i = 0; i < cart_orders.length; i++) {
            orders_array.push(Object.values(cart_orders[i]))
        }
        console.log(orders_array)
        return orders_array.map((orders_array) => (<ContentCards id={orders_array[9]} quantity={orders_array[8]} name={orders_array[0]} image={orders_array[7]} price={orders_array[6]} bread={orders_array[1]} meat={orders_array[2]} meat_state={orders_array[3]} salads={orders_array[4]} cheese={orders_array[5]} />))
    }

    return (
        <>
            <Header />
                <div className={styles.cartDiv}>
                    {cardItems()}
                </div>
            <Footer />
        </>
    )
}