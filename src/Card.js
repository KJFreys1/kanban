import React from "react";
import "./styles/index.css";

function Card(props) {
    return(
        <div>
            <p>{props.data}</p>
        </div>
    )
}

export default Card