import React, { Component } from 'react'

class SignUp extends Component {

    constructor() {
        super()

        this.state = {
            fname: '',
            lname: '',
            email: '',
            number: ''
        }
    }

    onChangeHandler = (event) => {
        var inputName = event.target.name
        var inputValue = event.target.value

        this.setState({ [inputName]: inputValue })

        if (inputName === 'fname') {
            var namePatter = /^([a-zA-Z]){2,30}$/
            if (!namePatter.test(inputValue)) {
                this.setState({ fname: 'this input is not valid' })
            }
        }

        if (inputName === 'lname') {
            var namePatter = /^([a-zA-Z]){2,30}$/
            if (!namePatter.test(inputValue)) {
                this.setState({ lname: 'this is not valid' })
            }
        }

        if (inputName === 'email') {

        }

        if (inputName === 'number') {
            if (!Number(inputValue)) {
                this.setState({ number: 'this number is not valid' })
            }

        }
    }

    render() {
        return (
            <div>
                <p>first fName:{this.state.fname}</p>
                <p>last lName:{this.state.lname}</p>
                <p>email address:{this.state.email}</p>
                <p>phone number:{this.state.number}</p>
                <form>
                    <input onChange={this.onChangeHandler} type="text" name="fname" placeholder="enter first name"></input><br></br>
                    <input onChange={this.onChangeHandler} type="text" name="lname" placeholder="enter last name"></input><br></br>
                    <input onChange={this.onChangeHandler} type="email" name="email" placeholder="enter email address"></input><br></br>
                    <input onChange={this.onChangeHandler} type="number" name="number" placeholder="enter mobile number"></input><br></br>

                    <input name='submit' type="submit" value="sign up"></input>
                </form>
            </div>
        )
    }
}

export default SignUp