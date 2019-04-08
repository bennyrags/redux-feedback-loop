import React, { Component } from 'react'
import { connect } from 'react-redux';
import './ReviewFeedback.css'
class ReviewFeedback extends Component {

    state = {
        clicked: false,
    }

    //funct to change button when the feedback is complete. since the comp is included on all the pages, i use the url to check to see if were on the review feedback page rather than another page that includes the review feedback comp
    changeButton = () => {
        let submitButton = document.getElementById('submit');
        let hash = window.location.hash;

        if (hash !== '#/ReviewFeedback') {
            submitButton.setAttribute('disabled', 'true');
            submitButton.innerHTML = 'Incomplete'
        }
        else {
            return
        }
    }

    componentDidMount() {
        this.changeButton();
    }

    render() {

        return (
            <section>
                <h2>
                    Review Your Feedback
            </h2>

                <h3>Feelings: {this.props.reduxState.reducer1.feelings}</h3>
                <h3>Understanding: {this.props.reduxState.reducer1.understanding}</h3>
                <h3>Support: {this.props.reduxState.reducer1.supported}</h3>
                <h3>Comments: {this.props.reduxState.reducer1.comments}</h3>

                <button id='submit' onClick={this.props.submitFeedback} >Submit Feedback</button>

            </section>
        )
    }

}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(ReviewFeedback);


