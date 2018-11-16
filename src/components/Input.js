import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

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
    this.setState({ name: e.target.value })
  }

  handleMessage(e) {
    this.setState({ message: e.target.value })

  }

  render() {

    return (
      <div>
        <form>
          <Grid
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={8}
            container
            style={style.grid}>
              <div style={style.name}>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  placeholder="Enter Your Name"
                  onChange={this.handleName}
                  style={style.inputBox} />
              </div>
              <div style={style.message} >
                <input
                  type="text"
                  name="message"
                  placeholder="Enter Your Message"
                  value={this.state.message}
                  onChange={this.handleMessage}
                  style={style.inputBox} />
              </div>
              <button onClick={this.sendMessage} style={style.submitButton}>Send Message</button>
          </Grid>
        </form>
      </div>
    )
  }
}

const height = '10vh';
const style = {
  grid: {
    padding: '2vw',
    width: '100vw',
  },
  name: {
    width: '18vw',
    height: height
  },
  message: {
    width: '60vw',
    margin: 'auto 2vw',
    height: height
  },
  inputBox: {
    width: '100%',
    height: height,
    fontSize: '2vw'

  },
  submitButton: {
    width: '8vw',
    height: height
  }
}

export default Input
