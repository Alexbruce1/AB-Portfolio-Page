import React, { Component } from 'react';
import './About.scss';

class About extends Component {
  render() {
    return (
      <div className='About'>
        <article>
          <h1>Hi, I'm Alex</h1>
          <p>
            I'm a front-end software developer with a passion for problem-solving, collaboration, music, dogs, and fast cars. I've always loved solving puzzles and figuring out how things work, which has occasionally led to taking my car apart just to see what makes it tick. I've, more recently, discovered a similar love for JavaScript. I enjoy a good challenge, and live for the 'builder's high' feeling after completing something. Now, creating clean, cohesive, and powerful UIs is what occupies most of my time.
          </p>
          <h3>education</h3>
          <p>
            On January 10, 2019, I graduated from the Turing School of Software and Design in Denver, Colorado. I'm a graduate of their Front-End Engineering program, where I learned the fundamentals of development, including Languages, frameworks, and libraries, as well as version control, unit testing,continuous integration, and deployment.
          </p>

          <h3>tech stack</h3>
          <ul>
            <li>HTML5</li>
            <li>Javascript (ES5, ES6, ES7 +)</li>
            <li>CSS3</li>
            <li>CSS Preprocessors (SASS, SCSS)</li>
            <li>JQuery</li>
            <li>React</li>
            <li>React Native</li>
            <li>Vue</li>
            <li>Node</li>
            <li>Express</li>
            <li>Knex</li>
            <li>Object Oriented Programming</li>
          </ul>

          <h3>other technologies</h3>
          <ul>
            <li>Version Control (Git)</li>
            <li>Terminal</li>
            <li>Visual Studio</li>
            <li>Adobe Photoshop</li>
          </ul>

        </article>
      </div>
    )
  }
}

export default About;