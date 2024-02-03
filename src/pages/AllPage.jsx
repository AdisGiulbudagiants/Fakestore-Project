import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import {
  fetchAllProducts,
  selectisLoadingViaAPI,
  selectProducts,
  selectLimit,
  addLimit,
} from '../redux/slices/allPageSlice'
import ProductCard from '../components/Product/ProductCard.jsx'

const AllPage = () => {
  const products = useSelector(selectProducts)
  const isLoading = useSelector(selectisLoadingViaAPI)
  const limit = useSelector(selectLimit)
  const dispatch = useDispatch()

  const LINK = `https://api.escuelajs.co/api/v1/products?offset=0&limit=${limit}`

  useEffect(() => {
    try {
      dispatch(fetchAllProducts(LINK))
    } catch (error) {
      console.error(error)
    }
  }, [limit])

  const fetchData = () => {
    dispatch(addLimit(8))
    try {
      dispatch(fetchAllProducts(LINK))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <InfiniteScroll
      dataLength={products.length}
      hasMore={isLoading}
      next={fetchData}
      loader={<h1 className="text-center">LOADING...</h1>}
    >
      <div className=" p-5 grid grid-cols-4 gap-5 mx-auto bg-yellow">
        <ProductCard />
      </div>
    </InfiniteScroll>
  )
}

export default AllPage
