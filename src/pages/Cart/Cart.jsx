import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Cards from '../../components/Cards/Cards';
import styles from './Cart.module.css';

import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Cart() {

    const navigate = useNavigate();

    const {data} = useContext(CartContext)
    const {cartValue} = useContext(CartContext)

    const [items, setItems] = useState(data)

    useEffect(() => {
        setItems(data)
    }, [data])

    const tradePage = () => {
        if (cartValue != 0) {
            return navigate("/home/createburguer/carrinho/confirmOrder");
        }
    }

    function cardItems() {
        if (items.length != 0) {
            const ordersArray = items.map((order) => {
                const { 0: name, 1: bread, 2: meat, 3: meat_state, 4: salads, 5: cheese, 6: price, 7: image, 8: quantity} = Object.values(order);
                
                return (
                  <Cards
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
                </div>
            )
        }
    }

    function cartButton() {
        if(data != 0) {
            return (
                <div className={styles.finalizeOrder}>
                    <button className={styles.finalizeOrderButton} id='finalizeOrderButton' onClick={tradePage}> Continuar Pedido </button>
                </div>
        )
        }
    }

    function showCartValue() {
        if (cartValue) {
            return (
                <div className={styles.cartTitleDiv}>
                    <h1 className={styles.cartTitle}> Valor do Carrinho:  </h1>
                    <h1 className={styles.cartTitlePrice}> R$ {cartValue.toFixed(2)}</h1>
                </div>
            )
        }
        else {
            return (
                <div className={styles.cartTitleDiv}>
                    <h1 className={styles.cartTitle}> Nenhum item adicionado! </h1>
                </div>
            )
        }
    }

    return (
        <>
            <Header />
                <div className={styles.cartDiv}>
                    {showCartValue()}
                    <div className={styles.cardsCartDiv}>
                        {cardItems()}
                    </div>
                    {cartButton()}
                </div>
            <Footer />
        </>
    )
}