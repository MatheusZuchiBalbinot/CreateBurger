export default function CardScreen ({id, name, image, price, bread, meat, meat_state, salads, cheese}) {
    
    const skip_card_screen = () => {
        return (
            document.getElementById("card_screen").style.display="none"
        )
    }

    return (
        <>
            <p style={{color:'black'}}> {name}, {price}, {bread}, {meat}, {image} </p>
            <button type="button" onClick={skip_card_screen}> ASDAS </button>
        </>
        
    )
}