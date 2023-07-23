import styles from './Option_&_Checkbox.module.css';

export default function OptionsElement ({options}) {

    function optionsAdd() {
        if(options) {

            return options.map((order) => {
                const {0: id, 1: element, 2: price} = Object.values(order);
                return (
                    <option 
                    key={id} 
                    id={element} 
                    className={styles.option_label} 
                    value={price}> 
                    {element}, R${price} 
                    </option>
                );
            });
        }
    }

    return optionsAdd()
}