import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';


class Supported extends Component {

    state = {
        supported: ''
    }

    handleClick = (e) => {
        console.log(`this is state from  supported handleClick`, this.state);
        this.props.dispatch({type: 'SUPPORTED', payload: this.state.supported});
        this.props.history.push(`/comments`);
    }

    handleChange = (e) => {
        this.setState({
            supported: e.target.value,
        })
        console.log(`this is state from  supported handleChange`, this.state);

    }
        render() {
        return(
            <section>
                <h1>
                    Are You feeling supported today
                </h1>
                <label>Supported?</label>
                <input type="number" onChange={this.handleChange} value={this.state.supported}/>
 
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
