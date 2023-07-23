import styles from './Option_&_Checkbox.module.css';

export default function CreateBurguerCheckbox ({options}) {

    function CheckboxElement() {
        
        if(options) {
            return options.map((order) => {

                const {0: id, 1: element, 2: price} = Object.values(order);

                return (
                    <div className={styles.checkbox_div}>
                        <input type="checkbox" id={element} className={styles.checkbox_input} value={price}></input>
                        <div className={styles.checkbox_label_div}>
                            <label htmlFor={element} className={styles.checkbox_label}> {element}, R${price} </label>
                        </div>
                    </div>
                )
            })
        }
    }

    return (CheckboxElement()) 
}