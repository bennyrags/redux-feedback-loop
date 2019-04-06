import React, { Component } from 'react'
import { connect } from 'react-redux';

class ReviewFeedback extends Component {

    render() {
        return(
            <section>
            <h2>
                Review Your Feedback
            </h2>

            <h3>Feelings: {this.props.reduxState.reducer1.feelings}</h3>
            <h3>Understanding: {this.props.reduxState.reducer1.understanding}</h3>
            <h3>Support: {this.props.reduxState.reducer1.support}</h3>
            <h3>Comments: {this.props.reduxState.reducer1.comments}</h3>
            
            <button>Incomplete</button>
            </section>

        )
    }

}



const mapReduxStateToProps = reduxState => ({
    reduxState
    });
    
    export default connect(mapReduxStateToProps)(ReviewFeedback);


