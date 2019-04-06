import React, { Component } from 'react'
import { connect } from 'react-redux'
class HowFeelingToday extends Component {

    state = {
        feeling: ''
    }

    handleClick = (e) => {
        console.log(`this is state from how feeling handleClick`, this.state);
        this.props.dispatch({type: 'HOW_FEELING_TODAY', payload: this.state.feeling});
        this.props.history.push(`/understanding`);
    }

    handleChange = (e) => {
        this.setState({
            feeling: e.target.value,
        })
        console.log(`this is state from how feeling handleChange`, this.state);

    }

    render() {
        return(
            <section>
                <h1>
                    How Are You Feeling Today?
                </h1>
                <label>Feeling?</label>
                <input type="number" onChange={this.handleChange} value={this.state.feeling}/>
 
 {/* need to set up next button so it goes to next view and adds the input value to reduxState */}
                <button onClick={this.handleClick}>Next</button>
            </section>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
reduxState
});

export default connect(mapReduxStateToProps)(HowFeelingToday);