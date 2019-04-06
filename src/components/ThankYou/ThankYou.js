import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThankYou extends Component {

state = {
    resetFeedback: {
        feeling:'',
        understanding:'',
        support:'',
        comments: '',
    }
}


returnHome = (e) => {
    this.props.dispatch({type: 'RESET', payload: this.state.resetFeedback});
    this.props.history.push('/');
}

render(){
    return(
        <section>
        <h1>Thank You!</h1>
        <button onClick={this.returnHome}>Add More Feedback</button>
        </section>

    )
}

}

const mapReduxStateToProps = reduxState => ({
    reduxState
})

export default connect(mapReduxStateToProps)(ThankYou);