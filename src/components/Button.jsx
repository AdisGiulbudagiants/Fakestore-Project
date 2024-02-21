/* eslint-disable react/prop-types */
const Button = ({ style, name, click, type = 'button' }) => {
  return (
    <button
      className={`${style} border dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black border-black  hover:bg-black hover:text-white p-2 transition ease-in-out duration-400`}
      type={type}
      onClick={click}
    >
      {name}
    </button>
  )
}

export default Button
