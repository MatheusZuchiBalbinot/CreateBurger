import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Cards from '../../components/Cards/Cards';
import axios from 'axios'
import styles from './OrderHistory.module.css';
import { useEffect, useState } from 'react';

export default function Orders() {

    const [data, setData] = useState([])

    // useEffect(() => {
    //     const fetch_orders = async () => {
    //         try {
    //             const ready_order = await axios.get("http://localhost:8800/options/values")
    //             setData(ready_order.data)
    //         } 
    //         catch (err) {
    //             console.log(err) 
    //         }
    //     }
    //     fetch_orders()
    // }, [])

    // var options_array = []

    function recived_orders() {

        var logged_idLogin = localStorage.getItem("logged_idLogin")

        if(data.length != 0) {

            // for(var i = 0; i < data.length; i++) {
            //     if (data[i].idLogin == logged_idLogin) {
            //         options_array.push(Object.values(data[i]))
            //     }
            // }
    
            // return options_array.map((options_array) => 
            // (
            // <Cards 
            //     id={options_array[0]} 
            //     name={options_array[6]} 
            //     image={options_array[7]} 
            //     price={options_array[8]}
            //     bread={options_array[1]} 
            //     meat={options_array[2]} 
            //     meat_state={options_array[3]} 
            //     salads={options_array[4]} 
            //     cheese={options_array[5]} 
            // />
            // ))           
        }
        else {

            return (
                <div>
                    <div className={styles.customLoader}></div>
                    <p className={styles.loaderText}> Nenhum pedido ainda foi feito!! </p>
                </div>
                )
        }

    }

    return (
        <>
            <Header />
                <div className={styles.orders}>
                <h3 className={styles.orders_title}> Pedidos já feitos: </h3>
                <div className={styles.orders_main_div}>
                    <div className={styles.cards_div} id='cards_div'>
                        {recived_orders()}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
    
}