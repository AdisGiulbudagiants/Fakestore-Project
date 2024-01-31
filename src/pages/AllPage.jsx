import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectProducts,
  selectisLoadingViaAPI,
  fetchAllProducts,
} from '../redux/slices/allPageSlice'

const AllPage = () => {
  const products = useSelector(selectProducts)
  const isLoading = useSelector(selectisLoadingViaAPI)
  const dispatch = useDispatch()

  useEffect(() => {
    try {
      dispatch(fetchAllProducts('https://api.escuelajs.co/api/v1/products'))
    } catch (error) {
      console.log(error.message)
    }
  }, [])

  return (
    <div className="bg-black">
      {products.map(({ title, price, description, images }) => {
        return (
          <>
            <h1>{title}</h1>
            <h1>{price}</h1>
          </>
        )
      })}
    </div>
  )
}

export default AllPage
