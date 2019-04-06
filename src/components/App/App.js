import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
//views
import Header from '../Header/Header';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import HowFeelingToday from '../HowFeelingToday/HowFeelingToday';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import ThankYou from '../ThankYou/ThankYou';



class App extends Component {

  submitFeedback = (e) => {
    //this funct needs to use axios to POST the finished obj
    //via Redux I think?

    //then onClick call this func in ReviewFeedback.js
    let feedbackData = this.props.reduxState.reducer1
    console.log(`feedback data in submitFeedback (should be compl reducer1 obj)`, feedbackData);

    axios({
      method: "post",
      url: "/feedback",
      data: feedbackData,
    })
      .then(response => {
        //in thankYouPage branch, trying to push to thank you page after response
        //getting this error: 
        //Error from submitFeedback post req, TypeError: Cannot read property 'push' of undefined
        //what if I move from then to afte axios
        console.log(`Response from submitFeedback post req,`, response);
        //redirect the ol fashion way AFTER func
        window.location.href = '#/ThankYou';


      })
      .catch(error => {
        alert(`There was an error submitting your feedback. Please try again later.`)
        console.log(`Error from submitFeedback post req,`, error)
      })
      //See above error. I get it when I move this to the end of the function
      //perhaps I have to move it back to the component? can i call a func here that rests in component?
      //this.props.history.push('/ThankYou')
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
          <Route path='/ThankYou' component={ThankYou} />
        </Router>
        {/* <ReviewFeedback /> */}
      </div>
    );
  }
}

//routes go in app js
const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
