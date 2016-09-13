import React, {PropTypes} from 'react';

class UsersList extends React.Component {
	constructor() {
		super();
		this.users = [];
	}
	render() {
		return (
			<div className="users">
				<h3> Online Users </h3>
				<ul>
					{
						this.users.map((user, i) => {
							return (
								<li key={i}>
									{user}
								</li>
							);
						})
					}
				</ul>
			</div>
		);
	}
}

// UsersList.propTypes = {
//   users: PropTypes.object.isRequired
// };

export default UsersList;
