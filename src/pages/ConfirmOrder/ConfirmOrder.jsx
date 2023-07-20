import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ShortOrder from '../../components/ShortOrder/ShortOrder';

import {CiLocationOn} from 'react-icons/ci';
import {AiOutlinePhone} from 'react-icons/ai';
import {BsFillPersonFill, BsPersonVcard, BsInfoCircle} from 'react-icons/bs';
import {MdPayment} from 'react-icons/md';

import axios from 'axios'

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import styles from './ConfirmOrder.module.css';

export default function ConfirmOrder() {

    var logged_idLogin = localStorage.getItem("logged_idLogin")

    const {data, setData} = useContext(CartContext)
    const {cartValue} = useContext(CartContext)

    const navigate = useNavigate();

    const [responsible, setResponsible] = useState('')
    const [cpf, setCPF] = useState('')
    const [localization, setLocalization] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [observations, setObservations] = useState('')
    const [paymentForm, setPaymentForm] = useState('')

    // useEffect(() => {
    //     console.log(responsible, CPF, localization, phone, observations, payment)
    // },[responsible, CPF, localization, phone, observations, payment])

    useEffect(() => {
        if (cartValue == 0) {
            return navigate(-1);
        }
    }, [cartValue])

    function tradePage() {
        return navigate(-1);
    }

    function missingFilledFields () {
        setTimeout(() => {
            document.getElementById("missingFilledFields").style.display = "block"
        }, "100")
        setTimeout(() => {
            document.getElementById("missingFilledFields").style.display = "none"
          }, "2500");
    }

    const sendToDatabase = async (event) => {

        const infoAboutPerson = {  
            responsible: responsible,
            cpf: cpf,
            localization: localization,
            phoneNumber: phoneNumber,
            observations: observations,
            paymentForm: paymentForm,
        };

        if (responsible != '' && cpf != '' && localization != '' && phoneNumber != '' &&  observations != '' && paymentForm != '') {
            try {
                const addPersonInfo = await axios.post("http://localhost:8800/customerinformation", infoAboutPerson)

                const toAddOrderStack = {
                    idLogin: Number(logged_idLogin),
                    idCustomInformation: addPersonInfo.data.insertId,
                }

                const addOrderStack = await axios.post("http://localhost:8800/addstack", toAddOrderStack)

                const orderStackId = addOrderStack.data.insertId

                localStorage.setItem('orderStackId', orderStackId)

                // console.log(addOrderStack)

                if (addPersonInfo.status == 200) {
                    const cartItems = data.map((order) => {
                        const { 0: name, 1: bread, 2: meat, 3: meat_state, 4: salads, 5: cheese, 6: price, 7: image, 8: quantity} = Object.values(order)
                        const oneOrderToDataBase = {
                            name: name,
                            bread: bread,
                            meat: meat,
                            meat_state: meat_state,
                            salads: salads,
                            cheese: cheese,
                            price: price,
                            image: image,
                            quantity: quantity,
                            OrderStack: orderStackId,
                        }
                        try {
                            const database = axios.post("http://localhost:8800/orders", oneOrderToDataBase)
                            // console.log(database)
                            // if (database.status == 200) {
                            //     return navigate('http://localhost:5173/home/createburguer/pedido')
                            // }
                        } catch(error) {
                            console.log(error)
                        }
                    })
                }
            }
            catch(error) {
                console.log(error)
            }
        }
        else {
            missingFilledFields()
        }
    }

    function ShowShortOrder() {
        if (data) {
            const ordersArray = data.map((order) => {
                const { 0: name, 1: bread, 2: meat, 3: meat_state, 4: salads, 5: cheese, 6: price, 7: image, 8: quantity, 9: id } = Object.values(order);
                
                if(quantity != 0) {
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
                }
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
                                    <h3 className={styles.orderValueTitle}> Valor do Carrinho: R${cartValue.toFixed(2)}</h3>
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
                                        <input type="text" id="responsibleInput" className={styles.infosInput} placeholder="Digite o nome do responsável: " onChange={(e) => setResponsible(e.target.value)}></input>
                                    </div>
                                    <div className={styles.inputField}>
                                        <BsPersonVcard className={styles.iconInputSVG} />
                                        <input type="text" id="cpfInput" className={styles.infosInput} maxLength='11' placeholder="Digite o CPF do responsável: " onChange={(e) => setCPF(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className={styles.mainInputDiv}>
                                    <label htmlFor="user_input" className={styles.inputTitleText}> Localização: </label>
                                    <div className={styles.inputField}>
                                        <CiLocationOn className={styles.iconInputSVG} />
                                        <input type="text" id="localizationInput" className={styles.infosInput} placeholder="Digite a localização para entrega: " onChange={(e) => setLocalization(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className={styles.mainInputDiv}>
                                <label htmlFor="user_input" className={styles.inputTitleText}> Telefone para Contato: </label>
                                    <div className={styles.inputField}>
                                        <AiOutlinePhone className={styles.iconInputSVG} />
                                        <input type="text" id="phoneInput" className={styles.infosInput} maxLength = '11' placeholder="Digite o telefone para contato: " onChange={(e) => setPhoneNumber(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className={styles.mainInputDiv}>
                                    <label htmlFor="user_input" className={styles.inputTitleText}> Observações: </label>
                                    <div className={styles.inputField}>
                                        <BsInfoCircle className={styles.iconInputSVG} />
                                        <input type="text" id="observartionInput" className={styles.infosInput} placeholder="Digite se tiver alguma observação: " onChange={(e) => setObservations(e.target.value)}></input>
                                    </div>
                                </div>  
                                <div className={styles.paymentForm}>
                                    <label htmlFor="user_input" className={styles.inputTitleText}> Forma de Pagamento: </label>
                                    <div className={styles.inputField}>
                                        <MdPayment className={styles.iconInputSVG}/>
                                        <select className={styles.selectPaymentForm} id="selectPaymentForm" onChange={(e) => setPaymentForm(e.target.value)}>
                                            <option></option>
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
                        <button type="submit" className={styles.buttonElement} onClick={(e) => sendToDatabase(e)}> Finalizar Pedido </button>
                    </div>
                </div>
                <div className={styles.missingFilledFields} id="missingFilledFields"> Preencha todos os campos!!</div>
            <Footer />
        </>
    )
}