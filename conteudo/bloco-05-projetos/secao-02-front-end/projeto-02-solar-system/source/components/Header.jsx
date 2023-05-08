import React, { Component } from 'react';
import LogoImg from '../../assets/Logo.png';
import '../../styles/Header.css';

class Header extends Component {
  render () {
    return (
      <header className='Header'>
        <img className='Logo' src={LogoImg} />
      </header>
    );
  }
}

export default Header;
