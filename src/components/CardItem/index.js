// Write your code here.
import './index.css'
const UserDetails = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} container`}>
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>
      <img src={imgUrl} className="img" alt={title} />
    </li>
  )
}

export default UserDetails
