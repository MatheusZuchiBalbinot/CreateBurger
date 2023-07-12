import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ShortOrder from '../../components/ShortOrder/ShortOrder'

import {CiLocationOn} from 'react-icons/ci'
import {AiOutlinePhone} from 'react-icons/ai'
import {BsFillPersonFill, BsPersonVcard, BsInfoCircle} from 'react-icons/bs'

import styles from './ConfirmOrder.module.css';

export default function ConfirmOrder() {

    const cartOrders = JSON.parse(localStorage.getItem('order_to_cart'))

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
                            <div className={styles.allCardBoxx}>
                                {ShowShortOrder()}
                            </div>
                        </div>
                        <div className={styles.infoAboutPerson}>
                            <div className={styles.generalInputDiv}>
                                <h3 className={styles.generalTitle}> Informações: </h3>
                                <div className={styles.mainInputDiv}>
                                    <label htmlFor="user_input" className={styles.inputTitleText}> Responsável: </label>
                                    <div className={styles.inputField}>
                                        <BsFillPersonFill className={styles.iconInputSVG} />
                                        <input type="text" id="asd" className={styles.infosInput} placeholder="Digite o nome do responsável: "></input>
                                    </div>
                                    <div className={styles.inputField}>
                                        <BsPersonVcard className={styles.iconInputSVG} />
                                        <input type="text" id="username_input" className={styles.infosInput} placeholder="Digite o CPF do responsável: "></input>
                                    </div>
                                </div>
                                <div className={styles.mainInputDiv}>
                                    <label htmlFor="user_input" className={styles.inputTitleText}> Localização: </label>
                                    <div className={styles.inputField}>
                                        <CiLocationOn className={styles.iconInputSVG} />
                                        <input type="text" id="username_input" className={styles.infosInput} placeholder="Digite a localização para entrega: "></input>
                                    </div>
                                </div>
                                <div className={styles.mainInputDiv}>
                                    <label htmlFor="user_input" className={styles.inputTitleText}> Telefone para Contato: </label>
                                    <div className={styles.inputField}>
                                        <AiOutlinePhone className={styles.iconInputSVG} />
                                        <input type="text" id="username_input" className={styles.infosInput} placeholder="Digite o telefone para contato: "></input>
                                    </div>
                                </div>
                                <div className={styles.mainInputDiv}>
                                    <label htmlFor="user_input" className={styles.inputTitleText}> Observações: </label>
                                    <div className={styles.inputField}>
                                        <BsInfoCircle className={styles.iconInputSVG} />
                                        <input type="text" id="username_input" className={styles.infosInput} placeholder="Digite se tiver alguma observação: "></input>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttonsDiv}>
                        <button className={styles.buttonElement}> Retornar ao Carrinho </button>
                        <button className={styles.buttonElement}> Finalizar Pedido </button>
                    </div>
                </div>
            <Footer />
        </>
    )
}