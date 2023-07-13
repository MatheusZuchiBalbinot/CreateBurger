import { useContext } from "react";
import { CartContext } from '../CartContext'

export default function UseCartContext() {
    const context = useContext(CartContext)

    if (context === undefined) {
        throw new Error('Não está dentro do contexto')
    }

    return context
}