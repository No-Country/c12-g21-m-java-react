import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productSlice";
import userSlice  from "../features/userSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const productPersistConfig = {
    key: 'favorite',
    storage,
    blacklist: [], // Puedes especificar los campos que no deseas persistir aquí
};

const userPersistConfig = {
    key: 'user',
    storage,
    blacklist: [], // Excluye el campo 'logueado' de la persistencia
};

const persistedProductReducer = persistReducer(productPersistConfig, productSlice);
const persistedUserReducer = persistReducer(userPersistConfig, userSlice);

const rootReducer = {
    favorite: persistedProductReducer,
    user: persistedUserReducer,
};

export const store = configureStore({
    reducer: rootReducer,
});

export const persistor = persistStore(store);