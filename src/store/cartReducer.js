//import { legacy_createStore as createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name:'market',
    initialState: 0,
    reducers: {
        cart: (state, action) => {
            return action.payload
        }
    }
    
})


// const appReducer = (initalState = 0, action) => {
//     switch (action.type) {
//         case 'cart':
//             return action.payload
//         default:
//             return initalState
//     }
// }
export const { cart } = cartSlice.actions;


// const store = createStore(appReducer);

export default cartSlice.reducer;