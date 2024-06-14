import './index.css'

const FeedBackItem = props => {
  const {emojis, happyEmojiStatus} = props
  const {imageUrl, name, id} = emojis
  const happyEmoji = () => {
    happyEmojiStatus(id)
  }
  return (
    <li>
      <img src={imageUrl} alt={name} onClick={happyEmoji} />
      <p>{name}</p>
    </li>
  )
}

export default FeedBackItem
