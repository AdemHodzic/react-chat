import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
  padding: '2em'
}

class Chat extends Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: this.props.messages
    }
  }

  render() {
    let elements = this.state.messages.map(item => ( 
      <ListItem key={item.message}>
        <Paper style={styles}>
          <Typography variant="h6">{item.name}:</Typography>
          <Typography variant="body2">{item.message} </Typography>
        </Paper>
      </ListItem>
    ))
      
    return(
      <Grid 
        container
        direction="row"
        alignItems="flex-start"
        >
        <Grid item>
          <List>
            {elements}
          </List>
        </Grid>
      </Grid>
    )
  }
}

export default Chat
