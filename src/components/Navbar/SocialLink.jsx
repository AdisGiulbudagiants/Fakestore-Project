/* eslint-disable react/prop-types */
const SocialLink = ({ href, name }) => {
  return (
    <a className="mr-2" href={href} target="_blank" rel="noopener noreferrer">
      {name}
    </a>
  )
}

export default SocialLink
