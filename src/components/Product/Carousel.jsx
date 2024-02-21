/* eslint-disable react/prop-types */
import { useState } from 'react'
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'

const Carousel = ({ items }) => {
  const [current, setCurrent] = useState(0)

  const handlePreviousSlide = () => {
    return current === 0 ? setCurrent(items.images.length - 1) : setCurrent(current - 1)
  }
  const handleNextSlide = () => {
    return current === items.images.length - 1 ? setCurrent(0) : setCurrent(current + 1)
  }

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-500`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.images.map((image) => {
          return <img key={image} src={image} loading="lazy" alt="pic" />
        })}
      </div>
      <div className=" absolute top-0 h-full w-full justify-between items-center flex z-0 px-2">
        <button onClick={handlePreviousSlide}>
          <BiChevronLeft
            size={50}
            className="hover:opacity-40 hover:scale-[1.3] transition ease-in-out duration-400"
          />
        </button>
        <button onClick={handleNextSlide}>
          <BiChevronRight
            size={50}
            className="hover:opacity-40 hover:scale-[1.3] transition ease-in-out duration-400"
          />
        </button>
      </div>
    </div>
  )
}

export default Carousel
