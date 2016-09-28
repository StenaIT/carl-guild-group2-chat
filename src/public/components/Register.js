class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: ''
    };

    this.onUserNameChange = this.onUserNameChange.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
  }

  onUserNameChange(e) {
    this.setState({
      userName: e.target.value
    });
  }

  handleUserSubmit() {
    this.props.createUser(this.state.userName);
  }

  render() {
    return (
      <div className="registerForm">
        <div className="formHolder">
        <div className="registerHeader">Enter your name to join the Chat Room</div>
          <input type="text" onChange={this.onUserNameChange} value={this.state.userName} />
          <div className="submitButton" onClick={this.handleUserSubmit}>Join chat</div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  createUser: React.PropTypes.func.isRequired
};

export default Register;
