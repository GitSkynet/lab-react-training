import React from 'react'

function IdCard(props) {
    return (
        <>
            <div>
                <img src={props.picture} alt={props.firstName + ' photo'} />
            </div>
            
            <div>
            <h2>Name: {props.firstName}</h2>
            <h3>Last Name: {props.lastName}</h3>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Birthday: {props.birth}</p>
            </div>
        </>
    )
}

export default IdCard;