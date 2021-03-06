import React from "react";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        body: "",
        author_id: this.props.currentUser.id,
        channel_id: this.props.channel.id
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].speak(
      { message: this.state.body,
        author_id: this.props.currentUser.id,
        channel_id: this.props.channel.id
      });
    this.setState({ body: "" });
  }

  render() {
    return (
      <div>
        <form className="message-form" onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
            placeholder={`Message #${this.props.channel.name}`}
            className='message-form-input'
          />
        </form>
      </div>
    )
  }
}

export default MessageForm