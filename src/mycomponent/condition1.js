import React, { Component } from 'react'

class Condition1 extends Component {
    constructor() {
        super()

        this.state = {
            isLogin: false
        }
    }

    render() {
        if (this.state.isLogin === true) {
            return (<button>LOGOUT</button>)
        }
        else {
            return (<button>LOGIN</button>)
        }
    }
}

export default Condition1