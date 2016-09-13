import React, {PropTypes} from 'react';
import Message from './Message';

class MessageList extends React.Component {
	constructor() {
		super();
		this.messages = [];
	}

	render() {
		return (
			<div className="messages">
				<h2> Conversation: </h2>
				{
					this.messages.map((message, i) => {
						return (
							<Message
								key={i}
								user={message.user}
								text={message.text}
							/>
						);
					})
				}
			</div>
		);
	}
}

// MessageList.propTypes = {
// 	messages: PropTypes.array
// };

export default MessageList;
