import React, {Component} from 'react'

class From1 extends Component {

    constructor() {
        super()

        this.state= {
            username: ''
        }
    }

    onchangeHandler = (event) => {
       var myName = event.target.name
       var myValue = event.target.value

       this.setState({[myName]:myValue})
    }

    submitHandler = ()=> {
        alert(this.state.username)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <h2>my first from</h2>
                    <p>{this.state.name}</p>
                    <input name="username" onChange={this.onchangeHandler} type='text' placeholder="enter your name"></input><br></br>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        )
    }
}

export default From1