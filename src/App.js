import React, { Component } from 'react'
import './App.scss';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  onChangeInput = (e) => {
    const { value } = e.target

    this.setState({ value })
  }

  submit = () => {
    console.log(this.state.value)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          beSMSDispatch
        </header>
        <content>
        
        </content>
        <footer>
          <div>
            <input
              type="text"
              onChange={this.onChangeInput}  
              value={this.state.value}
              placeholder='Please in put message ...'
            />
            <button
              onClick={this.submit}
            >
              Send
            </button>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
