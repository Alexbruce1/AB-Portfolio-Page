import React, { Component } from 'react';
import './About.scss';
import Person from '../../Images/person.svg';
import Software from '../../Images/software.svg';
import computer from '../../Images/img1.jpg';
import me from '../../Images/me.jpg';

class About extends Component {
  constructor() {
    super();
    this.state = {
      greeting: ''
    }
  }
  componentDidMount() {
    let currentTime = new Date();
    let greeting;

    if (currentTime.getHours() < 12) {
      greeting = 'good morning'
    } else if (currentTime.getHours() === 12) {
      greeting = 'hello'
    } else if (currentTime.getHours() > 12 && currentTime.getHours() < 17) {
      greeting = 'good afternoon'
    } else if (currentTime.getHours() > 17) {
      greeting = 'good evening'
    }

    this.setState({
      greeting
    });
  }

  render() {
    let { greeting } = this.state;

    return (
      <div className='About'>
        <article className='about-intro'>
          <img className='background-photo' alt='' src={computer}/>
          <h1>{greeting}, I'm alex</h1>
          <p>
            I'm a front-end software developer with a passion for problem-solving, collaboration, music, dogs, and fast cars. I've always loved solving puzzles and figuring out how things work, which has occasionally led to taking my car apart just to see what makes it tick. I've, more recently, discovered a similar love for JavaScript. I enjoy a good challenge, and live for the 'builder's high' feeling after completing something. Now, creating clean, cohesive, and powerful UIs is what occupies most of my time.
          </p>
          <img className='profile-picture' alt='' src={me}/>
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
              I'm passionate about my interests, and driven by learning new things. At the root of these interests are some traits of my personality that also apply to my professional life.
            </p>
          </article>
          <article className='personal-visual'>
            <h3>visual</h3>
            <p>
              I love creating visual forms of art, and have a good artistic eye. I create digital artwork related to cars and motorsports, which I've had commissioned for customers. I've worked as a photographer. And more recently, I've gained a love for UI and UX design. <br/> Often the best web designs go unnoticed by the average user because they're naturally intuitive, clean, and unobstructive. They can promote productivity and be clearly navigable, all while remaining visually stunning. These designs inspire me to improve my understanding of what makes a website beautiful, and raise the bar for myself.
            </p>
          </article>
          <article className='personal-functional'>
            <h3>functional</h3>
            <p>
              I've always enjoyed taking things apart just to put them back together, sometimes in the same way they came apart, and sometimes in a new way that may be better than before. Like I mentioned previously, that has sometimes led to me modifying cars, partly to see what's inside, and partly to see if I can improve the system. I take this same approach with web development. I love learning patterns and conventions of writing code that I can use to improve my own code.
            </p>
          </article>
        </section>
      </div>
    )
  }
}

export default About;