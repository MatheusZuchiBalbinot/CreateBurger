import styles from './Option_&_Checkbox.module.css';

export default function OptionsElement ({all_options}) {

    function options_add() {
        if(all_options) {
            const items_options_array = []
            for(var i = 0; i < all_options.length; i++) {
                items_options_array.push(Object.values(all_options[i]))

            }

            return items_options_array.map((tipos) => (<option key={tipos[1]} id={tipos[1]} className={styles.option_label} value={tipos[2]} > {tipos[1]}, R${tipos[2]} </option>))
        }
    }

    return (
        <>
            {options_add()}
        </>
    )
}