import React, { Component } from 'react';

class Chat extends Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: this.props.messages
    }
  }

  render() {
    let elements = this.state.messages.map(item => <li key={item.message}><strong>{item.name}:    </strong><span>{this.message}</span></li>)
    return(
      <div>
        <ul>
          {elements}
        </ul>
      </div>
    )
  }
}

export default Chat
