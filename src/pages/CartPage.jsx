import { useDispatch, useSelector } from 'react-redux'
import {
  selectCartTotalAmount,
  selectCartItems,
  selectCartTotalQuantity,
  clearCart,
  deleteItem,
} from '../redux/slices/cartSlice'
import Button from '../components/Button'

const CartPage = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotalAmount = useSelector(selectCartTotalAmount)
  const cartTotalQuantity = useSelector(selectCartTotalQuantity)
  const dispatch = useDispatch()

  function handleClearCart() {
    dispatch(clearCart())
  }
  function handleDeleteItem(item) {
    dispatch(deleteItem(item))
  }

  return (
    <>
      <h1 className="mt-5 text-6xl font-semibold flex justify-center">Cart</h1>
      <div className="grid grid-cols-2">
        {cartItems.length === 0 ? (
          <h1 className="text-5xl font-semibold flex justify-center items-center">Empty</h1>
        ) : (
          <div className="grid grid-cols-3 gap-5 p-5">
            {cartItems.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex flex-col items-center">
                    <img className="w-[280px]" src={item.images[0]} loading="lazy" alt="picture" />
                    <p>{item.title}</p>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    <p>Count: {item.cartQuantity}</p>
                    <Button click={() => handleDeleteItem(item)} name="Delete Item" />
                  </div>
                </div>
              )
            })}
          </div>
        )}
        <div className="p-5 mx-auto">
          <h1>Total Quantity: {cartTotalQuantity}</h1>
          <h1>Total Amount: ${cartTotalAmount}</h1>
          <Button click={() => handleClearCart()} name="Clear Cart" />
        </div>
      </div>
    </>
  )
}

export default CartPage
