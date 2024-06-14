import {Component} from 'react'

import './index.css'

import FeedBackItem from '../FeedbackItem'

class Feedback extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resourcesList: props.resources,
      isHappy: false,
    }
  }

  happyEmojiStatus = () => {
    this.setState({isHappy: true})
  }

  render() {
    const {resourcesList, isHappy} = this.state
    const {emojis, loveEmojiUrl} = resourcesList

    if (isHappy === false) {
      return (
        <div className="main-container">
          <div className="feedback-container">
            <h1>How satisfied are you with our customer support performance</h1>
            <ul>
              {emojis.map(eachObj => (
                <FeedBackItem
                  emojis={eachObj}
                  key={eachObj.id}
                  happyEmojiStatus={this.happyEmojiStatus}
                />
              ))}
            </ul>
          </div>
        </div>
      )
    }
    return (
      <div className="main-container">
        <div className="feedback-container">
          <div className="love-emoji-container">
            <img src={loveEmojiUrl} alt="love emoji" className="love-symbol" />
            <h1 className="thank-para">Thank You</h1>
          </div>
          <p className="support-text-para">
            We will use your feedback to improve out customer support
            performance
          </p>
        </div>
      </div>
    )
  }
}

export default Feedback
