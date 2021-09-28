import React from "react";
import Button from '../button/button'
import '../../App.css'

const Card = props => (
    <div class="card">
        <img class="card-img-top" src={props.url} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{props.song}</h5>
            <p className="card-text">{props.name}</p>
            <Button
            url=""
            class="btn btn-outline-primary"
            content="Reproducir"
            />
        </div>
    </div>

)

export default Card