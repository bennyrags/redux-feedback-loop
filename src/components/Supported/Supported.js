import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';


class Supported extends Component {

    state = {
        supported: ''
    }

    handleClick = (e) => {
        this.props.dispatch({ type: 'SUPPORTED', payload: this.state.supported });
        this.props.history.push(`/comments`);
    }

    handleChange = (e) => {
        if (e.target.value > 5 || e.target.value < 0) {
            alert('Choose a number between 1 and 5!');
            e.target.value = 0;
            return
        }
        this.setState({
            supported: e.target.value,
        })

    }
    render() {
        return (
            <section>
                <h1>
                    Are You feeling supported today
                </h1>
                <label>Supported?</label>
                <input type="number" onChange={this.handleChange} value={this.state.supported} />
                <button onClick={this.handleClick}>Next</button>
                <ReviewFeedback />
            </section>
        )
    }
}


const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Supported);
