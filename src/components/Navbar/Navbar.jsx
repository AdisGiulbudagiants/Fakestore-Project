import { useSelector, useDispatch } from 'react-redux'
import { FaShoppingCart } from 'react-icons/fa'
import { selectIsOpen, setIsOpen } from '../../redux/slices/navbarSlice'
import { selectCartTotalQuantity } from '../../redux/slices/cartSlice.js'
import PageLink from './PageLink.jsx'
import PageLinksList from './PageLinksList.jsx'
import SocialLinksList from './SocialLinksList.jsx'

const Navbar = () => {
  const isOpen = useSelector(selectIsOpen)
  const cartTotalQuantity = useSelector(selectCartTotalQuantity)
  const dispatch = useDispatch()

  return (
    <div className=" sticky top-0 border-b bg-black z-10 flex justify-center h-[100px]">
      <div className="flex items-center">
        <label className="flex text-[2rem]">
          <PageLink to="/" name="FAKESTORE" />
        </label>
        <label className="absolute z-20 right-44 top-7 select-none border bg-red-500 font-semibold rounded-full text-[0.8rem] w-[20px] h-[20px] flex items-center justify-center">
          {cartTotalQuantity}
        </label>
        <label className="fixed z-30 right-48 flex">
          <PageLink to="/cart" name={<FaShoppingCart className="hover:fill-red-500" size={25} />} />
        </label>
        <button onClick={() => dispatch(setIsOpen())} className="z-30 fixed right-20 flex">
          DropDown
        </button>
      </div>
      {isOpen && (
        <nav className="absolute w-[100%] h-[100dvh] z-20 flex flex-col items-center justify-evenly bg-red-600">
          <PageLinksList />
          <SocialLinksList />
        </nav>
      )}
    </div>
  )
}

export default Navbar
