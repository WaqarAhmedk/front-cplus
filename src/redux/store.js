import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userslice'
export const store = configureStore({
    reducer: {
        adduser: userReducer
    },
})