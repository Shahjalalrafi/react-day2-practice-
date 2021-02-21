import React, {Component} from 'react'

class Refresh extends Component {
    
    constructor() {
        super()

        this.updateNow = this.updateNow.bind(this)
    }

    updateNow() {
        this.forceUpdate()
    }

    render() {

        return(
            <div>
                <button onClick={this.updateNow}>refresh now</button>
                <h2>{Math.random()}</h2>
            </div>
        )
    }
}

export default Refresh