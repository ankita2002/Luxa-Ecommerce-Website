import { configureStore } from '@reduxjs/toolkit'
import luxaReducer from './luxaSlice'

export const store = configureStore({
  reducer: {
    luxa: luxaReducer,
    
  },
});