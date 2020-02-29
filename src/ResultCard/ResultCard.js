import React from 'react'

function ResultCard(props) {
    return (
        <div>
        <p >Name:{props.name}</p>
        <p>Topic:{props.topic}</p>
        <p>Score:{props.score}</p>
        </div>
    )
}

export default ResultCard
