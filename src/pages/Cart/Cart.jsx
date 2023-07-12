import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Cards from '../../components/Cards/Cards';
import styles from './Cart.module.css';

import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'

export default function Cart() {

    const navigate = useNavigate();

    const cartOrders = JSON.parse(localStorage.getItem('order_to_cart'))

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (isOpen == true) {
            return navigate("/home/createburguer/carrinho/confirmOrder");
        }
    }, [isOpen])

    function cardItems() {
        if (cartOrders) {
            const ordersArray = cartOrders.map((order) => {
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

    return (
        <>
            <Header />
                <div className={styles.cartDiv}>
                    {/* {showOrderValue()} */}
                    <h1 className={styles.cartTitle}> Elementos do Carrinho: </h1>
                    <div className={styles.cardsCartDiv}>
                        {cardItems()}
                    </div>

                    {cartOrders && 
                        <div className={styles.finalizeOrder}>
                            <button id='finalizeOrderButton' onClick={() => setIsOpen(true)}> Finalizar Pedido </button>
                        </div>
                    }
                </div>
            <Footer />
        </>
    )
}