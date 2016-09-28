class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    jQuery(".messageScollpane").animate({scrollTop:jQuery(".messageScollpane").height()*2},2000);
  }

  render() {
    return (
      <div className="message">
        <div className="user">{this.props.message.user}:</div>
        <div className="messageText">{this.props.message.text}</div>
      </div>
    );
  }
}

Message.propTypes = {
  message: React.PropTypes.object.isRequired
};

export default Message;
