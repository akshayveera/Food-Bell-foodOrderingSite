
import {useSelector} from "react-redux"
import {IMG_CDN_URL} from "../config"
import star from "../../assets/star.png"
import { clearCart, removeItem } from "../utils/cartSlice"
import { useDispatch } from "react-redux"


const CartItems = ({items})=>{
    
    const cartList = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const removeFoodItem = (itemIdx)=>{
        dispatch(removeItem(itemIdx));
    }

    const handleClear = ()=>{
        dispatch(clearCart());
    }    

    return (
        <div className="flex flex-wrap">

            <div className="flex justify-between w-full border-b pb-2">
                <p className=" font-font5 text-2xl">{"Cart Items ( " + items.length + " )"  }</p>

                <button className="px-4 text-center py-2 bg-[#CB2C2C] text-white rounded-lg flex text-lg font-font5 justify-center hover:shadow hover:shadow-red-400" 
                    onClick={()=>handleClear()}>Clear cart</button>
            </div>

            {items.map((item, idx)=>{
                return(
                    <li key={item.id + idx} 
                        className="px-2 py-4 flex justify-between w-full border-b">
                        
                        <div className="flex flex-col gap-2 w-[70%]">

                            <div>
                                <p className="font-semibold text-xl">{item.name}</p>

                                {
                                    (item.price) ? (
                                        <p className="font-semibold text-gray-700">{"₹ " +  (parseInt(item.price)/100)}</p>
                                        ) : (
                                            (item.defaultPrice) ? (
                                                <p className="font-semibold text-gray-700">{"₹ " +  (parseInt(item.defaultPrice)/100)}</p>
                                            ) : "" 
                                        )
                                }                                          

                            </div>

                            <p className="text-xs text-gray-400">{item.description}</p>


                        </div>
                        
                        <div className="flex flex-col items-center justify-center">

                            {/* this is to just note the index of the item in items array so that when we try to remove the item we can use the index */}
                            <div className="hidden">{idx}</div>

                            <img src={IMG_CDN_URL+item.imageId} alt="" className="h-20 w-36 object-cover rounded-lg "/>
                            <button 
                                data-testid="add-btn"
                                className="px-4 py-1 bg-[#CB2C2C] font-font5 text-lg text-white rounded-lg relative bottom-4  hover:shadow hover:shadow-red-400"
                                onClick={(e)=>{
                                    removeFoodItem(parseInt(e.target.parentElement.firstChild.innerHTML))
                                    }}>
                                    remove
                            </button>

                        </div>

                    </li>
                )
            })}
        </div>
    )
}

export default CartItems;