import {BsArrowDown} from "react-icons/bs";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CreateBurguer () {
    return (
        <>
        <Header />
        <div className="CreateBurguer_div">
            <div className="Chooses">
                <h3>Escolha os ingredientes do seu Hambúrguer: </h3>
                <div className="Bread">
                    <p> Escolha o Pão: </p>
                    <input type="text" className="dropdown_input"></input> <BsArrowDown />
                    <div className="bread_options">
                        <p>ABC</p>
                        <p>DEF</p>
                        <p>GHI</p>
                    </div>
                </div>
                <div className="Meat">
                    <p> Escolha a Carne: </p>
                    <input type="text" className="dropdown_input"></input> <BsArrowDown />
                    <div className="meat_options">
                        
                    </div>
                </div>
                <div className="Sauce">
                    <p> Escolha o Tempero: </p>
                    <input type="text" className="dropdown_input"></input> <BsArrowDown />
                    <div className="sauce_options">
                        
                    </div>
                </div>
                <div className="Salads">
                    <p> Escolha as Saladas: </p>
                    <input type="text" className="dropdown_input"></input> <BsArrowDown />
                    <div className="salads_options">
                        
                    </div>
                </div>
                <div className="Cheese">
                    <p> Escolha o Queijo: </p>
                    <input type="text" className="dropdown_input"></input> <BsArrowDown />
                    <div className="cheese_options">
                        
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}