import styles from "./Cards.module.css";
import {IoMdAdd} from 'react-icons/io';
import {MdAdd} from 'react-icons/md'
import {RiSubtractFill} from 'react-icons/ri';
import {IoIosRemove} from 'react-icons/io';

export default function Cards ({id, name, image, price, bread, meat, meat_state, salads, cheese, quantity}) {

    var order_to_cart = []

    const sendOrder = async (remove_or_add) => {

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

        addCart(ready_order, remove_or_add)
    
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

    function addCart(ready_order, remove_or_add){
        var Found = 0
        if(localStorage.getItem('order_to_cart')){
            order_to_cart = JSON.parse(localStorage.getItem('order_to_cart'));
        }
        for(var i = 0; i < order_to_cart.length; i++) {
            if (order_to_cart[i].name == ready_order.name) {
                if(remove_or_add == "Add") {
                    Found++
                    order_to_cart[i].quantity++
                    ItemAddPopUp()
                }
                if(remove_or_add == "Remove") {
                    Found++
                    order_to_cart[i].quantity--
                    ItemAddPopUp() 
                }
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

    const addQuantity = () => {
        quantity++
    }

    const removeQuantity = () => {
        quantity--
        console.log(quantity)
    }

    const card_button = () => {
        const actual_location = window.location.href
        switch (actual_location) {
            case "http://localhost:5173/home":
                return <button className={styles.order_button} onClick={sendOrder}> <IoMdAdd /> </button>
                // return <button className={styles.order_button} onClick={()=>removeOrder(id)}> <RiSubtractFill /> </button>
            case "http://localhost:5173/home/createburguer/carrinho":
                return (
                    <div className={styles.RemoveOrAddQuantity}>
                        <div className={styles.addQuantity} id={name} onClick={(e) => (console.log(e.target.id))}>
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
            <div className={styles.addCartItemIndicator} id="itemAddictPopUp"> O item foi adicionado ao carrinho!!</div>
        </div>
    )
}