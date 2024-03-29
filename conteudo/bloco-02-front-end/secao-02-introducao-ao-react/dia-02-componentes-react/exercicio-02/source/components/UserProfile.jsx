import React, { Component } from 'react';
import Image from './Image';

class UserProfile extends Component {
  render () {
    const { user: { name, email, avatar } } = this.props;
    return (
      <div>
        <p> {name} </p>
        <p> {email} </p>
        <Image source={avatar} alternativeText="User avatar" />
      </div>
    );
  }
}

export default UserProfile;
