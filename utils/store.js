
import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";


const store = configureStore({
    reducer : {
        cart : cartSlice,
    }
});

export default store;






/**
 * 1) Install RTK and react-redux
 *      npm i @reduxjs/toolkit
 *      npm i react-redux
 * 
 * 2) Create Store
 *      configureStore() - imported from RTK
 * 
 * 3) Provide it to App
 *      Provider component with prop store - imported from react-redux
 *      <Provider store={store}></Provider>
 * 
 * 4) Create a Slice
 *      createSlice() - imported from RTK
 *      const cartSlice = createSlice({
 *          name : "",
 *          initialState : [],
 *          reducers : {
 *              addItem : (state, action) => {}
 *              removeItem : (state, action) => {}
 *          }
 *      })
 *      export const {addItem, removeItem} =  cartSlice.actions;
 *      export default cartSlice.reducer;
 *      
 * 
 * 5) Put that created slice in store
 *      import cartSlice from "path"
 *      import userSlice from "path"
 *      
 *      const store = configureStore({
 *          reducer : {
 *              cart : cartSlice,
 *              user : userSlice/
 *          }
 *      })
 * 
 */

