import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productSlice";
import userSlice  from "../features/userSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const productPersistConfig = {
    key: 'favorite',
    storage,
    blacklist: [], 
};

const userPersistConfig = {
    key: 'user',
    storage,
    blacklist: [], 
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