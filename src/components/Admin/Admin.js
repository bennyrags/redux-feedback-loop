import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {

componentDidMount() {
    //get will get called here
    this.props.getFeedback();
}

    render() {
        return(
            <section>
                <h1>Feedback Results</h1>
                <table>
                    <thead>
                        <tr>
                            <td>Feeling</td>
                            <td>Comprehension</td>
                            <td>Support</td>
                            <td>Comments</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </section>
        )
    }


}

const mapReduxStateToProps = reduxState => ({
    reduxState
})

export default connect(mapReduxStateToProps)(Admin);