import React from 'react'

function Hello(props) {

    const clicked = (a) => {
        alert(a)
    }
    return(
        <div>
            <button onClick={clicked.bind(this, 'hello i am from function')}>click me</button>
            <h2>hello from {props.name} and i am {props.age} years old</h2>
        </div>
    )
}

export default Hello