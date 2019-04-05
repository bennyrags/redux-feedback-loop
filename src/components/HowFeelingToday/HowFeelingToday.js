import React, { Component } from 'react'

class HowFeelingToday extends Component {
    render() {
        return(
            <section>
                <h1>
                    How Are You Feeling Today?
                </h1>
                <label>Feeling?</label>
                <input type="number"/>
                <button>Next</button>
            </section>
        )
    }
}

export default HowFeelingToday;