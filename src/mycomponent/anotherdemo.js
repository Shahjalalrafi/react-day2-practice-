import React, {Component} from 'react'
import ReactDom from 'react-dom'

class AnotherDemo extends Component {

    changeImg() {
        var img = document.getElementById('imgId')
        ReactDom.findDOMNode(img).src = "https://images.unsplash.com/photo-1502447533750-9860c1269ae3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    }

    render() {
        return(
            <div>
                <button onClick={this.changeImg}>change Pic</button><br/>
                <img imgId='imgId' src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"></img>
            </div>
        )
    }
}

export default AnotherDemo