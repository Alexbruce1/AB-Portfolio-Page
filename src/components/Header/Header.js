import React, { Component } from 'react';
import './Header.scss';
import logo from '../../Images/logo.png';

class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <div className='header-left'>
          <img className='header-logo' src={logo} alt=''/>
          <button className='header-name'>alex bruce</button>
        </div>
        <div className='header-right'>
          <button className='header-about header-button'>about</button>
          <button className='header-portfolio header-button'>portfolio</button>
          <button className='header-contact header-button'>contact</button>
        </div>
      </div>
    )
  }
}

export default Header;