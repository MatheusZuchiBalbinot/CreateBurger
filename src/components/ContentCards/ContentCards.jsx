import styles from "./ContentCards.module.css";
import axios from 'axios';
import {IoMdAdd} from 'react-icons/io';
import {MdAdd} from 'react-icons/md'
import {RiSubtractFill} from 'react-icons/ri';
import {IoIosRemove} from 'react-icons/io'

export default function ContentCards ({id, name, image, price, bread, meat, meat_state, salads, cheese, quantity}) {

    var order_to_cart = []

    const sendOrder = async () => {

        var logged_idLogin = localStorage.getItem("logged_idLogin")

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

        // console.log(ready_order)

        // try {
        //     await axios.post("http://localhost:8800/options", ready_order)
        // }catch(error) {
        //     console.log(error)
        // }

        function ItemAddPopUp () {
            setTimeout(() => {
                document.getElementById("itemAddictPopUp").style.display = "block"
            }, "100")
            setTimeout(() => {
                document.getElementById("itemAddictPopUp").style.display = "none"
              }, "2500");
        }

        function addCart(){
            var notFound = 0
            if(localStorage.getItem('order_to_cart')){
                order_to_cart = JSON.parse(localStorage.getItem('order_to_cart'));
            }
            for(var i = 0; i < order_to_cart.length; i++) {
                if (order_to_cart[i].name == ready_order.name) {
                    notFound++
                    order_to_cart[i].quantity++
                    ItemAddPopUp()
                }
            }
            if(notFound == 0) {
                order_to_cart.push(ready_order);
            }
            localStorage.setItem('order_to_cart', JSON.stringify(order_to_cart));
        }

        addCart()
    
        // console.log(JSON.parse(localStorage.getItem("order_to_cart")))
        

    }

    // const removeOrder = async (id) => {
    //     try {
    //         await axios.delete("http://localhost:8800/orders/" + id)
    //         window.location.reload()
    //     }catch(error) {
    //         console.log(error)
    //     }
    // }

    const card_button = () => {
        const actual_location = window.location.href
        switch (actual_location) {
            case "http://localhost:5173/home":
                return <button className={styles.order_button} onClick={sendOrder}> <IoMdAdd /> </button>
                // return <button className={styles.order_button} onClick={()=>removeOrder(id)}> <RiSubtractFill /> </button>
        }
    }

    const addOrRemoveQuantity = () => {
        const actual_location = window.location.href

        function addQuantity() {
            quantity++
        }
    
        function removeQuantity() {
            quantity--
        }

        if (actual_location == "http://localhost:5173/home/createburguer/carrinho") {
            return (
                <div className={styles.RemoveOrAddQuantity}>
                    <div className={styles.addQuantity} onClick={addQuantity}>
                        <MdAdd />
                    </div>
                    <div className={styles.quantityValue}>
                        <p>{quantity}</p>
                    </div>
                    <div className={styles.removeQuantity} onClick={removeQuantity}>
                        <IoIosRemove />
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
                <p className={styles.card_p}>Pão: {bread}</p>
                <p className={styles.card_p}>Carne: {meat}</p>
                <p className={styles.card_p}>Ponto da Carne: {meat_state}</p>
                <p className={styles.card_p}> Saladas: {salads}</p>
                <p className={styles.card_p}>Queijo: {cheese}</p>
                <div className={styles.button_div}>
                    {card_button()}
                </div>
            </div>
            {addOrRemoveQuantity()}
            <div className={styles.addCartItemIndicator} id="itemAddictPopUp"> O item foi adicionado ao carrinho!!</div>
        </div>
    )
}