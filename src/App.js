import {Component} from 'react'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    textInput: '',
    isSave: false,
  }

  onChangeInput = event => {
    this.setState({textInput: event.target.value})
  }

  onClickSave = () => {
    this.setState({isSave: true})
  }

  onClickEdit = () => {
    this.setState({isSave: false})
  }

  render() {
    const {textInput, isSave} = this.state
    return (
      <div className="main-card">
        <div className="text-card">
          <h1>Editable Text Input</h1>
          {isSave ? (
            <div className="input-card">
              <p>{textInput}</p>
              <button
                className="button"
                type="button"
                onClick={this.onClickEdit}
              >
                Edit
              </button>
            </div>
          ) : (
            <div className="input-card">
              <input
                className="input"
                type="text"
                value={textInput}
                onChange={this.onChangeInput}
              />
              <button
                className="button"
                type="button"
                onClick={this.onClickSave}
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
