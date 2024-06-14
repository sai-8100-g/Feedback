import './index.css'

const FeedBackItem = props => {
  const {emojis} = props
  const {imageUrl, name} = emojis
  return (
    <li>
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default FeedBackItem
