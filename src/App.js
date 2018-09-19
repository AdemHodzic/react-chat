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
    this.addMessage = this.addMessage.bind(this)
  }

  componentDidMount() {
    this.state.socket.onopen = () => this.setState({connected: true})
    this.state.socket.onmessage = function(e) {
      const msg = JSON.parse(e.data)
      this.addMessage(msg)
    }.bind(this)
  }

  sendMessage(data) {
    const msg = (new Message(data.message, data.name)).toJSON();
    //this.addMessage(msg)
    this.state.socket.send(JSON.stringify(msg));
  }

  addMessage(msg) {
    const newState = this.state.messages;
    newState.push(msg);
    this.setState({
      messages: newState
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
