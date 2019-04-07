import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

class HowFeelingToday extends Component {

    state = {
        feeling: ''
    }

    handleClick = (e) => {
        this.props.dispatch({ type: 'HOW_FEELING_TODAY', payload: this.state.feeling });
        this.props.history.push(`/understanding`);
    }

    handleChange = (e) => {
        if (e.target.value > 5 || e.target.value < 0) {
            alert('Choose a number between 1 and 5!')
            e.target.value = 0;
            return
        }
        this.setState({
            feeling: e.target.value,
        })
    }

    render() {
        return (
            <section>
                <h1>
                    How Are You Feeling Today?
                </h1>
                <label>Feeling?</label>
                <input type="number" onChange={this.handleChange} value={this.state.feeling} />
                <button onClick={this.handleClick}>Next</button>
                <ReviewFeedback />
            </section>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(HowFeelingToday);