import React, { Component } from 'react'
import { connect } from 'react-redux'
class Supported extends Component {
    render() {
        return(
            <section>
                <h1>
                    Are You feeling supported today
                </h1>
                <label>Feeling?</label>
                <input type="number"/>
 
 {/* need to set up next button so it goes to next view and adds the input value to reduxState */}
                <button>Next</button>
            </section>
        )
    }
}

export default Supported;