import styles from './modules/CreateBurguerOptionCreator.module.css';

export default function CreateBurguerOptionCreator ({all_options}) {

    function options_add() {
        if(all_options) {
            const items_options_array = []
            for(var i = 0; i < all_options.length; i++) {
                items_options_array.push(Object.values(all_options[i]))
                // price_options_array.push(Object.values(all_options[i])[1].toString())

            }
            // console.log(items_options_array)
            return items_options_array.map((tipos) => (<option key={tipos[0]} id={tipos[0]} value={tipos[0]} > {tipos[0]}, R${tipos[1]} </option>))
        }
    }

    return (
        <>
            {options_add()}
        </>
    )
}