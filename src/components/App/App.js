import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback'
import { HashRouter as Router, Route, Link} from 'react-router-dom'
//views
import HowFeelingToday from '../HowFeelingToday/HowFeelingToday';
import Understanding from '../Understanding/Understanding'
import Supported from '../Supported/Supported'
import Comments from '../Comments/Comments'
import { connect } from 'react-redux'



class App extends Component {



submitFeedback = (e) => {
//this funct needs to use axios to POST the finished obj
//via Redux I think?

//then onClick call this func in ReviewFeedback.js
let feedbackData = this.props.reduxState.reducer1
console.log(`feedback data in submitFeedback (should be compl reducer1 obj)`, feedbackData);

// axios({
//   method: "post",
//   url: "/feedback",
//   data: "hello",
// })
// .then(response=>{
// console.log(`Response from submitFeedback post req,`, response)
// })
// .catch(error=>{
//   alert(`There was an error submitting your feedback. Please try again later.`)
//   console.log(`Error from submitFeedback post req,`, error)
// })
  }



  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Route exact path='/' component={HowFeelingToday} />
          <Route path='/understanding' component={Understanding} />
          <Route path='/supported' component={Supported} />
          <Route path='/comments' component={Comments} />
    <Route path='/ReviewFeedback' render={(routeProps) => <ReviewFeedback {...routeProps} submitFeedback={this.submitFeedback} />} /> 
  


        </Router>
        {/* <ReviewFeedback /> */}
      </div>
    );
  }
}

//routes go in app js
const mapReduxStateToProps= reduxState => ({
reduxState
});

export default connect(mapReduxStateToProps)(App);
