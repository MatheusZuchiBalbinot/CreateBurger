import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateBurguerOptionCreator from '../components/CreateBurguerOptionCreator';
import CreateBurguerCheckbox from '../components/CreateBurguerCheckbox';
import styles from './modules/CreateBurguer.module.css';
import Orders from './Orders';

import { useNavigate } from 'react-router-dom';
import axios from 'axios'

import { useState, useEffect } from "react";

export default function CreateBurguer() {

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


                // Só estou pegando a primeira coluna e não a segunda, onde tem o preço
            } 
            catch (err) {
                console.log(err) 
            }
        }
        fetchalloptions();
    }, [])

    const handleClick = (event) => {
        // console.log(event.currentTarget.id)
    }

    function redirect() {
        return navigate("/home/pedido")
    }
    
    const handleChoosedOptions = async () => {

        var bread_div = document.querySelector("#bread");
        var meat_div = document.querySelector("#meat");
        var meat_state_div = document.querySelector("#meat_state");
        var cheese_div = document.querySelector("#cheese");

        var list_salads_name = []
        var list_salads_price = []

        var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
        for(var i = 0; i < checkboxes.length; i++) {
            list_salads_name.push(checkboxes[i].id)
            list_salads_price.push(checkboxes[i].value)
        }   

        var selected_bread_value = bread_div.options[bread_div.selectedIndex].id;
        var selected_bread_price = bread_div.options[bread_div.selectedIndex].value;

        var selected_meat_value = meat_div.options[meat_div.selectedIndex].id;
        var selected_meat_price = meat_div.options[meat_div.selectedIndex].value;

        var selected_meat_state_value = meat_state_div.options[meat_state_div.selectedIndex].id;
        var selected_meat_state = meat_state_div.options[meat_state_div.selectedIndex].value;

        var selected_cheese_value = cheese_div.options[cheese_div.selectedIndex].id;
        var selected_cheese_price = cheese_div.options[cheese_div.selectedIndex].value;

        var bread_option = selected_bread_value;
        var meat_option = selected_meat_value;
        var meat_state_option = selected_meat_state_value;
        var cheese_option = selected_cheese_value;

        const selected_salads_price = []
        var sum_of_salads = 0

        list_salads_price.map((item) => {
            selected_salads_price.push(Number(item))
        })

        for(var i = 0; i < selected_salads_price.length; i++) {
            var sum_of_salads = sum_of_salads + selected_salads_price[i]
        }

        var price_total = 0
        const sum_of_selected_elements = [selected_bread_price, selected_meat_price, selected_meat_state, selected_cheese_price, sum_of_salads]

        for(var i = 0; i < sum_of_selected_elements.length; i++) {
            var price_total = price_total + Number(sum_of_selected_elements[i])
        }

        const location = document.getElementById("check_order")
        
        if(bread_option != '' && meat_option != '' && meat_state_option != '' && list_salads_name != '' && cheese_option != '') {
            location.style.display = "none";

            let name = 'montado';
            let image = '../../../Imagens/montado_image.png';
            let price = price_total;

            const choosed_ingredients = {  
                name: name,
                bread: bread_option,
                meat: meat_option,
                meat_state: meat_state_option,
                salads: list_salads_name.toString(),
                cheese: cheese_option,
                price: price,
                image: image
            };

            try {
                await axios.post("http://localhost:8800/options", choosed_ingredients)
            }catch(error) {
                console.log(error)
            }
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
                    <p className={styles.choose_p}> Pão: </p>

                    <div className={styles.image_and_select_merge_div}>
                        <img className={styles.respective_option_image} src='https://breadmaker.com.br/wp-content/uploads/2021/04/standard.png'></img>
                        <div className={styles.choose_input_div}>
                            <div className={styles.choose_specific_div}>
                                <select className={styles.choose_dropdown_input} id="bread">
                                <option></option>
                                {bread[0] ? <CreateBurguerOptionCreator all_options={bread}/> : null}
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.choose_options_div} id="choose_meat" onClick={handleClick}>
                    <p className={styles.choose_p}> Carne: </p>

                    <div className={styles.image_and_select_merge_div}>
                    <img className={styles.respective_option_image} src='../../Imagens/ingredients/carne.png'></img>
                        <div className={styles.choose_input_div}>
                            <div className={styles.choose_specific_div}>
                                <select className={styles.choose_dropdown_input} id="meat">
                                <option></option>
                                {meat[0] ? <CreateBurguerOptionCreator all_options={meat}/> : null}
                                </select> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.choose_options_div} id="choose_meat_state" onClick={handleClick}>
                    <p className={styles.choose_p}> Ponto da Carne: </p>

                    <div className={styles.image_and_select_merge_div}>
                        <img className={styles.respective_option_image} src='../../Imagens/ingredients/ponto_da_carne.png'></img>
                        <div className={styles.choose_input_div}>
                            <div className={styles.choose_specific_div}>
                                <select className={styles.choose_dropdown_input} id="meat_state">
                                <option></option>
                                {meat_state[0] ? <CreateBurguerOptionCreator all_options={meat_state}/> : null}
                                </select> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.choose_options_div} id="choose_salads" onClick={handleClick}>
                    <p className={styles.choose_p}> Saladas: </p>
                    <div className={styles.image_and_select_merge_div}>
                        <img className={styles.respective_option_image} src='../../Imagens/ingredients/saladas.png'></img>
                        <div className={styles.choose_input_div}>
                            <div className={styles.choose_specific_div} id="salads">
                                {salads[0] ? <CreateBurguerCheckbox all_options={salads}/> : null}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.choose_options_div} id="choose_cheese" onClick={handleClick}>
                    <p className={styles.choose_p}> Queijo: </p>
                    <div className={styles.image_and_select_merge_div}>
                        <img className={styles.respective_option_image} src='../../Imagens/ingredients/queijo.png'></img>
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
            </div>
            <div className={styles.finalize_order}>
                <span className={styles.check_order} id="check_order"> Selecione todos os ingredientes!! </span>
                <h3 className={styles.total_price}> R$ </h3>
                <button type="button" className={styles.finalize_order_button} onClick={handleChoosedOptions}> Finalizar Pedido </button>
            </div>  
        </div>
        <Footer />
        </>
    )
}