import React, { Component } from 'react'
import { connect } from 'react-redux'
class HowFeelingToday extends Component {
    render() {
        return(
            <section>
                <h1>
                    How Are You Feeling Today?
                </h1>
                <label>Feeling?</label>
                <input type="number"/>
 
 {/* need to set up next button so it goes to next view and adds the input value to reduxState */}
                <button>Next</button>
            </section>
        )
    }
}

export default HowFeelingToday;