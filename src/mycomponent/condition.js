import React, {Component} from 'react'
import Name from './name'
import Hello from './hello'

class ConditionRender extends Component {

    constructor(){
        super()

        this.state = {
            isLogin : false
        }
    }

    render() {
        return(
            this.state.isLogin ? <Name/> : <Hello/>
        )
    }
}

export default ConditionRender