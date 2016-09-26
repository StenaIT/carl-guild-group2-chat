'use strict';

let socket = io();

class App extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.sendMessage = this.sendMessage.bind(this);

		this.state = {
			message: ''
		}
	}
	componentDidMount() {
		socket.on('init', this.initialize);
		socket.on('send_message', this.sendMessage);
	}

	initialize(data) {
		console.log('Connected and initialized!');
	}

	handleChange(event) {
		this.setState({message: event.target.value});
		event.preventDefault();
	}

	sendMessage() {
		socket.emit('send_message', {message: this.state.message});
	}

	render() {
		return (
			<div>
				<form>
					<input type="text" placeholder="Enter text" onChange={this.handleChange} value={this.state.message} />
				</form>
				<button onClick={this.sendMessage}>Send</button>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
