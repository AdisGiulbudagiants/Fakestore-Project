/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom'

const PageLink = ({ end = false, name, to, click, style }) => {
  return (
    <button className={style} onClick={click}>
      <NavLink end={end} to={to}>
        {name}
      </NavLink>
    </button>
  )
}

export default PageLink
