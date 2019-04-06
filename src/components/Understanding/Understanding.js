import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

class Understanding extends Component {

    state = {
        understanding: ''
    }

    handleClick = (e) => {
        console.log(`this is state from  understanding  handleClick`, this.state);
        this.props.dispatch({type: 'UNDERSTANDING', payload: this.state.understanding});
        this.props.history.push(`/supported`);
    }

    handleChange = (e) => {
        this.setState({
            understanding: e.target.value,
        })
        console.log(`this is state from  understanding handleChange`, this.state);

    }

    render() {
        return(
            <section>
                <h1>
                How Well Are You Understanding the Content?
                </h1>
                <label>Understanding?</label>
                <input type="number" onChange={this.handleChange} value={this.state.understanding}/>
 
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