import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

class Understanding extends Component {

    state = {
        understanding: ''
    }

    handleClick = (e) => {
        console.log(`this is state from  understanding  handleClick`, this.state);
        this.props.dispatch({ type: 'UNDERSTANDING', payload: this.state.understanding });
        this.props.history.push(`/supported`);
    }

    handleChange = (e) => {
        if (e.target.value > 5 || e.target.value < 0) {
            alert('Choose a number between 1 and 5!')
            e.target.value = 0;
            return
        }
        this.setState({
            understanding: e.target.value,
        })
        console.log(`this is state from  understanding handleChange`, this.state);

    }

    render() {
        return (
            <section>
                <h1>
                    How Well Are You Understanding the Content?
                </h1>
                <label>Understanding?</label>
                <input type="number"  onChange={this.handleChange} value={this.state.understanding} />

                <button onClick={this.handleClick}>Next</button>
                <ReviewFeedback />
            </section>
        )
    }
}


const mapReduxStateToProps = reduxState => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(Understanding);