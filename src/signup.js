import React, {Component} from 'react'

class SignUp extends Component {


    render() {
        return(
            <div>
                <form>
                    <input type="text" name="fName" placeholder="enter first name"></input><br></br>
                    <input type="text" name="lName" placeholder="enter last name"></input><br></br>
                    <input type="email" name="email" placeholder="enter email address"></input><br></br>
                    <input type="number" name="number" placeholder="enter mobile number"></input><br></br>
                    
                    <input type="submit" value="sign up"></input>
                </form>
            </div>
        )
    }
}

export default SignUp