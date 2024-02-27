
import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : [],
    },
    reducers : {
        addItem : (state,  action) => {
            state.items.push(action.payload);
        },
        removeItem : (state, action) => {

            for(let i=0; i<state.items.length; i++){

                if(i >= action.payload)
                {
                    state.items[i] = state.items[i+1];
                }
            }

            state.items.pop();
        },
        clearCart : (state) => {
            state.items = [];
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;

// createSlice might return below type of object hence we export like above

/**
 *  cardSlice = {
 *      actions : {
 *          addItem,
 *          removeItem,
 *          clearCart
 *      },
*       reducer : {
            addItem : (state, action) => {
                state.items.push(action.payload);
            },
            removeItem : (state, action) => {
                state.items.pop();
            },
            clearCart : (state) => {
                state.items = [];
        }      
 *  }
 * 
 */





