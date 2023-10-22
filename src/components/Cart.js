
import {useSelector, useDispatch} from "react-redux";
import CartItems from "./CartItems";
import {clearCart} from "../utils/cartSlice"

const Cart = ()=>{

    const items = useSelector(store => store.cart.items);

    const dispatch = useDispatch();

    const handleClick = ()=>{
        dispatch(clearCart());
    }

    return (
        <div className="flex flex-col">
            <div className="flex flex-col m-5">
                <h1 className="font-bold text-4xl text-center p-2">Cart</h1>
                <button className="px-4 py-1 bg-purple-300 rounded-lg w-32 place-self-center" 
                onClick={()=>handleClick()}>clear cart</button>
            </div>
            
            <CartItems items={items}/>
        </div>
        
    )
}

export default Cart;