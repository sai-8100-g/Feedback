import {Component} from 'react'

import './index.css'

import FeedBackItem from '../FeedbackItem'

class Feedback extends Component {
  render() {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="main-container">
        <div className="feedback-container">
          <h1>How satisfied are you with our customer support performance</h1>
          <ul>
            {emojis.map(eachObj => (
              <FeedBackItem emojis={eachObj} key={eachObj.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback
