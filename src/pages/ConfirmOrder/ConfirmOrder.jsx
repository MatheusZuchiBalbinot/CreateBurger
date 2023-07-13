import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ShortOrder from '../../components/ShortOrder/ShortOrder';

import {CiLocationOn} from 'react-icons/ci';
import {AiOutlinePhone} from 'react-icons/ai';
import {BsFillPersonFill, BsPersonVcard, BsInfoCircle} from 'react-icons/bs';
import {MdPayment} from 'react-icons/md';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './ConfirmOrder.module.css';

export default function ConfirmOrder() {

    const cartOrders = JSON.parse(localStorage.getItem('order_to_cart'))
    const orderValue = JSON.parse(localStorage.getItem('orderValue'))

    const navigate = useNavigate();

    const [responsible, setResponsible] = useState('')
    const [CPF, setCPF] = useState('')
    const [localization, setLocalization] = useState('')
    const [phone, setPhone] = useState('')
    const [observations, setObservations] = useState('')
    const [payment, setPayment] = useState('')

    useEffect(() => {
        console.log(responsible, CPF, localization, phone, observations, payment)
    },[responsible, CPF, localization, phone, observations, payment])

    function tradePage() {
        return navigate(-1);
    }

    function ShowShortOrder() {
        if (cartOrders) {
            const ordersArray = cartOrders.map((order) => {
                const { 0: name, 1: bread, 2: meat, 3: meat_state, 4: salads, 5: cheese, 6: price, 7: image, 8: quantity, 9: id } = Object.values(order);
                
                return (
                  <ShortOrder 
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
    }

    return (
        <>
            <Header />
                <div className={styles.confirmOrderMainDiv}>
                    <div className={styles.orderInfos}>
                        <div className={styles.orderResume}>
                            <div className={styles.allCardBox}>
                                <div className={styles.boxOverflow}>
                                    {ShowShortOrder()}
                                </div>
                                <div className={styles.adasd}>
                                    <h3 className={styles.orderValueTitle}> Valor do Carrinho: R${orderValue}</h3>
                                </div>
                            </div>
                        </div>
                        <div className={styles.infoAboutPerson}>
                            <form className={styles.generalInputDiv} id='infoAboutPesonForm'>
                                <h3 className={styles.generalTitle}> Informações: </h3>
                                <div className={styles.mainInputDiv}>
                                    <label htmlFor="user_input" className={styles.inputTitleText}> Responsável: </label>
                                    <div className={styles.inputField}>
                                        <BsFillPersonFill className={styles.iconInputSVG} />
                                        <input type="text" id="asd" className={styles.infosInput} placeholder="Digite o nome do responsável: " onChange={(e) => setResponsible(e.target.value)}></input>
                                    </div>
                                    <div className={styles.inputField}>
                                        <BsPersonVcard className={styles.iconInputSVG} />
                                        <input type="text" id="username_input" className={styles.infosInput} placeholder="Digite o CPF do responsável: " onChange={(e) => setCPF(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className={styles.mainInputDiv}>
                                    <label htmlFor="user_input" className={styles.inputTitleText}> Localização: </label>
                                    <div className={styles.inputField}>
                                        <CiLocationOn className={styles.iconInputSVG} />
                                        <input type="text" id="username_input" className={styles.infosInput} placeholder="Digite a localização para entrega: " onChange={(e) => setLocalization(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className={styles.mainInputDiv}>
                                    <label htmlFor="user_input" className={styles.inputTitleText}> Telefone para Contato: </label>
                                    <div className={styles.inputField}>
                                        <AiOutlinePhone className={styles.iconInputSVG} />
                                        <input type="text" id="username_input" className={styles.infosInput} placeholder="Digite o telefone para contato: " onChange={(e) => setPhone(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className={styles.mainInputDiv}>
                                    <label htmlFor="user_input" className={styles.inputTitleText}> Observações: </label>
                                    <div className={styles.inputField}>
                                        <BsInfoCircle className={styles.iconInputSVG} />
                                        <input type="text" id="username_input" className={styles.infosInput} placeholder="Digite se tiver alguma observação: " onChange={(e) => setObservations(e.target.value)}></input>
                                    </div>
                                </div>  
                                <div className={styles.paymentForm}>
                                    <label htmlFor="user_input" className={styles.inputTitleText}> Forma de Pagamento: </label>
                                    <div className={styles.inputField}>
                                        <MdPayment className={styles.iconInputSVG}/>
                                        <select className={styles.selectPaymentForm} id="selectPaymentForm" onChange={(e) => setPayment(e.target.value)}>
                                            <option value="Dinheiro em espécie" className={styles.optionElement}> Dinheiro em espécie </option>
                                            <option value="Cartão" className={styles.optionElement}> Cartão</option>
                                            <option value="Pix" className={styles.optionElement}> Pix</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={styles.buttonsDiv}>
                        <button className={styles.buttonElement} onClick={tradePage}> Retornar ao Carrinho </button>
                        <button className={styles.buttonElement}> Finalizar Pedido </button>
                    </div>
                </div>
            <Footer />
        </>
    )
}