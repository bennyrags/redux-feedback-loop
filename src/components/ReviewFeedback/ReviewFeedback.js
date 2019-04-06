import React, { Component } from 'react'
import { connect } from 'react-redux';

class ReviewFeedback extends Component {

    render() {
        return(
            <section>
            <h2>
                Review Your Feedback
            </h2>

            <h3>Feelings: </h3>
            <h3>Understanding:</h3>
            <h3>Support:</h3>
            <h3>Comments</h3>
            </section>
        )
    }

}



const mapReduxStateToProps = reduxState => ({
    reduxState
    });
    
    export default connect(mapReduxStateToProps)(ReviewFeedback);


