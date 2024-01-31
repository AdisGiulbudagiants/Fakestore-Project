import { useSelector, useDispatch } from 'react-redux'
import { selectIsOpen, setIsOpen } from '../../redux/slices/navbarSlice'
import PageLink from './PageLink.jsx'
import SocialLink from './SocialLink.jsx'

const Navbar = () => {
  const isOpen = useSelector(selectIsOpen)
  const dispatch = useDispatch()

  return (
    <div className="relative z-10 flex justify-center  h-[100px]">
      <div className="flex items-center">
        <button onClick={() => dispatch(setIsOpen())} className="z-30 absolute right-20 flex">
          DropDown
        </button>
      </div>
      {isOpen && (
        <nav className="w-[100%] h-[100dvh] z-20 flex flex-col flex-wrap items-center justify-evenly bg-red-600">
          <label className="flex text-[2rem]">
            <PageLink click={() => dispatch(setIsOpen())} to="/" name="FAKESTORE" />
          </label>
          <div className="flex flex-col gap-4 text-[4.5rem]">
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
