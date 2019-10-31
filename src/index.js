import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './index.css'

class App extends Component {
  state = {
    textInput: null
  }

  textInputFocus = (element) => {
    this.textInput = element
  }

  handleClick = () => {
    this.textInput.focus()
  }

  render () {
    return (
      <div className="div-box">
        <input type="text" ref={this.textInputFocus}/>
        <input type="button" value="focus" onClick={this.handleClick}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
