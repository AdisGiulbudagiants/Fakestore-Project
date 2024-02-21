/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  isDark: true,
}

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = !state.isOpen
    },
    setIsDark: (state, action) => {
      state.isDark = !state.isDark
    },
  },
})

export const { setIsOpen, setIsDark } = navbarSlice.actions

export const selectIsOpen = (state) => state.navbar.isOpen
export const selectIsDark = (state) => state.navbar.isDark

export default navbarSlice.reducer
