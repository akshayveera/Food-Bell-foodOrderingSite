
import {useSelector, useDispatch} from "react-redux";
import CartItems from "./CartItems";
import {clearCart} from "../utils/cartSlice"
import EmptyCart from "./EmptyCart";
import { useState } from "react";

const Cart = ()=>{

    const items = useSelector(store => store.cart.items);  
    const [orderPlaced, setOrderPlaced] = useState(false);

    const dispatch = useDispatch();

    const handleClear = ()=>{
        dispatch(clearCart());
    }

    let sum = 0;

    if(items.length === 0){
        return (
            <EmptyCart order={orderPlaced} />
        )
    }

    return (
        <div className="flex justify-evenly my-8  ">
            {/* <div className="flex flex-col m-5">
                <h1 className="font-bold text-4xl text-center p-2">Cart</h1>
                <button className="px-4 py-1 bg-purple-300 rounded-lg w-32 place-self-center" 
                onClick={()=>handleClick()}>clear cart</button>
            </div> */}

            {/* {console.log(items)} */}

            <div className="w-[50%]">
                <CartItems items={items}/>
            </div>

            <div className="w-[30%] min-h-[460px] h-fit bg-gray-100 rounded-lg relative mb-10 pb-14">

                <div>
                    <p className="text-center font-font5 text-2xl py-3 border-b">{"Cart ( " + items.length + " )"}</p>                  
                    

                </div>

                <div>
                    {
                        items.map((item, idx)=>{
                            return (
                                <div key={item.id + idx} className="flex justify-between px-7 py-3 border-b ">
                                    <p className="font-semibold text-gray-700 text-lg">{item.name.slice(0,30)}</p>
                                    <div>
                                        {
                                            (item.price) ? (
                                                <p className="font-semibold text-gray-700 text-lg">{"₹ " +  (parseInt(item.price)/100)}</p>
                                                ) : (
                                                    (item.defaultPrice) ? (
                                                        <p className="font-semibold text-gray-700 text-lg">{"₹ " +  (parseInt(item.defaultPrice)/100)}</p>
                                                    ) : "" 
                                                )
                                        }
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                </div>

                <div className="flex justify-between px-7 py-3 border-2 border-[#CB2C2C] rounded-lg absolute w-full bottom-0">
                    <p className="font-semibold text-gray-700 text-lg">total</p>


                    {
                        items.map((item)=>{
                            sum += (item.price) ? (item.price) : (item.defaultPrice)
                        })
                    }
                    <p className="font-semibold text-gray-700 text-lg">{ "₹ " + sum/100}</p>
                </div>                

                <button className="px-4 bg-[#CB2C2C] font-font5 text-lg text-white rounded-lg hover:shadow hover:shadow-red-400 absolute -bottom-14 w-full py-3"
                    onClick={()=>{
                        handleClear();
                        setOrderPlaced(true);
                    }}
                >Order</button>

            </div>
            
        </div>
        
    )
}

export default Cart;