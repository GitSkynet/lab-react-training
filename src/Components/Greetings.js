import React from 'react'

function Greetings(props) {
    return (
        <div>
            {props.lang==="de" && <span>Hallo </span>}
            {props.lang==="en" && <span>Hello </span>}
            {props.lang==="es" && <span>Hola </span>}
            {props.lang==="fr" && <span>Salut </span>}
            {props.children}
        </div>
    )
}

export default Greetings
