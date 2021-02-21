import React, {Component} from 'react'

class Select extends Component {

    constructor () {
        super()

        this.state= {
            city1 : 'Dhaka',
            city2 : 'Chittagong',
            city3 : 'rajshahi',
            city4 : 'khulna',
            show : '',
            auto : ''
        }
    }

    onChangeHandler = (event) => {
        var selected = event.target.value
        this.setState({show: selected, auto: selected})
    }

    render() {
        return(
            <div>
                <p>{this.state.show}</p>
                <select onChange={this.onChangeHandler}>
                    <option>{this.state.city1}</option>
                    <option>{this.state.city2}</option>
                    <option>{this.state.city3}</option>
                    <option>{this.state.city4}</option>
                </select>
            </div>
        )
    }
}

export default Select