import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
    state = {
        comments: ''
    }

    handleClick = (e) => {
        console.log(`this is state from  comments handleClick`, this.state);
        this.props.dispatch({type: 'COMMENTS', payload: this.state.comments});
       // this.props.history.push(`/comments`);
    }

    handleChange = (e) => {
        this.setState({
            comments: e.target.value,
        })
        console.log(`this is state from  comments handleChange`, this.state);

    }
        render() {
        return(
            <section>
                <h1>
                    Are You feeling supported today
                </h1>
                <label>Comments?</label>
                <input type="text" onChange={this.handleChange} value={this.state.comments}/>
 
                <button onClick={this.handleClick}>Next</button>
            </section>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(Comments);