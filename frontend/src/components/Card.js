import React from 'react'

function Card(props) {
    return (
        <a href={props.link}>
            <div className="data">
                <h2>{props.title}</h2>
            </div>
        </a>
    )
}

export default Card