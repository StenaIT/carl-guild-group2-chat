import ChatApp from './components/ChatApp';
import Register from './components/Register';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    }

    this.createUser = this.createUser.bind(this);
  }

  createUser(userName) {
    this.setState({
      user: userName
    });
  }

  render() {
    if (this.state.user) {
      return <ChatApp user={this.state.user} />;
    } else {
      return <Register createUser={this.createUser} />;
    }
  }
}

ReactDOM.render((
  <Main />
), document.getElementById('app'));
