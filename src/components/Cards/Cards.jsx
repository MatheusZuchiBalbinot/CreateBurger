import styles from "./Cards.module.css";

import {IoMdAdd} from 'react-icons/io';
import {MdAdd} from 'react-icons/md'
import {IoIosRemove} from 'react-icons/io';
import {TiDeleteOutline} from 'react-icons/ti'

import {useState, useEffect} from 'react';

import ReactDOM from 'react-dom/client';

export default function Cards ({id, name, image, price, bread, meat, meat_state, salads, cheese, quantity}) {

    var order_to_cart = []
    var cartSum = 0
    
    const [newQuantity, setNewQuantity] = useState(quantity)

    var logged_idLogin = localStorage.getItem("logged_idLogin")
    var orderToCart = JSON.parse(localStorage.getItem('order_to_cart')); 
    

    const showOrderAllValue = () => {
        for(var i = 0; i < orderToCart.length; i++) {
            if(orderToCart[i].quantity != 0) {
                cartSum += orderToCart[i].quantity * orderToCart[i].price
            }
        }
        localStorage.setItem('orderValue', JSON.stringify(cartSum.toFixed(2)))
    }

    useEffect(() => {
        if (orderToCart) {
            for(var i = 0; i < orderToCart.length; i++) {
                if(orderToCart[i].name == name) {
                    orderToCart[i].quantity = newQuantity
                    localStorage.setItem('order_to_cart', JSON.stringify(orderToCart))
                    showOrderAllValue()
                }
            }
        }
    }, [newQuantity])


    const sendOrder = () => {

        const ready_order = {
            name: name,
            bread: bread,
            meat: meat,
            meat_state: meat_state,
            salads: salads,
            cheese: cheese,
            price: price,
            image: image,
            quantity: 1,
            idLogin: Number(logged_idLogin)
        };
        addCart(ready_order)
    }

    function addCart(ready_order){
        var Found = 0
        if(localStorage.getItem('order_to_cart')){
            order_to_cart = JSON.parse(localStorage.getItem('order_to_cart'));
        }
        for(var i = 0; i < order_to_cart.length; i++) {
            if (order_to_cart[i].name == ready_order.name) {
                Found++
                setNewQuantity(newQuantity + 1)
                ItemAddPopUp()
            }
        }
        if(Found == 0) {
            order_to_cart.push(ready_order);
        }
        localStorage.setItem('order_to_cart', JSON.stringify(order_to_cart));
    }

    function ItemAddPopUp () {
        setTimeout(() => {
            document.getElementById("itemAddictPopUp").style.display = "block"
        }, "100")
        setTimeout(() => {
            document.getElementById("itemAddictPopUp").style.display = "none"
          }, "2500");
    }

    const checkQuantity = () => {
        if (newQuantity != 0) {
            setNewQuantity((newQuantity) => newQuantity - 1)
        }
        else {
            for(var i = 0; i < orderToCart.length; i++) {
                if(orderToCart[i].name == name) {
                    orderToCart.splice(i, 1)
                    localStorage.setItem('order_to_cart', JSON.stringify(orderToCart))
                    console.log(orderToCart)
                }
            }
        }
    }

    const card_button = () => {
        const actual_location = window.location.href
        switch (actual_location) {
            case "http://localhost:5173/home":
                return (
                    <div className={styles.homeCardButtonDiv}>
                        <button className={styles.order_button} onClick={sendOrder}> <IoMdAdd /> </button>
                    </div>
                )
                
            case "http://localhost:5173/home/createburguer/carrinho":
                return (
                    <div className={styles.showQuantityOrTotal}>
                        <div className={styles.RemoveOrAddQuantity}>
                            <div className={styles.addQuantity} id='addQuantity' onClick={() => setNewQuantity((newQuantity) => newQuantity + 1)}>
                                <MdAdd />
                            </div>
                            <div className={styles.quantityValue}>
                                <p>{newQuantity}</p>
                            </div>
                            <div className={styles.removeQuantity} id={name} onClick={checkQuantity}>
                                <IoIosRemove />
                            </div>
                        </div>
                        {/* <div className={styles.totalPrice}>
                            <p className={styles.totalPriceText}> Total: R$ {(newQuantity * price).toFixed(2)} </p>
                        </div> */}
                    </div>
                )
                
            }
    }

    return (
        <div className={styles.card}>
            <div className={styles.name_image_and_price_of_card}>
                <img src={image} className={styles.card_image}></img>
                <div className={styles.card_content_items}>
                    <h3 className={styles.card_name}> {name} </h3>
                    <h3 className={styles.card_price}>R${price} </h3>
                </div>
            </div>
            <div className={styles.ingredients}>
                <h3 className={styles.card_title}> Composição: </h3>
                <div className={styles.ingredientTextSeparatorDiv}>
                    <p className={styles.card_p}>Pão:</p>
                    <p className={styles.card_p}>{bread}</p>
                </div>
                <div className={styles.ingredientTextSeparatorDiv}>
                    <p className={styles.card_p}>Carne:</p>
                    <p className={styles.card_p}>{meat}</p>
                </div>
                <div className={styles.ingredientTextSeparatorDiv}>
                    <p className={styles.card_p}>Ponto:</p>
                    <p className={styles.card_p}>{meat_state}</p>
                </div>
                <div className={styles.ingredientTextSeparatorDiv}>
                    <p className={styles.card_p}>Saladas:</p>
                    <p className={styles.card_p}>{salads}</p>
                </div>
                <div className={styles.ingredientTextSeparatorDiv}>
                    <p className={styles.card_p}>Queijo:</p>
                    <p className={styles.card_p}>{cheese}</p>
                </div>
                <div className={styles.button_div}>
                    {card_button()}
                </div>
            </div>
            <div className={styles.addCartItemIndicator} id="itemAddictPopUp"> O item foi adicionado ao carrinho!!</div>
        </div>
    )
}