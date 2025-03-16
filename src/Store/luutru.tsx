import { configureStore } from '@reduxjs/toolkit'
import  SlideReducer  from '../Slices/bonho'

export const store = configureStore({
    reducer: {
        SlideReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch