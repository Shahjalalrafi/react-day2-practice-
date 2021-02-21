import React, {Component} from 'react'
import ReactDom from 'react-dom'

class NewDemo extends Component {

    myFunc() {
        var name = document.getElementById('myName')
        var element = <h1>i am change from rafi</h1>

        ReactDom.render(element, name)
    }

    render() {
        return(
            <div>
                <button onClick={this.myFunc}>change demo</button>
                <h1 id="myName">my name is rafi</h1>
        </div>
        )
    }
}

export default NewDemo

