import { BsChevronDown } from "react-icons/bs";
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateBurguerOptionCreator from "../components/CreateBurguerOptionCreator";
import styles from './modules/CreateBurguer.module.css';

export default function CreateBurguer () {

    const handleClick = (event) => {
        console.log(event.currentTarget.id)
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
                            <input type="text" className={styles.choose_dropdown_input}></input> <BsChevronDown />
                        </div>
                        <div className={styles.choose_all_options_div}>
                            <CreateBurguerOptionCreator />
                        </div>
                    </div>
                </div>
                <div className={styles.choose_options_div} id="choose_meat" onClick={handleClick}>
                    <p className={styles.choose_p}> Escolha a Carne: </p>
                    <div className={styles.choose_input_div}>
                        <div className={styles.choose_specific_div}>
                            <input type="text" className={styles.choose_dropdown_input}></input> <BsChevronDown />
                        </div>
                        <div className={styles.choose_all_options_div}>
                            <CreateBurguerOptionCreator />
                        </div>
                    </div>
                </div>
                <div className={styles.choose_options_div} id="choose_sauce" onClick={handleClick}>
                    <p className={styles.choose_p}> Escolha o Tempero: </p>
                    <div className={styles.choose_input_div}>
                        <div className={styles.choose_specific_div}>
                            <input type="text" className={styles.choose_dropdown_input}></input> <BsChevronDown />
                        </div>
                        <div className={styles.choose_all_options_div}>
                            <CreateBurguerOptionCreator />
                        </div>
                    </div>
                </div>
                <div className={styles.choose_options_div} id="choose_salads" onClick={handleClick}>
                    <p className={styles.choose_p}> Escolha as Saladas: </p>
                    <div className={styles.choose_input_div}>
                        <div className={styles.choose_specific_div}>
                            <input type="text" className={styles.choose_dropdown_input}></input> <BsChevronDown />
                        </div>
                        <div className={styles.choose_all_options_div}>
                            <CreateBurguerOptionCreator />
                        </div>
                    </div>
                </div>
                <div className={styles.choose_options_div} id="choose_cheese" onClick={handleClick}>
                    <p className={styles.choose_p}> Escolha o Queijo: </p>
                    <div className={styles.choose_input_div}>
                        <div className={styles.choose_specific_div}>
                            <input type="text" className={styles.choose_dropdown_input}></input> <BsChevronDown />
                        </div>
                        <div className={styles.choose_all_options_div}>
                            <CreateBurguerOptionCreator />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}