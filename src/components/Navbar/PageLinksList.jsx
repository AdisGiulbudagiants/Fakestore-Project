import { useDispatch } from 'react-redux'
import { setIsOpen } from '../../redux/slices/navbarSlice'
import PageLink from './PageLink'

const PageLinksList = () => {
  const dispatch = useDispatch()

  function handleSetIsOpen() {
    return dispatch(setIsOpen())
  }
  return (
    <>
      <label className="flex text-[2rem]">
        <PageLink click={() => handleSetIsOpen()} to="/" name="FAKESTORE" />
      </label>
      <div className="flex flex-col gap-4 text-[4rem]">
        <PageLink click={() => handleSetIsOpen()} end to="/" name="All" />
        <PageLink click={() => handleSetIsOpen()} to="/clothes" name="Clothes" />
        <PageLink click={() => handleSetIsOpen()} to="/electronics" name="Electronics" />
        <PageLink click={() => handleSetIsOpen()} to="/furniture" name="Furniture" />
        <PageLink click={() => handleSetIsOpen()} to="/shoes" name="Shoes" />
        <PageLink click={() => handleSetIsOpen()} to="/miscellaneous" name="Miscellaneous" />
      </div>
    </>
  )
}

export default PageLinksList
