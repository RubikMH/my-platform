import { configureStore } from '@reduxjs/toolkit'
import SelecetUserReducer from '../reducers/selectReducers'

const store = configureStore({
  reducer: {
    selectChat: SelecetUserReducer,
  },
})

export default store
