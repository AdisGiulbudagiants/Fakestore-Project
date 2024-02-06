import { useSelector, useDispatch } from 'react-redux'
import { FaShoppingCart } from 'react-icons/fa'
import { selectIsOpen, setIsOpen } from '../../redux/slices/navbarSlice'
import { selectCartTotalQuantity } from '../../redux/slices/cartSlice.js'
import PageLink from './PageLink.jsx'
import SocialLink from './SocialLink.jsx'

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
          <label className="flex text-[2rem]">
            <PageLink click={() => dispatch(setIsOpen())} to="/" name="FAKESTORE" />
          </label>
          <div className="flex flex-col gap-4 text-[4rem]">
            <PageLink click={() => dispatch(setIsOpen())} end to="/" name="All" />
            <PageLink click={() => dispatch(setIsOpen())} to="/clothes" name="Clothes" />
            <PageLink click={() => dispatch(setIsOpen())} to="/electronics" name="Electronics" />
            <PageLink click={() => dispatch(setIsOpen())} to="/furniture" name="Furniture" />
            <PageLink click={() => dispatch(setIsOpen())} to="/shoes" name="Shoes" />
            <PageLink
              click={() => dispatch(setIsOpen())}
              to="/miscellaneous"
              name="Miscellaneous"
            />
          </div>
          <div className="w-[100%] flex justify-center text-[1.125rem]">
            <SocialLink name="GitHub" href="https://pollenlondon.com/" />
            <SocialLink name="Telegram" href="https://pollenlondon.com/" />
            <SocialLink name="LinkedIn" href="https://pollenlondon.com/" />
            <SocialLink name="Vk" href="https://pollenlondon.com/" />
            <SocialLink name="Gmail" href="https://pollenlondon.com/" />
          </div>
        </nav>
      )}
    </div>
  )
}

export default Navbar
