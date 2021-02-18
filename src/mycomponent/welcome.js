import React, {Component} from 'react'

class Welcome extends Component {
    constructor() {
        super()

        this.state = {
            name:'rafi',
            age: [21, 17, 23, 53, 45],
            country: {
                inMyAgeOF18: 'Bangladesh',
                inMyAgeOF19: 'India',
                inMyAgeOF25: 'Canada',
                inMyAgeOF28: 'America',
            }
        }
    }

    render() {
        return(
            <div>
                <h2 className="redColor">i am  {this.state.name}</h2>
                <h2 className="redColor">i am {this.state.age[0]} years old</h2>
                <h2 className="redColor">i am from {this.state.country.inMyAgeOF25}</h2>
            </div>
        )
    }
}

export default Welcome