import React from "react";
import "./styles/index.css";
import Card from "./Card"

function Column(props) {

    let cards = props.data.cards.map(el => {
        return <Card data={el} change={props.change} />
    })


  return (
    <div>
      <div>
        <h2>{props.data.title}</h2>
        <button>+</button>
      </div>
    { cards }
    </div>
  );
}

export default Column