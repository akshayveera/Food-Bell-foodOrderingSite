
import {useSelector} from "react-redux"
import {IMG_CDN_URL} from "../config"

const CartItems = ({items})=>{
    
    // const cartList = useSelector((store) => store.cart.items);

    return (
        <div className="flex flex-wrap">
            {items.map((item)=>{
                return(
                    <div className="w-60 bg-purple-100 flex flex-col p-3 m-3 rounded-lg shadow-lg " key={item.key}>
                        <img src={IMG_CDN_URL+(item.imageId)} className="w-56 h-40 object-fill"/>
                        <h1>{item.name}</h1> 
                        <p>{"Price : RS."+(item.price)/100}</p>
                        <p>{item.category}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default CartItems;