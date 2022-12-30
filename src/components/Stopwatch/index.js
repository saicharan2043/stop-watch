// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {minute: 0, seconde: 0, isTrue: false}
  }

  componentDidMount() {
    const uniqueId = setInterval(this.isIncrese, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.uniqueId)
  }

  onStart = () => {
    this.setState({isTrue: true})
  }

  onStop = () => {
    this.setState({isTrue: false})
  }

  onReset = () => {
    this.setState({minute: 0, seconde: 0, isTrue: false})
  }

  isIncrese = () => {
    const {isTrue, seconde} = this.state
    if (isTrue) {
      if (seconde === 59) {
        this.setState(privews => ({minute: privews.minute + 1, seconde: 0}))
      } else {
        this.setState(privews => ({seconde: privews.seconde + 1}))
      }
    }
  }

  render() {
    const {minute, seconde} = this.state

    return (
      <div className="bg-img">
        <h1 className="heading">Stopwatch</h1>
        <div className="container">
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="img-of-time"
            />
            <p className="timer-text">Timer</p>
          </div>
          <h1 className="heading-timer">
            {minute < 10 ? `0${minute}` : minute}:
            {seconde < 10 ? `0${seconde}` : seconde}
          </h1>
          <div className="button-container">
            <button className="button btn1" onClick={this.onStart}>
              Start
            </button>
            <button className="button btn2" onClick={this.onStop}>
              Stop
            </button>
            <button className="button btn3" onClick={this.onReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
