import { GiMeat } from "react-icons/gi";
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateBurguerOptionCreator from "../components/CreateBurguerOptionCreator";
import styles from './modules/CreateBurguer.module.css';

import { useState, useEffect } from "react";

export default function CreateBurguer () {

    const [options, setOptions] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/burguer_requests", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
            })
            .then((response) => response.json())
            .then((data) => {
                setOptions(data)
            })
            .catch((error) => console.log(error))
    }, [])

    const handleClick = (event) => {
        // console.log(event.currentTarget.id)
    }

    function handleChoosedOptions() {
        var bread = document.getElementById("bread");
        var meat = document.getElementById("meat");
        var meat_state = document.getElementById("meat_state");
        var salads = document.getElementById("salads");
        var cheese = document.getElementById("cheese");

        var bread_option = bread.value;
        var meat_option = meat.value;
        var meat_state_option = meat_state.value;
        var salads_option = salads.value;
        var cheese_option = cheese.value;

        console.log(bread_option,meat_option,meat_state_option,salads_option,cheese_option)
    }

    return (
        <>
        <Header />
        <div className={styles.createBurguer_div}>
            <h3 className={styles.choose_title}>Escolha os ingredientes do seu Hambúrguer: </h3>
            <div className={styles.chooses}>
                <div className={styles.choose_options_div} id="choose_bread" onClick={handleClick}>
                    <p className={styles.choose_p}> Escolha o Pão: </p>
                    <div className={styles.choose_input_div}>
                        <div className={styles.choose_specific_div}>
                            <select className={styles.choose_dropdown_input} id="bread">
                            <option></option>
                            {options[0] ? <CreateBurguerOptionCreator all_options={options[0].bread}/> : null}
                            </select> 
                        </div>
                    </div>
                </div>
                <div className={styles.choose_options_div} id="choose_meat" onClick={handleClick}>
                    <p className={styles.choose_p}> Escolha a Carne: </p>
                    <div className={styles.choose_input_div}>
                        <div className={styles.choose_specific_div}>
                            <select className={styles.choose_dropdown_input} id="meat">
                            <option></option>
                            {options[0] ? <CreateBurguerOptionCreator all_options={options[0].meat}/> : null}
                            </select> 
                        </div>
                    </div>
                </div>
                <div className={styles.choose_options_div} id="choose_meat_state" onClick={handleClick}>
                    <p className={styles.choose_p}> Escolha o Ponto da Carne: </p>
                    <div className={styles.choose_input_div}>
                        <div className={styles.choose_specific_div}>
                            <select className={styles.choose_dropdown_input} id="meat_state">
                            <option></option>
                            {options[0] ? <CreateBurguerOptionCreator all_options={options[0].meat_state}/> : null}
                            </select> 
                        </div>
                    </div>
                </div>
                <div className={styles.choose_options_div} id="choose_salads" onClick={handleClick}>
                    <p className={styles.choose_p}> Escolha as Saladas: </p>
                    <div className={styles.choose_input_div}>
                        <div className={styles.choose_specific_div}>
                            <select className={styles.choose_dropdown_input} id="salads">
                            <option></option>
                            {options[0] ? <CreateBurguerOptionCreator all_options={options[0].salads}/> : null}
                            </select> 
                        </div>
                    </div>
                </div>
                <div className={styles.choose_options_div} id="choose_cheese" onClick={handleClick}>
                    <p className={styles.choose_p}> Escolha o Queijo: </p>
                    <div className={styles.choose_input_div}>
                        <div className={styles.choose_specific_div}>
                            <select className={styles.choose_dropdown_input} id="cheese">
                                <option></option>
                                {options[0] && <CreateBurguerOptionCreator all_options={options[0].cheese}/>}
                            </select> 
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.finalize_order}>
                <button type="button" className={styles.finalize_order_button} onClick={handleChoosedOptions}> Finalizar Pedido </button>
            </div>  
        </div>
        <Footer />
        </>
    )
}