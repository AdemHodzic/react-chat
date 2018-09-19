import React, { Component } from 'react';

class Input extends Component {

  constructor(props) {
    super(props)

    this.state = {
        name: '',
        message: ''
    }

    this.sendMessage = this.sendMessage.bind(this)
    this.handleName = this.handleName.bind(this)
    this.handleMessage = this.handleMessage.bind(this)
  }


  sendMessage(e) {
    e.preventDefault()
    this.props.sendMessage(this.state)
    this.setState({
      message: ''
    })
  }

  handleName(e) {
    this.setState({name: e.target.value})
  }

  handleMessage(e) {
    this.setState({message: e.target.value})

  }

  render() {

    return(
      <div>
        <form>
        <div className="name">
          <label>Username</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleName} />
        </div>

        <br />

        <div className="message">
          <label>Message</label>
          <input
            type="text"
            name="message"
            value={this.state.message}
            onChange={this.handleMessage} />
        </div>

        <br />

        <button onClick={this.sendMessage}>Send Message</button>
        </form>
      </div>
    )
  }

}

export default Input
