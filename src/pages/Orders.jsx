export default function Orders() {

    function recived_orders() {
        var choosed_ingredients_dict = localStorage.getItem("choosed_ingredients")
        choosed_ingredients_dict = JSON.parse(choosed_ingredients_dict)
        console.log(choosed_ingredients_dict)  
            // console.log(choosed_ingredients_dict[0].bread)  
    }

    return (
        <>
            <p>HIHIHIHA {recived_orders()}</p>
        </>
    )
    
}