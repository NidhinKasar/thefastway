import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartReducer'

const store = configureStore({
    reducer: {
        market: cartReducer
    }
})

export default store;