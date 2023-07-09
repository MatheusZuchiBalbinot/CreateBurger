import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Cards from '../../components/Cards/Cards';
import styles from './Cart.module.css';

import { useEffect } from 'react';

export default function Cart() {

    const cart_orders = JSON.parse(localStorage.getItem('order_to_cart'))

    function cardItems() {
        if (cart_orders) {
            const ordersArray = cart_orders.map((order) => {
                const { 0: name, 1: bread, 2: meat, 3: meat_state, 4: salads, 5: cheese, 6: price, 7: image, 8: quantity, 9: id } = Object.values(order);
                
                return (
                  <Cards 
                    id={id} 
                    quantity={quantity} 
                    name={name} 
                    image={image} 
                    price={price} 
                    bread={bread} 
                    meat={meat} 
                    meat_state={meat_state} 
                    salads={salads} 
                    cheese={cheese} 
                  />
                );
              });
            return ordersArray;
        }
        else {
            return (
            <div>
                <div className={styles.customLoader}></div>
                <p className={styles.loaderText}> Nenhum item adicionado!!</p>
            </div>
            )
        }
          
    }

    const showOrderValue = () => {
        var cartSum = 0 
        for(var i = 0; i < cart_orders.length; i++) {
            if(cart_orders[i].quantity != 0) {
                cartSum += cart_orders[i].quantity * cart_orders[i].price
            }
        }
        return cartSum.toFixed(2)
        }

    const addOrderToDatabase = () => {

    }

    return (
        <>
            <Header />
                <div className={styles.cartDiv}>
                    <h1 className={styles.cartTitle}> Items no carrinho: </h1>
                    <div className={styles.cardsCartDiv}>
                        {cardItems()}
                    </div>

                    {cart_orders && 
                        <div className={styles.finalizeOrder}>
                            <button onClick={addOrderToDatabase}> Finalizar Pedido por: R${showOrderValue()} </button>
                        </div>
                    }
                </div>
            <Footer />
        </>
    )
}