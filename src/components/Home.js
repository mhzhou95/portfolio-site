import React from 'react';

const Home = () => {
  return (
    <div className='home-wrapper'>
      <h2>Bio</h2>{' '}
      <p>
        Hi I'm a software engineer in the greater philadelphia area. I enjoy
        being engaged in learning and growing my coding knowledge because how
        fast the tech world is advancing.
        <h2>Skills</h2>
        <div className='bullet-points'>
          <ul>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>HTML5</li>
            <li>Ruby on Rails</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>Node js</li>
            <li>Express Server</li>
          </ul>
        </div>
      </p>
    </div>
  );
};

export default Home;
