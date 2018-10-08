import React, { Component } from 'react';

import Input from './components/Input';
import Chat from './components/Chat';

import Message from './models/message';

import Grid from '@material-ui/core/Grid';

class App extends Component {


  constructor() {
    super()
    this.state = {
      messages: [],
      socket: new WebSocket('ws://chat-go-websockets.herokuapp.com/ws'),
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
        <Grid 
          direction="column"
          alignItems="center"
          justify="center"
          alignContent="center"
          container>

          <Grid item>
            {this.state.connected && <div>Connected</div>}
          </Grid>        
  
          <Grid item >
            <Chat messages={this.state.messages}/>
          </Grid>        
  
          <Grid item>
            <Input sendMessage={this.sendMessage}/>
          </Grid>        
        
        </Grid>
    );
  }
}

export default App;

/**
 * 
        
      
 */