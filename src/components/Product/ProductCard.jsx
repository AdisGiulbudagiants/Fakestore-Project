/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
import { selectProducts } from '../../redux/slices/allPageSlice.js'

const ProductCard = () => {
  const products = useSelector(selectProducts)

  return products.map(({ title, id, price, category }) => (
    <>
      <div key={id} className="h-[560px] flex flex-col items-center justify-center">
        <img className="w-[400px]" src={category.image} loading="lazy" alt="picture" />
        <p>{title}</p>
        <p>${price.toFixed(2)}</p>
        <div className="grid gap-2">
          <button className="border p-2 hover:bg-white hover:text-black">Add to Cart</button>
          <button className="border p-2 hover:bg-white hover:text-black">Add to Wishlist</button>
        </div>
      </div>
    </>
  ))
}

export default ProductCard
