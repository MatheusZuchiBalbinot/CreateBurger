import styles from './ShortOrder.module.css'

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function ShortOrder({id, name, image, price, bread, meat, meat_state, salads, cheese, quantity}) {

    const {cartValue} = useContext(CartContext)
    const createShortOrder = () => {
        
        return (
            <>
                <div className={styles.shortCard}>
                    <div className={styles.shortCardTitles}>
                        <h3 className={styles.nameTitle}>{name}</h3>
                        <h4 className={styles.productNamePriceQuantity}>Quantidade: {quantity}x </h4>
                        <h4 className={styles.productNamePriceQuantity}> Unidade: R${price} </h4>
                        <img src={image} className={styles.shortCardImage}></img>
                    </div>
                    <div className={styles.infoAboutProduct}>
                        <h3 className={styles.ingredientsTitle}>Ingredientes: </h3>
                        <div className={styles.shortCardIngredients}>
                            <div className={styles.ingredientTextSeparatorDiv}>
                                <p>Pão:</p>
                                <p>{bread}</p>
                            </div>
                            <div className={styles.ingredientTextSeparatorDiv}>
                                <p>Carne:</p>
                                <p>{meat}</p>
                            </div>
                            <div className={styles.ingredientTextSeparatorDiv}>
                                <p>Ponto:</p>
                                <p>{meat_state}</p>
                            </div>
                            <div className={styles.ingredientTextSeparatorDiv}>
                                <p>Saladas:</p>
                                <p>{salads}</p>
                            </div>
                            <div className={styles.ingredientTextSeparatorDiv}>
                                <p>Queijo:</p>
                                <p>{cheese}</p>
                            </div>
                        </div>
                        <div className={styles.priceInfo}>
                            <h3 className={styles.priceTitle}> Total: {(quantity * price).toFixed(2)} </h3>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return createShortOrder()
}