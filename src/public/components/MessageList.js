import Message from './Message'

class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="messageList">
          {this.props.messages.map(messageItem => {
            return <Message message={messageItem} />;
          })}
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