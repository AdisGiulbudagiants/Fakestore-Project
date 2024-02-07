import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favoriteItems: [],
  favoriteTotalQuantity: 0,
}

const favorites = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const productIndex = state.favoriteItems.findIndex((item) => item.id === action.payload.id)
      if (productIndex >= 0) {
        //Сделать другое оповещение
        alert('You already have that in your Favorites')
      } else {
        state.favoriteTotalQuantity++
        state.favoriteItems.push(action.payload)
      }
    },
    deleteItem: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter((item) => item.id !== action.payload.id)
      state.favoriteTotalQuantity -= 1
    },
    clearAll: () => {
      return initialState
    },
  },
})

export const { addToFavorites, deleteItem, clearAll } = favorites.actions

export const selectFavoriteItems = (state) => state.favorites.favoriteItems
export const selectFavoriteTotalQuantity = (state) => state.favorites.favoriteTotalQuantity

export default favorites.reducer
