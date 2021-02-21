import React, {Component} from 'react'

class TextArea extends Component {

    constructor() {
        super()

        this.state= {
            desc:'',
            userinput: ''
        }
    }

    onChangeHandle = (event) => {
        var myText = event.target.value
        this.setState({userinput:myText})
    }

    render() {
        return(
            <div>
                <textarea placeholder="your message" onChange={this.onChangeHandle}/>
                <p>{this.state.userinput}</p>
            </div>
        )
    }
}
export default TextArea