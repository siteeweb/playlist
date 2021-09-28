import React from "react";

const Button = props => (
    <a
    href={props.url}
    className={props.class}
    >
        {props.content}
    </a>
)

export default Button