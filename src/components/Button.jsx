/* eslint-disable react/prop-types */
const Button = ({ style, name, click, type = 'button' }) => {
  return (
    <button
      className={`${style} border p-2 hover:bg-white hover:text-black transition ease-in-out duration-400`}
      type={type}
      onClick={click}
    >
      {name}
    </button>
  )
}

export default Button
