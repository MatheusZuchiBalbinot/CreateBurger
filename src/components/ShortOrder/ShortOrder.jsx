import styles from './ShortOrder.module.css'

export default function ShortOrder({id, name, image, price, bread, meat, meat_state, salads, cheese, quantity}) {

    const cartOrders = JSON.parse(localStorage.getItem('order_to_cart'))

    const createShortOrder = () => {
        
        return (
            <>
                <div className={styles.shortCard}>
                </div>
            </>
        )
    }

    return (
        <div className={styles.cardContent}>
            {createShortOrder()}
        </div>
    )
}