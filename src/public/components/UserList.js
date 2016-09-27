import User from './User';

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="userList">
          {this.props.users.map(user => {
            return <User userName={user} />;
          })}
      </div>
    );
  }
}

UserList.propTypes = {
  users: React.PropTypes.array
};

UserList.defaultProps = {
  users: []
};

export default UserList;
