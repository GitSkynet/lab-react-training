import React from 'react'

function Random(props) {
    let random = Math.floor(Math.random()*props.max)+props.min
    return (
        <div>
            <span>Random number between {props.min} and {props.max} is {random}</span>
        </div>
    )
}

export default Random
