class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.userName}</div>
    );
  }
}

User.propTypes = {
  userName: React.PropTypes.string
};

export default User;
