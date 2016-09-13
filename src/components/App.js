'use strict';
import React, {PropTypes} from 'react';
import io from 'socket.io-client';
import MessageList from './MessageList';
import UsersList from './UserList';

import MessageForm from './MessageForm';
let socket = io();

class App extends React.Component {
	getInitialState() {
		return {users: [], messages:[], text: ''};
	}

	componentDidMount() {
		socket.on('init', this._initialize);
		socket.on('send:message', this._messageRecieve);
		socket.on('user:join', this._userJoined);
		socket.on('user:left', this._userLeft);
	}

	_initialize(data) {
		const {users, name} = data;
		this.setState({users, user: name});
	}

	_messageRecieve(message) {
		const {messages} = this.state;
		messages.push(message);
		this.setState({messages});
	}

	_userJoined(data) {
		const {users, messages} = this.state;
		const {name} = data;
		users.push(name);
		messages.push({
			user: 'APPLICATION BOT',
			text : name +' Joined'
		});
		this.setState({users, messages});
	}

	_userLeft(data) {
		const {users, messages} = this.state;
		const {name} = data;
		const index = users.indexOf(name);
		users.splice(index, 1);
		messages.push({
			user: 'APPLICATION BOT',
			text : name +' Left'
		});
		this.setState({users, messages});
	}

	_userChangedName(data) {
		const {oldName, newName} = data;
		const {users, messages} = this.state;
		const index = users.indexOf(oldName);
		users.splice(index, 1, newName);
		messages.push({
			user: 'APPLICATION BOT',
			text : 'Change Name : ' + oldName + ' ==> '+ newName
		});
		this.setState({users, messages});
	}

	handleMessageSubmit(message) {
		const {messages} = this.state;
		messages.push(message);
		this.setState({messages});
		socket.emit('send:message', message);
	}

	render() {
		return (
			<div>
				<UsersList
					users={['test']}
				/>
				<MessageList
					messages={['']}
				/>
				<MessageForm
					onMessageSubmit={this.handleMessageSubmit}
					user={'Woop'}
				/>
			</div>
		);
	}
}

export default App;
