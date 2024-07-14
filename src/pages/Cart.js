
import { useSelector } from "react-redux"
import CartContainer from "../component/CartContainer/CartContainer"


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
   
    return (
        <CartContainer items={cartItems} />
    )

}
export default Cart