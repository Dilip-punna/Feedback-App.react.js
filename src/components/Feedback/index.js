import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedback: false}

  onClickEmoji = () => {
    this.setState({isFeedback: true})
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div>
        <h1>How satisfied are you with our customer support performance</h1>
        <ul>
          {emojis.map(each => (
            <li key={each.id}>
              <button type="button" onClick={this.onClickEmoji}>
                <img src={each.imageUrl} alt={each.name} value="loveEmojiUrl" />
                <br />
                <span>{each.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankyou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div>
        <img src={loveEmojiUrl} alt="love emoji" value="loveEmojiUrl" />
        <h1>Thank you</h1>
        <p>We will use your feedback.</p>
      </div>
    )
  }

  render() {
    const {isFeedback} = this.state

    return (
      <div>
        {isFeedback ? this.renderThankyou() : this.renderFeedbackQuestion()}
      </div>
    )
  }
}

export default Feedback
