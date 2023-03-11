import React from 'react'

const Movie = (props) => {
  return (
    <div className="movie">
        <img src={props.img} alt="" />
        <h4>{props.title} </h4>
        <h2>Year: {props.year} </h2>
    </div>
  )
}

export default Movie