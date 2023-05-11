import Header from '../components/Header';
import Footer from '../components/Footer';
import ContentCards from '../components/ContentCards';
import axios from 'axios'
import styles from './modules/Orders.module.css';
import { useEffect, useState } from 'react';

export default function Orders({data_for_price}) {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetch_orders = async () => {
            try {
                const ready_order = await axios.get("http://localhost:8800/options/values")
                setData(ready_order.data)
            } 
            catch (err) {
                console.log(err) 
            }
        }
        fetch_orders()
    }, [])

    console.log(data_for_price)

    var options_array = []
    function recived_orders() {
        for(var i = 0; i < data.length; i++) {
            options_array.push(Object.values(data[i]))
        }
        // console.log(options_array)
        return options_array.map((options_array) => (<ContentCards id={options_array[0]} name={options_array[6]} image={options_array[7]} price={options_array[8]} bread={options_array[1]} meat={options_array[2]} meat_state={options_array[3]} salads={options_array[4]} cheese={options_array[5]} />))           

    }

    return (
        <>
            <Header />
            <h3 className={styles.orders_title}> Pedidos: </h3>
                <div className={styles.orders_main_div}>
                    <div className={styles.cards_div} id='cards_div'>
                        {recived_orders()}
                    </div>
                </div>
            <Footer />
        </>
    )
    
}