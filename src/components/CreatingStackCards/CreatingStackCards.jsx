import styles from './CreatingStackCards.module.css';
import ShortOrder from '../ShortOrder/ShortOrder';
import { useState } from 'react';

import {BsPerson} from 'react-icons/bs'
import {CiDeliveryTruck} from 'react-icons/ci'
import {MdOutlinePayment} from 'react-icons/md'
import {BsInfoCircle} from 'react-icons/bs'

export default function CreatingStackCards({oneStack}) {


    const creatingStack = () => {
    
        // Ps pedidos de uma mesma pilha tem todos as mesmas informações sobre o pedido(localização, 
        // responsável, etc..)

        const idStack = oneStack[0].OrderStack

        var value = 0
        
        for (var i = 0; i < oneStack.length; i++) {
            value += oneStack[i].price * oneStack[i].quantity
        }

        const {responsible: responsible, phoneNumber: phoneNumber, cpf: cpf, paymentForm: paymentForm, localization = localization, observations = observations, } = oneStack[0]

        return (
            <>
            <div className={styles.mainOrderHistoryDiv}>
                <div className={styles.orderNumberDiv}>
                    <h1 className={styles.orderNumber}> Pedido: {idStack} </h1>
                    <h1 className={styles.orderStatus}> Status: Completo </h1>
                </div>
                <div className={styles.infoAboutOrderDiv}>

                    <div className={styles.infoAboutOrders} id='infoAboutOrders'>
                        {creatingCards()}
                    </div>

                    <div className={styles.infoAboutPerson} id='infoAboutPerson'>
                        <div className={styles.personInfoDiv}>
                            <div className={styles.personInfoTitle}>
                                <div className={styles.personInfoIcon}>
                                    <BsPerson />
                                </div>
                                <h4> Responsável </h4>
                            </div>
                            <h3 className={styles.mainTitle}> {responsible} </h3>
                            <h3 className={styles.mainTitle}> Telefone: {phoneNumber} </h3>
                        </div>
                        <div className={styles.paymentFormDiv}>
                            <div className={styles.paymentInfoTitle}>
                                <div className={styles.paymentInfoIcon}>
                                    <MdOutlinePayment />
                                </div>
                                <h4> Forma de pagamento </h4>
                            </div>
                            <h3 className={styles.mainTitle}> {paymentForm} </h3>
                        </div>
                        <div className={styles.deliveryFormDiv}>
                            <div className={styles.deliveryInfoTitle}>
                                <div className={styles.deliveryInfoIcon}>
                                    <CiDeliveryTruck />
                                </div>
                                <h4> Entrega </h4>
                            </div>
                            <h3 className={styles.mainTitle}> {localization} </h3>
                        </div>
                        <div className={styles.observationFormDiv}>
                            <div className={styles.observationInfoTitle}>
                                <div className={styles.observationInfoIcon}>
                                    <BsInfoCircle />
                                </div>
                                <h4> Observações </h4>
                            </div>
                            <h3 className={styles.mainTitle}> {observations} </h3>
                        </div>
                    </div>
                </div>
                <div className={styles.orderHistoryTotal}>
                    <h1 className={styles.orderStatus}>Total:</h1>
                    <h1 className={styles.orderStatus}>R$ {value} </h1>
                </div>
            </div>
            </>
        )
    }

    const creatingCards = () => {

        return oneStack.map((acessingstack) => {

            const { name:name, bread:bread, cheese: cheese, image: image, meat: meat, meat_state: meat_state, salads: salads, price:price, quantity: quantity} = acessingstack
            
            return (
                <ShortOrder name={name} bread={bread} cheese={cheese} image={image} meat={meat} meat_state={meat_state} salads={salads} price={price} quantity={quantity}/>
            )
        });
    };


    return creatingStack()
}