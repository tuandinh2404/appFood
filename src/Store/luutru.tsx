import { configureStore } from '@reduxjs/toolkit'
import  SlideReducer  from '../Slices/bonho'
import  ProductReducer  from '../Slices/Product'
export const store = configureStore({
    reducer: {
        SlideReducer,
        ProductReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch