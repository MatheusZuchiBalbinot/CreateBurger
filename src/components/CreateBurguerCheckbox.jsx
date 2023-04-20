import styles from './modules/CreateBurguerOptionCreator.module.css';

export default function CreateBurguerCheckbox ({all_options}) {

    function CheckBoxElements() {
        
        if(all_options) {
            const options_array = []
            for(var i = 0; i < all_options.length; i++) {
                options_array.push(Object.values(all_options[i]))
            }
            return options_array.map((tipos) => (
                <div className={styles.checkbox_div}>
                    <input type="checkbox" id={tipos[0]} className={styles.checkbox_input} value={tipos[1]}></input>
                    <label htmlFor={tipos[0]} className={styles.checkbox_label}> {tipos[0]}, R${tipos[1]} </label>
                </div>
            ))
        }
        
    }

    return (
        <>
            {CheckBoxElements()}
        </>
    )
}