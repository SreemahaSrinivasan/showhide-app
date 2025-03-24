// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {isFirstNameShown: false, isLastNameShown: false}

  onChangeFirstNameButton = () => {
    this.setState(prevState => ({
      isFirstNameShown: !prevState.isFirstNameShown,
    }))
  }

  onChangeLastNameButton = () => {
    this.setState(prevState => ({
      isLastNameShown: !prevState.isLastNameShown,
    }))
  }

  render() {
    const {isFirstNameShown, isLastNameShown} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.onChangeFirstNameButton}
            >
              Show/Hide Firstname
            </button>
            {isFirstNameShown ? <p className="name">Joe</p> : null}
          </div>
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.onChangeLastNameButton}
            >
              Show/Hide Lastname
            </button>
            {isLastNameShown ? <p className="name">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
