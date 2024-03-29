import { useSelector, useDispatch } from 'react-redux'
import {
  selectFavoriteItems,
  selectFavoriteTotalQuantity,
  clearAll,
  deleteItem,
} from '../redux/slices/favoritesSlice'
import { addToCart } from '../redux/slices/cartSlice'
import createProductCardWithQuantity from '../utils/createProductCardWithQuantity'
import Button from '../components/Button'

const Favorites = () => {
  const favoriteItems = useSelector(selectFavoriteItems)
  const favoriteTotalQuantity = useSelector(selectFavoriteTotalQuantity)
  const dispatch = useDispatch()

  function handleClearAll() {
    return dispatch(clearAll())
  }

  function handleAddToCart(item) {
    return dispatch(addToCart(createProductCardWithQuantity(item)))
  }

  function handleDeleteItem(item) {
    return dispatch(deleteItem(item))
  }

  return (
    <div className="dark:bg-black dark:text-white bg-white text-black py-5 ">
      <h1 className="text-6xl font-semibold flex justify-center">Favorite</h1>
      {favoriteItems.length === 0 ? (
        <h1 className="mt-5 text-5xl font-semibold flex justify-center">Add something here</h1>
      ) : (
        <div className="grid grid-cols-5 gap-5 p-5">
          {favoriteItems.map((item) => {
            return (
              <div key={item.id}>
                <div className="flex flex-col items-center">
                  <img className="w-[280px]" src={item.images[0]} loading="lazy" alt="picture" />
                  <p>{item.title}</p>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <div className="grid gap-1">
                    <Button click={() => handleAddToCart(item)} name="Add To Cart" />
                    <Button click={() => handleDeleteItem(item)} name="Delete Item" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
      {favoriteItems.length > 0 && (
        <div className="  flex flex-col items-center">
          <p className="text-3xl mb-5">Total Quantity: {favoriteTotalQuantity}</p>
          <Button click={() => handleClearAll()} name="Clear All" />
        </div>
      )}
    </div>
  )
}

export default Favorites
