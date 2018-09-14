import React, { Component } from 'react';

import Input from './components/Input';
import Chat from './components/Chat';

import Message from './models/message';

class App extends Component {


  constructor() {
    super()
    this.state = {
      messages: [],
      socket: new WebSocket('ws://localhost:5000/ws'),
      connected: false
    }

    this.sendMessage = this.sendMessage.bind(this)
  }

  componentDidMount() {
    this.state.socket.onopen = () => this.setState({connected: true})
    this.state.socket.onmessage = function(e) {
      this.setState({
        message: e.data
      })
    }.bind(this)
  }

  sendMessage(data) {
    this.setState({
      messages: this.state.messages.push(new Message(data.message, data.name))
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.connected && <div>Connected</div>}
        <Chat messages={this.state.messages}/>
        <Input sendMessage={this.sendMessage}/>
      </div>
    );
  }
}

export default App;
