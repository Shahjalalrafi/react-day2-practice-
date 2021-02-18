import React from 'react'

const AlertMe = (a) => {
    alert(a)
}

const Arrow = () => {

    return(
        <button onClick={AlertMe.bind(this, 'click from arrow')}>click me</button>
    )
}

export default Arrow