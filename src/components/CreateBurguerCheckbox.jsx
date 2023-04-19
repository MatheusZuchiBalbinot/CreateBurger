import styles from './modules/CreateBurguerOptionCreator.module.css';

export default function CreateBurguerCheckbox ({all_options}) {

    function CheckBoxElements() {
        
        if(all_options) {
            const options_array = []
            for(var i = 0; i < all_options.length; i++) {
                options_array.push(Object.values(all_options[i]).toString())
            }
            return options_array.map((tipos) => (
                <div>
                    <input type="checkbox" id={tipos} className={styles.checkbox_input} value={tipos}></input>
                    <label htmlFor={tipos} className={styles.checkbox_label}> {tipos} </label>
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