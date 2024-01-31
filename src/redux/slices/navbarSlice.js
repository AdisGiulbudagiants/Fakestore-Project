/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
}

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = !state.isOpen
    },
  },
})

export const { setIsOpen } = navbarSlice.actions

export const selectIsOpen = (state) => state.navbar.isOpen

export default navbarSlice.reducer
