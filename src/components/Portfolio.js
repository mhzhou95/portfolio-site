import React from 'react';

const Portfolio = () => {
  return (
    <div>
      <h2 className='portfolio-header'>My Works</h2>
      <div className='portfolio-wrapper'>
        <div className='portfolio-item'>
          <h3>Bubbles App</h3>
          <div className='img bubbles-app' />
          <a href='https://shout-bubbles.herokuapp.com/'>
            <i className='fas fa-external-link-square-alt' /> Link
          </a>{' '}
          <a href='https://github.com/mhzhou95/mern-stack-app'>
            <i className='fab fa-github-square' /> Github{' '}
          </a>
          <p>
            Full Stack MERN application with login authentication and crud on bubbles.
            Express your thoughts by shouting it into this real time forum.
          </p>
        </div>
        <div className='portfolio-item'>
          <h3>SMS Scheduler</h3>
          <div className='img sms-scheduler' />
          <a href='https://sms-scheduler-mz.herokuapp.com/'>
            <i className='fas fa-external-link-square-alt' /> Link
          </a>{' '}
          <a href='https://github.com/mhzhou95/sms-scheduler'>
            <i className='fab fa-github-square' /> Github{' '}
          </a>
          <p>
            React App with firebase for database. Create a text message and send
            it at the date and time that you desire to any US number. Plan out
            your schedule and get reminders with this app. Inspired by how often
            people check their phones.
          </p>
        </div>
        <div className='portfolio-item'>
          <h3>Movie/Show Picker</h3>
          <div className='img movie-picker' />
          <a href='https://what-do-mz.herokuapp.com/'>
            <i className='fas fa-external-link-square-alt' /> Link
          </a>{' '}
          <a href='https://github.com/mhzhou95/WhatToWatchApp'>
            <i className='fab fa-github-square' /> Github
          </a>
          <p>
            React App using open movie database api to fetch popular movies and
            shows. Random button is included to randomize one item out of all
            items on the page. Find by name, genre, and movies playing in
            theathers.
          </p>
        </div>
        <div className='portfolio-item'>
          <h3>Energy Drink Shop</h3>
          <div className='img energy-shop' />
          <a href='https://shop-energy.herokuapp.com/'>
            <i className='fas fa-external-link-square-alt' /> Link
          </a>{' '}
          <a href='https://github.com/mhzhou95/energy-shop-fix'>
            <i className='fab fa-github-square' /> Github
          </a>
          <p>
            A shopping site for popular energy drinks. There is a cart made with
            sessions so even if the user is not logged in they can still add
            items to the cart. To checkout the user must first log in. Uses
            stripe api for checkout and shipping address. Admin account option
            for adding new products.
          </p>
        </div>
        <div className='portfolio-item'>
          <h3>Tower Defense Game</h3>
          <div className='img tower-defense' />
          <a href='https://tower-defenders.herokuapp.com/game'>
            <i className='fas fa-external-link-square-alt' /> Link
          </a>{' '}
          <a href='https://github.com/aharris4723/towers-defense'>
            <i className='fab fa-github-square' /> Github
          </a>
          <p>
            Tower defense game built with almost entirely class based
            JavaScript. Targeting AI built with pythagorean theorem to calculate
            distance between towers and enemies. Defend against a endless horde
            of goblins that get stronger as you defeat more of them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
