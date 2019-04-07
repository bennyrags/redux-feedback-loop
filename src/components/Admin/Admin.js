import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {

handleDelete = (id) => {
console.log(`item id`, id);

window.confirm('Are You Sure You want to delete?') && this.props.delete(id);
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
                        {this.props.reduxState.adminReducer.map((item) => 
                            <tr key={item.id}>
                                <td>{item.feeling}</td>
                                <td>{item.understanding}</td>
                                <td>{item.support}</td>
                                <td>{item.comments}</td>
                                <td><button onClick={()=> this.handleDelete(item.id)}>delete</button></td>
                            </tr>
                            )}
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