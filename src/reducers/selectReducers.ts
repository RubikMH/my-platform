import { createSlice } from '@reduxjs/toolkit'

const initialState = null
const selectUserSlice = createSlice({
  name: 'SelectUser',
  initialState,
  reducers: {
    select: (state, action) => {
      state = action.payload
    },
  },
})
export const { select } = selectUserSlice.actions
export default selectUserSlice.reducer
