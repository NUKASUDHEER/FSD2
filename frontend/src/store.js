import {configureStore} from '@reduxjs/toolkit'
import {userReducer} from './Reducers/User'
import { cartReducer } from './Reducers/Cart';
import {ProductReducers} from "./Reducers/Product"
import {OrderReducers} from "./Reducers/Order"

const store = configureStore({
    reducer:{
        user: userReducer,
        cart: cartReducer,
        order: OrderReducers,
        product: ProductReducers
    }
})

export default store;