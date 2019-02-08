import React, { Component } from 'react';
import './Header.scss';
import logo from '../../Images/logo.png';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <div className='header-main'>
          <div className='header-left'>
            <NavLink title='Alex Bruce' to='/' className='navlink'>
              <img className='header-logo' src={logo} alt=''/>
            </NavLink>
            <NavLink title='Alex Bruce' to='/' className='navlink'>
              <button className='header-name'>Alex Bruce</button>
            </NavLink>
          </div>
          <div className='header-right'>
            <NavLink title='About' to='/' className='navlink'>
              <button className='header-about header-button'>about</button>
            </NavLink>
            <NavLink title='Portfolio' to='/portfolio' className='navlink'>
              <button className='header-portfolio header-button'>portfolio</button>
            </NavLink>
            <NavLink title='Contact' to='/contact' className='navlink'>
              <button className='header-contact header-button'>contact</button>
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;