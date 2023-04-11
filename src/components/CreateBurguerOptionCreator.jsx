import styles from './modules/CreateBurguerOptionCreator.module.css';

export default function CreateBurguerOptionCreator ({all_options}) {

    function options_add() {
        if(all_options) {
            // console.log(all_options)
            return all_options.tipos.map((tipos) => (<option key={tipos} value={tipos}> {tipos} </option>))
        }
    }

    return (
        <>
            {options_add()}
        </>
    )
}