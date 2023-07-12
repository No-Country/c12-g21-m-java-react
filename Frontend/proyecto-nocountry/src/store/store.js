import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productSlice";
import registroSlice  from "../features/registroSlice";


export const store = configureStore({
    reducer: {
        favorite: productSlice, 
        registro: registroSlice
    }
})