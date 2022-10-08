import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import saveReducer from "./features/saveSlice"
import textReducer from "./features/textSlice"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";




const persistConfig = {
    key: 'root',
    version: 1,
    storage
}


const rootReducer = combineReducers({
    saveState : saveReducer,
    saveTextState : textReducer
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware) =>getDefaultMiddleware({
        serializableCheck:{
            ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
        }
    })
})

export let persistor = persistStore(store)