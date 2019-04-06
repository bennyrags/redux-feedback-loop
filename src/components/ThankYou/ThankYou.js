import React, { Component } from 'react'

class ThankYou extends Component {

returnHome = (e) => {

    this.props.history.push('/');
}

render(){
    return(
        <section>
        <h1>Thank You!</h1>
        <button onClick={this.returnHome}>Add More Feedback</button>
        </section>

    )
}

}


export default ThankYou;