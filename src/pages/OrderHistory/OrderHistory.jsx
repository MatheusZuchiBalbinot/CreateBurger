import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CreatingStackCards from '../../components/CreatingStackCards/CreatingStackCards';

import styles from './OrderHistory.module.css';

import axios from 'axios'
import { useEffect, useState } from 'react';

export default function Orders() {

    const [orders, setOrders] = useState([])

    useEffect(() => {

        const idLogged = localStorage.getItem("logged_idLogin")

        const fetch_orders = async () => {
            try {
                const ready_order = await axios.get(`http://localhost:8800/stackPerOrder/${idLogged}`)
                setOrders(ready_order.data)
            } 
            catch (err) {
                console.log(err) 
            }
        }
        
        fetch_orders()
    }, [])

    function recivedOrders() {

        if(orders.length > 0) {
            const stack = {};
            
            orders.forEach(obj => {
                const id = obj.OrderStack;
                if (!stack[id]) {
                    stack[id] = [];
                }
                stack[id].push(obj);
            });
            
            const groupedStack = Object.values(stack);
            
            // console.log(groupedStack);

            return groupedStack.map((oneStack) => {
                // console.log(oneStack);
                return <CreatingStackCards oneStack={oneStack} />
            })
        }
        else {
            return (
                <div className={styles.LoaderDiv}>
                    <div className={styles.customLoader}></div>
                </div>
                )
        }

    }

    function showOrderHistoryTitle() {
        if (orders.length != 0) {
            return (
                <h3 className={styles.orders_title}> Pedidos já feitos: </h3>
            )
        }
        else {
            return (
                <div>
                    <p className={styles.loaderText}> Nenhum pedido ainda foi feito! </p>
                </div>
                )
        }
    }

    return (
        <>
            <Header />
                <div className={styles.orders}>
                {showOrderHistoryTitle()}
                <div className={styles.orders_main_div}>
                    <div className={styles.cards_div} id='cards_div'>
                        {recivedOrders()}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
    
}