import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
//views
import Header from '../Header/Header';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import HowFeelingToday from '../HowFeelingToday/HowFeelingToday';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import ThankYou from '../ThankYou/ThankYou';
import Admin from '../Admin/Admin'


class App extends Component {

  //Post funct for submitting feedback to table in db
  submitFeedback = (e) => {
    let feedbackData = this.props.reduxState.reducer1

    axios({
      method: "post",
      url: "/feedback",
      data: feedbackData,
    })
      .then(response => {
        console.log(`Response from submitFeedback post req,`, response);

        //redirect the old fashion way after response; this.props.history.push didnt work here
        window.location.href = '#/ThankYou';
      })
      .catch(error => {
        alert(`There was an error submitting your feedback. Please try again later.`)
      })
  }

  //get request func
  getFeedBack = () => {

    axios({
      method: 'GET',
      url: '/feedback'
    })
      .then(response => {
        this.props.dispatch({ type: 'ADMIN_GET', payload: response.data });


      })
      .catch(error => {
        alert(`Something went wrong when trying to get Feedback. Please try again later.`);
        console.log(`This is the error after trying to getFeedback,`, error);

      })
  }

  //delete request function for the admin page; is passed as prop to admin page; takes the id that is passed from the button that fires it
  deleteFeedback = (id) => {
    axios({
      method: 'DELETE',
      url: `/feedback/${id}`
    })
      .then(response => {
        console.log(`Response after deleting feedback`, response);
        this.getFeedBack();

      })
      .catch(error => {
        console.log(`Error deleting feedback:`, error);

      })
  }

  componentDidMount() {
    this.getFeedBack();
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
          {/* These routes with the render attribute were thanks to Nina and Jarvis */}
          <Route path='/ReviewFeedback' render={(routeProps) => <ReviewFeedback {...routeProps} submitFeedback={this.submitFeedback} />} />
          <Route path='/ThankYou' component={ThankYou} />
          <Route path='/Admin' render={(routeProps) => <Admin {...routeProps} delete={this.deleteFeedback} />} />
        </Router>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
