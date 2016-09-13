import React, {PropTypes} from 'react';

class MessageForm extends React.Component {
	constructor() {
		super();
		this.text = '';
	}
	// getInitialState() {
	// 	return {text: ''};
	// }

	handleSubmit(e) {
		e.preventDefault();
		let message = {
			user : this.user,
			text : 'text'
		};

		this.props.onMessageSubmit(message);
		// this.setState({ text: '' });
	}

	changeHandler(e) {
		// this.setState({ text : e.target.value });
	}

	render() {
		return(
			<div className="message_form">
				<h3>Write New Message</h3>
				<form onSubmit={this.handleSubmit}>
					<input
						onChange={this.changeHandler}
						value={this.text}
					/>
				</form>
			</div>
		);
	}
}

MessageForm.propTypes = {
	user: PropTypes.string,
	onMessageSubmit: PropTypes.func
};

export default MessageForm;
