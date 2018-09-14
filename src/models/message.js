class Message {

  constructor(message, name) {
    this.name = name
    this.message = message
  }

  toJSON() {
    return {
      "name": this.name,
      "message": this.message
    }
  }

}

export default Message
