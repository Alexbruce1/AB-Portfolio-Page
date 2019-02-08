import React, { Component } from 'react';
import './About.scss';
import Person from '../../Images/person.svg';
import Software from '../../Images/software.svg';
// import Car from '../../Images/car.svg';
import computer from '../../Images/img1.jpg';

class About extends Component {
  render() {
    return (
      <div className='About'>
        {/* <div className='about-icon first-icon'>
          <img className='about-image' alt='' src={Person} />
        </div> */}
        <article className='about-intro'>
          <h1>Hi, I'm Alex</h1>
          <p>
            I'm a front-end software developer with a passion for problem-solving, collaboration, music, dogs, and fast cars. I've always loved solving puzzles and figuring out how things work, which has occasionally led to taking my car apart just to see what makes it tick. I've, more recently, discovered a similar love for JavaScript. I enjoy a good challenge, and live for the 'builder's high' feeling after completing something. Now, creating clean, cohesive, and powerful UIs is what occupies most of my time.
          </p>
          <img className='about-photo' alt='' src={computer}/>
        </article>
        <div className='about-icon'>
          <img className='about-image' alt='' src={Software} />
        </div>
        <section className='about-tech'>
          <article className='about-education'>
            <h3>Education</h3>
            <p>
              On January 10, 2019, I graduated from the Turing School of Software and Design in Denver, Colorado. I'm a graduate of their Front-End Engineering program, where I learned the fundamentals of development, including Languages, frameworks, and libraries, as well as version control, unit testing, continuous integration, and deployment. I'm currently actively seeking job opportunities, and plan to apply my skills in the following areas. 
            </p>
          </article>
          <article className='about-list stack-list'>
            <h3>Tech Stack</h3>
            <p>
              HTML5, Javascript (ES5, ES6, ES7 +), CSS3, CSS Preprocessors (SASS, SCSS), Object Oriented Programming, JQuery, React, Redux, React-Router, React Native, Vue, Node, Express, Knex, SQL
            </p>
          </article>
          <article className='about-list tech-list'>
            <h3>Other Technologies</h3>
            <ul>
              <li>Version Control (Git)</li>
              <li>Terminal</li>
              <li>Visual Studio</li>
              <li>Adobe Photoshop</li>
            </ul>
          </article>
          <div className='about-icon'>
            <img className='about-image' alt='' src={Person} />
          </div>
        </section>
        <section className='about-personal'>
          <article className='personal-intro'>
            <h2>who I really am</h2>
            <p>
              I'm passionate about my interests, and driven by learning new things. At the heart of these interests are certain traits of my personality that I also apply to my professional life.
            </p>
          </article>
          <article className='personal-visual'>
            <h3>visual</h3>
            <p>
              I love creating visual forms of art, and have a good artistic eye. I create digital artwork of topics related to cars and motorsports, which I've had commissioned for customers. I've worked as a photographer. And more recently, I've gained a love for UI and UX design.
            </p>
          </article>
          <article className='personal-functional'>
            <h3>functional</h3>
            <p>
              I've always enjoyed taking things apart just to put them back together, sometimes in the same way they came apart, and sometimes in a new way that may be better than before.
            </p>
          </article>
        </section>
      </div>
    )
  }
}

export default About;