'use strict';
import MessageList from './MessageList'

let socket = null;

class ChatApp extends React.Component {
	constructor(props) {
		super(props);
		socket = io();
		this.setupBindings();

		this.state = {
			messages: [],
			inputMessage: '',
			typing: false
		}
	}

	setupBindings() {
		this.handleChange = this.handleChange.bind(this);
		this.sendMessage = this.sendMessage.bind(this);
		this.messageReceived = this.messageReceived.bind(this);
		this.initialize = this.initialize.bind(this);
		this.userConnected = this.userConnected.bind(this);
	}

	componentDidMount() {
		socket.on('init', this.initialize);
		socket.on('message_received', this.messageReceived);
		socket.on('user_connected', this.userConnected);
	}

	initialize(messages) {
		this.setState({
			messages: messages
		});
		console.log('Connected and initialized!');
		socket.emit('register_user', this.props.user);
	}

	userConnected(user) {
		this.setState({
			messages: this.state.messages.concat([{user: user, text: 'I connected!'}])
		})
	}

	handleChange(event) {
		this.setState({inputMessage: event.target.value});
		event.preventDefault();
	}

	sendMessage() {
		socket.emit('send_message', {
			text: this.state.inputMessage,
			user: this.props.user
		});
	}

	messageReceived(message) {
		console.log('Messages received! ' + JSON.stringify(message));
		this.setState({
			messages: this.state.messages.concat([message])
		})
	}

	render() {
		return (
			<div className="chatContainer">
				<MessageList messages={this.state.messages} />
				<form>
					<input type="text" placeholder="Enter text" onChange={this.handleChange} value={this.state.message} />
				</form>
				<button onClick={this.sendMessage}>Send</button>
			</div>
		);
	}
}

ChatApp.propTypes = {
	user: React.PropTypes.string.isRequired
}

export default ChatApp;
