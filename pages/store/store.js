import { configureStore } from '@reduxjs/toolkit'
import listDataReducer from '../listDataSlice/listDataSlice.js'

export const store = configureStore({
  reducer: {
    list:listDataReducer,
  },
})