import { createSlice } from '@reduxjs/toolkit'

const initialState = { selected: null }
const selectUserSlice = createSlice({
  name: 'SelectUser',
  initialState,
  reducers: {
    select: (state, action) => {
      state.selected = action.payload
    },
  },
})
export const { select } = selectUserSlice.actions
export default selectUserSlice.reducer
