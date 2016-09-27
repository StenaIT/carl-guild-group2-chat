class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="message">
        <div className="user">{this.props.message.user}</div>
        <div className="messageText">{this.props.message.text}</div>
      </div>
    );
  }
}

Message.propTypes = {
  message: React.PropTypes.object.isRequired
};

export default Message;
