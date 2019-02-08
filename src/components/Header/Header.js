import React, { Component } from 'react';
import './Header.scss';
import logo from '../../Images/logo.png';
import { NavLink } from 'react-router-dom';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

class Header extends Component {

  scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className='Header'>
        <div className='header-main'>
          <div className='header-left'>
            <NavLink onClick={this.scrollToTop} title='Alex Bruce' to='/' className='navlink'>
              <ScrollAnimation animateOnce duration='1' offset='0' animateIn='fadeInDown'>
                <img className='header-logo' src={logo} alt=''/>
              </ScrollAnimation>
            </NavLink>
            <NavLink onClick={this.scrollToTop} title='Alex Bruce' to='/' className='navlink'>
              <button className='header-name'>Alex Bruce</button>
            </NavLink>
          </div>
          <div className='header-right'>
            <NavLink onClick={this.scrollToTop} title='About' to='/' className='navlink'>
              <button className='header-about header-button'>about</button>
            </NavLink>
            <NavLink onClick={this.scrollToTop} title='Portfolio' to='/portfolio' className='navlink'>
              <button className='header-portfolio header-button'>portfolio</button>
            </NavLink>
            <NavLink onClick={this.scrollToTop} title='Contact' to='/contact' className='navlink'>
              <button className='header-contact header-button'>contact</button>
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;