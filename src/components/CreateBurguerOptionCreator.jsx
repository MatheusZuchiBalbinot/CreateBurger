import styles from './modules/CreateBurguerOptionCreator.module.css';

export default function CreateBurguerOptionCreator ({all_options}) {

    function options_add() {
        if(all_options) {
            // console.log(all_options)
            const options_array = []
            for(var i = 0; i < all_options.length; i++) {
                // console.log(Object.values(all_options[i]).toString())
                options_array.push(Object.values(all_options[i]).toString())
                // console.log(options_array)
            }
            // console.log(Object.values(options_array))
            // return <option>{all_options[0]}</option>
            return options_array.map((tipos) => (<option key={tipos} value={tipos}> {tipos} </option>))
        }
    }

    return (
        <>
            {options_add()}
        </>
    )
}