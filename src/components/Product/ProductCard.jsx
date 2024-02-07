/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from 'react-redux'
import { selectProducts } from '../../redux/slices/allPageSlice.js'
import { addToCart } from '../../redux/slices/cartSlice.js'
import createProductCardWithQuantity from '../../utils/createProductCardWithQuantity.js'
import Button from '../Button.jsx'
import Carousel from './Carousel.jsx'

const ProductCard = () => {
  const products = useSelector(selectProducts)
  const dispatch = useDispatch()

  function handleAddtoCart(item) {
    return dispatch(addToCart(createProductCardWithQuantity(item)))
  }

  return products.map((item) => (
    <div key={item.id}>
      <div className="h-[560px] flex flex-col items-center justify-center">
        <Carousel items={item} />
        <p>{item.title}</p>
        <p>${item.price.toFixed(2)}</p>
        <div className="grid gap-2">
          <Button click={() => handleAddtoCart(item)} name="Add To Cart" />
          <Button name="Add To Wishlist" />
        </div>
      </div>
    </div>
  ))
}

export default ProductCard
