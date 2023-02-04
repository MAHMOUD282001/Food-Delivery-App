import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./ShoppingCart/CartSlice";
import cartUiSlice from "./ShoppingCart/CartUiSlice";

const Store = configureStore({
    reducer : {
        cart: cartSlice.reducer,
        cartUi: cartUiSlice.reducer,
    }
})

export default Store