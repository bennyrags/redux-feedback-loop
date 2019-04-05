import React, { Component } from 'react';
//import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback'
import { HashRouter as Router, Route, Link} from 'react-router-dom'
//views
import HowFeelingToday from '../HowFeelingToday/HowFeelingToday';
import Understanding from '../Understanding/Understanding'
import Supported from '../Supported/Supported'
import Comments from '../Comments/Comments'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Route exact path='/' component={HowFeelingToday} />
          <Route path='/understanding' component={Understanding} />
          <Route path='/supported' component={Supported} />
          <Route path='/comments' component={Comments} />
        </Router>
        <ReviewFeedback />
      </div>
    );
  }
}

//routes go in app js

export default App;
