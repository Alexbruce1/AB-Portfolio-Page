import React, { Component } from 'react';
import './Portfolio.scss';
import main from '../../Images/wof/main.png';
import account from '../../Images/wof/account.png';
import landing from '../../Images/wof/landing.png';
import login from '../../Images/wof/login.png';

class Portfolio extends Component {
  render() {
    return (
      <div className='Portfolio'>
        <article className='portfolio-intro'>
          <h1>alex's portfolio</h1>
          <p>I've spent thousands of hours working on dozens of projects alone, in pairs, and in larger groups. Here are a few of the cool projects I've invested my time in producing. </p>
        </article>
        <section className='portfolio-wof'>
          <h2 className='app-intro'>World of Flags</h2>
          <p className='app-description'>World of Flags was the result of the Cross-Pollination project I took part in, and the final major project I worked on at Turing. Two front-end students (myself included) grouped up with two back-end students to create a full-stack application. We built a React app that quizzes users on the flags of the world. It gives hints, if needed, of the shape of the country, and then facts about the country. A user can accumulate points to compete with friends. <br/> This app was built as a mobile-first application, and later scaled up to fit tablets and desktops. While certain features are still in the works for the future, the app is functioning and deployed on Heroku. Give it a shot!</p>
          <article className='portfolio-images'>
            <h2>intro screen</h2>
            <img className='iphone-mockup' alt='' src={landing} />
          </article>
          <article className='portfolio-images'>
            <h2>main page</h2>
            <img className='iphone-mockup' alt='' src={main} />
          </article>
          <article className='portfolio-images'>
            <h2>account page</h2>
            <img className='iphone-mockup' alt='' src={account} />
          </article>
          <a href='https://world-of-flags.herokuapp.com/' target='_blank' rel='noopener noreferrer' className='app-link'>Launch Front-End App</a>
          <a href='https://world-of-flags-backend.herokuapp.com/' target='_blank' rel='noopener noreferrer' className='app-link'>Launch Back-End App</a>
          <a href='https://github.com/alexanderela/world-of-flags' target='_blank' rel='noopener noreferrer' className='app-link'>Go to Front-End Repo</a>
        </section>
      </div>
    )
  }
}

export default Portfolio;