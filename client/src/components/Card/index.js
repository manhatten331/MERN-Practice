import React from "react";

function Card(props) {
    return (
        <div className="text-center">
            <img src={props.src} alt={props.title} style={{ margin: "0 auto" }} />
            <h3>Genre: {props.genre} </h3>
            <h3>Released: {props.released} </h3>
            <h3>Director: {props.director} </h3>
            <h3>Plot: {props.plot} </h3>
            <h3>Rating: {props.rating} </h3>
        </div>
    )
}

export default Card;