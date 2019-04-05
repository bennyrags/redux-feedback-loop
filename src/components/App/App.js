import React, { Component } from 'react';
//import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import HowFeelingToday from '../HowFeelingToday/HowFeelingToday';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HowFeelingToday />
      </div>
    );
  }
}

export default App;
