import React, { Component } from 'react'
import { connect } from 'react-redux';
import './ReviewFeedback.css'
class ReviewFeedback extends Component {


    //need to make a func that looks to make sure all fields are complete
    //enables button
    //changes text from incomplete to submit
    //allows user to click on button to submit feedback

    //OR 

    //if URL has the string of the ReviewFeedback, we know the fields are filled and its time to submit

    //ok so how do we change the button? let's start with that

    changeButton = () => {
        console.log(`changeButton func fired on componentDidMount`);
        let submitButton = document.getElementById('submit');
        console.log(`submit button`, submitButton)
        let hash = window.location.hash;
        console.log('window location pathname:', window.location.hash)
        
        if (hash !== '#/ReviewFeedback') {
            submitButton.setAttribute('disabled', 'true');
            submitButton.innerHTML='Incomplete'
    }       
        else {
            
        }
    }

    componentDidMount() {
        this.changeButton()

    }


    render() {
        
        return(
            <section>
            <h2>
                Review Your Feedback
            </h2>

            <h3>Feelings: {this.props.reduxState.reducer1.feelings}</h3>
            <h3>Understanding: {this.props.reduxState.reducer1.understanding}</h3>
            <h3>Support: {this.props.reduxState.reducer1.supported}</h3>
            <h3>Comments: {this.props.reduxState.reducer1.comments}</h3>
            
            <button id='submit'  onClick={this.props.submitFeedback} >Submit Feedback</button>

            {/* <button id='submit' onClick={this.props.submitFeedback}>Submit Feedback</button>
            </section> */}
    </section>
        )
    }

}



const mapReduxStateToProps = reduxState => ({
    reduxState
    });
    
    export default connect(mapReduxStateToProps)(ReviewFeedback);


