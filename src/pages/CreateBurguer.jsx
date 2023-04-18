import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateBurguerOptionCreator from '../components/CreateBurguerOptionCreator';
import styles from './modules/CreateBurguer.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

import { useState, useEffect } from "react";

export default function CreateBurguer () {

    const [bread, setBread] = useState([]);
    const [meat, setMeat] = useState([]);
    const [meat_state, setMeat_state] = useState([]);
    const [salads, setSalads] = useState([]);
    const [cheese, setCheese] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchalloptions = async () => {
            try {
                const fetch_bread = await axios.get("http://localhost:8800/options/bread")
                const fetch_meat = await axios.get("http://localhost:8800/options/meat")
                const fetch_meat_state = await axios.get("http://localhost:8800/options/meat_state")
                const fetch_salads = await axios.get("http://localhost:8800/options/salads")
                const fetch_cheese = await axios.get("http://localhost:8800/options/cheese")

                setBread(fetch_bread.data)
                setMeat(fetch_meat.data)
                setMeat_state(fetch_meat_state.data)
                setSalads(fetch_salads.data)
                setCheese(fetch_cheese.data)
                // console.log(options)
            } 
            catch (err) {
                console.log(err) 
            }
        }
        fetchalloptions()
        // console.log(options)
    }, [])

    const handleClick = (event) => {
        // console.log(event.currentTarget.id)
    }

    function redirect() {
        return navigate("/home/pedido")
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

        const location = document.getElementById("check_order")
        if(bread_option != '' && meat_option != '' && meat_state_option != '' && salads_option != '' && cheese_option != '') {
            location.style.display = "none";
            var choosed_ingredients = [{
                bread: bread_option,
                meat: meat_option,
                meat_state: meat_state_option,
                salads: salads_option,
                cheese: cheese_option
            }];
            
            // console.log(choosed_ingredients)
            localStorage.setItem("choosed_ingredients", JSON.stringify(choosed_ingredients))
            redirect()
        }
        else {
            location.style.display = "flex";
            
        }
        
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
                            {bread[0] ? <CreateBurguerOptionCreator all_options={bread}/> : null}
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
                            {meat[0] ? <CreateBurguerOptionCreator all_options={meat}/> : null}
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
                            {meat_state[0] ? <CreateBurguerOptionCreator all_options={meat_state}/> : null}
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
                            {salads[0] ? <CreateBurguerOptionCreator all_options={salads}/> : null}
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
                                {cheese[0] && <CreateBurguerOptionCreator all_options={cheese}/>}
                            </select> 
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.finalize_order}>
                <span className={styles.check_order} id="check_order"> Selecione todos os ingredientes!! </span>
                <button type="button" className={styles.finalize_order_button} onClick={handleChoosedOptions}> Finalizar Pedido </button>
            </div>  
        </div>
        <Footer />
        </>
    )
}