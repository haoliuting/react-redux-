import React, { Component } from 'react';

class User extends Component {
  render() {
    const {match} = this.props
    return (
      <div>
        User: {match.params.user}
      </div>
    );
  }
}

export default User;