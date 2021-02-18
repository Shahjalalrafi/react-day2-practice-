import React, {Component} from 'react'

class Name extends Component {
    constructor() {
        super()

        this.state = {
            name: 'rafi'
        }
    }

    ChangeName = (a) => {
        this.setState({name:a})
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.ChangeName.bind(this, 'rakib')}>name Change</button>
            </div>
        )
    }

}

export default Name;