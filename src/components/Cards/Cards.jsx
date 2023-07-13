import styles from "./Cards.module.css";

import {IoMdAdd} from 'react-icons/io';
import {MdAdd} from 'react-icons/md'
import {IoIosRemove} from 'react-icons/io';

import {useState, useEffect} from 'react';

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Cards ({id, name, image, price, bread, meat, meat_state, salads, cheese, quantity}) {

    var cartSum = 0

    var logged_idLogin = localStorage.getItem("logged_idLogin")

    const {data, setData} = useContext(CartContext)
    const {cartValue, setCartValue} = useContext(CartContext)

    const [newQuantity, setNewQuantity] = useState(quantity)

    useEffect(() => {
        if (data) {
            for(var i = 0; i < data.length; i++) {
                if(data[i].name == name) {
                    data[i].quantity = newQuantity
                }
            }
        }
        showOrderAllValue()
    }, [newQuantity, cartSum])

    const showOrderAllValue = () => {
        for(var i = 0; i < data.length; i++) {
            if(data[i].quantity != 0) {
                cartSum += (data[i].quantity * data[i].price)
            }
        }
        setCartValue(cartSum)
    }

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
        for(var i = 0; i < data.length; i++) {
            if (data[i].name == ready_order.name) {
                Found++
                setNewQuantity(newQuantity + 1)
                ItemAddPopUp()
            }
        }
        if(Found == 0) {
            setData([...data, ready_order])
        }
        else {
            for(var i = 0; i < data.length; i++) {
                if(data[i].name == ready_order.name) {
                    setNewQuantity(newQuantity + 1)
                }
            }
        }
    }

    function ItemAddPopUp () {
        setTimeout(() => {
            document.getElementById("itemAddictPopUp").style.display = "block"
        }, "100")
        setTimeout(() => {
            document.getElementById("itemAddictPopUp").style.display = "none"
          }, "2500");
    }

    const removeQuantity = () => {
        if (newQuantity != 0) {
            setNewQuantity((newQuantity) => newQuantity - 1)
            setData(data)
        }
        else {
            for(var i = 0; i < data.length; i++) {
                if(data[i].name == name) {
                    data.splice(i, 1)
                }
            }
        }
    }

    const addQuantity = () => {
        setNewQuantity((newQuantity) => newQuantity + 1)
        setData(data)
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
                            <div className={styles.addQuantity} id='addQuantity' onClick={addQuantity}>
                                <MdAdd />
                            </div>
                            <div className={styles.quantityValue}>
                                <p>{newQuantity}</p>
                            </div>
                            <div className={styles.removeQuantity} id={name} onClick={removeQuantity}>
                                <IoIosRemove />
                            </div>
                        </div>  
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