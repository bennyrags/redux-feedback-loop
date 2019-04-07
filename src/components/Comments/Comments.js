import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';


class Comments extends Component {
    state = {
        comments: ''
    }

    handleClick = (e) => {
        this.props.dispatch({ type: 'COMMENTS', payload: this.state.comments });
        this.props.history.push(`/ReviewFeedback`);
    }

    handleChange = (e) => {
        this.setState({
            comments: e.target.value,
        })
    }

    render() {
        return (
            <section>
                <h1>
                    Any Comments You Want To Leave?
                </h1>
                <label>Comments?</label>
                <input type="text" onChange={this.handleChange} value={this.state.comments} />

                <button onClick={this.handleClick}>Next</button>
                <ReviewFeedback />
            </section>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(Comments);