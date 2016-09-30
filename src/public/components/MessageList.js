import Message from './Message'

class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    jQuery(".messageScollpane").animate({scrollTop:jQuery(".messageScollpane").prop('scrollHeight')+jQuery(".messageScollpane").height()},0);

  }

  render() {
    return (
      <div className="messageList">
          <div className="userNameHeader">{this.props.user}</div>
          <div className="messageScollpane">
          {this.props.messages.map(messageItem => {
            return <Message message={messageItem} />;
          })}
          </div>
      </div>
    );
  }
}




MessageList.propTypes = {
  messages: React.PropTypes.array
};

MessageList.defaultProps = {
  messages: []
};

export default MessageList;
