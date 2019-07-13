import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './styles/styles.scss';

const oddNumbers = (l, r) => {
  let array = [];
  for (let i = l; i < r; i++) {
    if (i % 2 !== 0) {
      array.push(i);
    }
  }
  console.log(array);
};

oddNumbers(2, 5);
const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
